import {
  customElements,
  ControlElement,
  customModule,
  Module,
  Container,
  IDataSchema,
  Panel,
  LineChart,
  HStack,
  Button,
  moment,
  Control,
  Image,
  Label
} from '@ijstech/components';
import { IConfig, PageBlock } from './store/index';
import { groupBtnStyle, tradingChartStyle } from './index.css';
import {} from '@ijstech/eth-contract'
import {} from '@ijstech/eth-wallet'
import ScomDappContainer from '@scom/scom-dapp-container'

// Dummy data
import { day, week, month, threeMonths, year, all, historical, ytd } from './store/index';
import assets from './assets';

type IType = 'price' | 'market' | 'candlestick';
type IDuration = 1 | 7 | 30 | 90 | 365 | 'YTD' | 'All';

const durations: { title: string, value: IDuration }[] = [
  {
    title: '1D',
    value: 1
  },
  {
    title: '7D',
    value: 7
  },
  {
    title: '1M',
    value: 30
  },
  {
    title: '3M',
    value: 90
  },
  {
    title: '1Y',
    value: 365
  },
  {
    title: 'YTD',
    value: 'YTD'
  },
  {
    title: 'ALL',
    value: 'All'
  }
]

interface ICandlestickData {
  timeOpen: string;
  timeClose: string;
  timeHigh: string;
  timeLow: string;
  quote: {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    marketCap: number;
    timestamp: string;
  }
}

interface TradingChartElement extends ControlElement {
  cryptoName: string;
  theme?: 'light' | 'dark';
  showHeader?: boolean;
  showFooter?: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['i-scom-trading-chart']: TradingChartElement
    }
  }
}

@customModule
@customElements('i-scom-trading-chart')
export default class ScomTradingChart extends Module {
  private pnlTradingChart: Panel;
  private lbTitle: Label;
  private pnlCharts: Panel;
  private chartElm: LineChart;
  private typeChart: IType = 'price';
  private duration: IDuration = 1;
  private hStackType: HStack;
  private hStackSwitch: HStack;
  private hStackDuration: HStack;
  private dappContainer: ScomDappContainer;

  private _oldData: IConfig = { cryptoName: '' };
  private _data: IConfig = { cryptoName: '' };
  private oldTag: any = {};
  tag: any = {};
  defaultEdit: boolean = true;
  readonly onConfirm: () => Promise<void>;
  readonly onDiscard: () => Promise<void>;
  readonly onEdit: () => Promise<void>;

  static async create(options?: TradingChartElement, parent?: Container) {
    let self = new this(parent, options);
    await self.ready();
    return self;
  }

  constructor(parent?: Container, options?: TradingChartElement) {
    super(parent, options);
  }

  get showFooter() {
    return this._data.showFooter ?? true
  }
  set showFooter(value: boolean) {
    this._data.showFooter = value
    if (this.dappContainer) this.dappContainer.showFooter = this.showFooter;
  }

  get showHeader() {
    return this._data.showHeader ?? true
  }
  set showHeader(value: boolean) {
    this._data.showHeader = value
    if (this.dappContainer) this.dappContainer.showHeader = this.showHeader;
  }

  private getData() {
    return this._data;
  }

  private async setData(data: IConfig) {
    this._data = data;
    if (this.dappContainer) {
      this.dappContainer.showHeader = this.showHeader;
      this.dappContainer.showFooter = this.showFooter;
    }
    this.updateTitle();
    this.updateChart();
  }

  private getTag() {
    return this.tag;
  }

  private async setTag(value: any) {
    const newValue = value || {};
    for (let prop in newValue) {
      if (newValue.hasOwnProperty(prop)) {
        this.tag[prop] = newValue[prop];
      }
    }
    this.width = this.tag.width;
    if (this.tag?.theme === 'dark') {
      this.classList.add('trading-chart--dark');
    } else {
      this.classList.remove('trading-chart--dark');
    }
    if (this.pnlTradingChart) {
      this.updateChart();
      setTimeout(() => {
        this.resizeCharts();
      }, 1000);
    }
  }

  // getConfigSchema() {
  //   return this.getThemeSchema();
  // }

  // onConfigSave(config: any) {
  //   this.tag = config;
  //   this.updateChart();
  // }

  // async edit() {
  //   // this.pnlTradingChart.visible = false;
  // }

  // async confirm() {
  //   this.updateChart();
  //   // this.pnlTradingChart.visible = true;
  // }

  // async discard() {
  //   // this.pnlTradingChart.visible = true;
  // }

  // async config() { }

  private getPropertiesSchema(readOnly?: boolean) {
    const propertiesSchema = {
      type: 'object',
      properties: {
        required: ['cryptoName'],
        cryptoName: {
          type: 'string',
          enum: [
            'Bitcoin',
            'Ethereum',
            'XRP',
            'Cardano',
            'Dogecoin',
            'Polkadot',
            'Polygon',
            'Solana',
            'Uniswap',
            'Avalanche'
          ]
        },
      }
    }
    return propertiesSchema as IDataSchema;
  }

  private getThemeSchema(readOnly?: boolean) {
    const themeSchema = {
      type: 'object',
      properties: {
        theme: {
          type: 'string',
          enum: [
            'light',
            'dark'
          ],
          readOnly
        },
        width: {
          type: 'string',
          readOnly
        }
      }
    }
    return themeSchema as IDataSchema;
  }

  private _getActions(propertiesSchema: IDataSchema, themeSchema: IDataSchema) {
    const actions = [
      {
        name: 'Settings',
        icon: 'cog',
        command: (builder: any, userInputData: any) => {
          return {
            execute: async () => {
              this._oldData = { ...this._data };
              this.updateChart();
            },
            undo: () => {
              this._data = { ...this._oldData };
              this.updateChart();
            },
            redo: () => { }
          }
        },
        userInputDataSchema: propertiesSchema,
      },
      {
        name: 'Theme Settings',
        icon: 'palette',
        command: (builder: any, userInputData: any) => {
          return {
            execute: async () => {
              if (!userInputData) return;
              this.oldTag = JSON.parse(JSON.stringify(this.tag));
              this.setTag(userInputData);
              if (builder) builder.setTag(userInputData);
            },
            undo: () => {
              if (!userInputData) return;
              this.setTag(this.oldTag);
              if (builder) builder.setTag(this.oldTag);
            },
            redo: () => { }
          }
        },
        userInputDataSchema: themeSchema
      }
    ]
    return actions
  }

  getConfigurators() {
    return [
      {
        name: 'Builder Configurator',
        target: 'Builders',
        getActions: () => {
          return this._getActions(this.getPropertiesSchema(), this.getThemeSchema());
        },
        getData: this.getData.bind(this),
        setData: this.setData.bind(this),
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      },
      {
        name: 'Emdedder Configurator',
        target: 'Embedders',
        getActions: () => {
          return this._getActions(this.getPropertiesSchema(true), this.getThemeSchema(true))
        },
        getData: this.getData.bind(this),
        setData: this.setData.bind(this),
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      }
    ]
  }

  private updateTitle() {
    if (!this._data || !this.lbTitle) return;
    const { cryptoName } = this._data;
    if (!cryptoName) return;

    this.lbTitle.caption = `${cryptoName} to USD Chart`;
  }

  private convertToCandlestickData(data: ICandlestickData[]) {
    let candlestickData = [];
    let minPrice = -1, maxPrice = -1;
    for (const item of data) {
      const timeOpen = new Date(item.timeOpen).getTime();
      const timeClose = new Date(item.timeClose).getTime();
      const timeHigh = new Date(item.timeHigh).getTime();
      const timeLow = new Date(item.timeLow).getTime();
      const open = item.quote.open;
      const close = item.quote.close;
      const highest = item.quote.high;
      const lowest = item.quote.low;
      if (minPrice > lowest || minPrice === -1) {
        minPrice = lowest;
      }
      if (maxPrice < highest || maxPrice === -1) {
        maxPrice = highest
      }
      candlestickData.push({
        name: new Date(timeOpen).toLocaleString(),
        value: [timeOpen, open, close, lowest, highest, item.quote.volume]
      });
    }
    const stepPrice = (maxPrice - minPrice) / 4;
    minPrice = minPrice > stepPrice ? minPrice - stepPrice : minPrice;
    maxPrice = maxPrice + stepPrice;
    return { candlestickData, minPrice, maxPrice };
  }

  private convertData(data: { [key: string]: { v: number[] } }) {
    const price = [];
    const market = [];
    const vol = [];
    let minPrice = -1, maxPrice = -1, minMarket = -1, maxMarket = -1;
    if (!data) return { price, market, vol, minPrice, maxPrice, minMarket, maxMarket };
    for (const key in data) {
      const item = data[key];
      const time = Number(key) * 1000;
      if (minPrice > item.v[0] || minPrice === -1) {
        minPrice = item.v[0];
      }
      if (maxPrice < item.v[0] || maxPrice === -1) {
        maxPrice = item.v[0]
      }
      if (minMarket > item.v[2] || minMarket === -1) {
        minMarket = item.v[2];
      }
      if (maxMarket < item.v[2] || maxMarket === -1) {
        maxMarket = item.v[2]
      }
      price.push([time, item.v[0]]);
      market.push([time, item.v[2]]);
      vol.push(item.v[1]);
    }
    const stepPrice = (maxPrice - minPrice) / 4;
    const stepMarket = (maxMarket - minMarket) / 4;
    minPrice = minPrice > stepPrice ? minPrice - stepPrice : minPrice;
    maxPrice = maxPrice + stepPrice;
    minMarket = minMarket > stepMarket ? minMarket - stepMarket : minMarket;
    maxMarket = maxMarket + stepMarket;
    return { price, market, vol, minPrice, maxPrice, minMarket, maxMarket };
  }

  private getChartData() {
    // TODO - Use real data
    // const { cryptoName } = this._data;
    let chartData: { data: { points: { [key: string]: { v: number[] } } } };
    switch (this.duration) {
      case 1:
        chartData = day;
        break;
      case 7:
        chartData = week;
        break;
      case 30:
        chartData = month;
        break;
      case 90:
        chartData = threeMonths;
        break;
      case 365:
        chartData = year;
        break;
      case 'YTD':
        chartData = ytd;
        break;
      case 'All':
        chartData = all;
        break;
      default:
        return this.convertData({});
    }
    return this.convertData(chartData.data.points);
  }

  private formatNumber(num: number) {
    const absNum = Math.abs(num);
    if (absNum >= 1000000000) {
      return (num / 1000000000).toFixed(2) + 'B';
    } else if (absNum >= 1000000) {
      return (num / 1000000).toFixed(2) + 'M';
    } else if (absNum >= 1000) {
      return (num / 1000).toFixed(2) + 'K';
    } else if (absNum < 0.0000001) {
      return num.toFixed();
    } else if (absNum < 0.00001) {
      return num.toFixed(6);
    } else if (absNum < 0.001) {
      return num.toFixed(4);
    } else {
      return num.toFixed(2);
    }
  }

  private initChart(data: any, type: IType, isDark: boolean) {
    const { price, market, vol, minPrice, maxPrice, minMarket, maxMarket } = data;
    const self = this;
    const isPrice = type === 'price';
    const firstValue = price[0] ? price[0][1] : 0;
    const lastItem = price[price.length - 1];
    const lastValue = lastItem ? lastItem[1] : 0;
    const lastTime = lastItem ? lastItem[0] : 0;
    const minInterval = (isPrice ? (maxPrice - minPrice) : (maxMarket - minMarket)) / 8;
    const power = Math.pow(10, Math.floor(Math.log10(minInterval)));
    const roundedInterval = Math.ceil(minInterval / power) * power;
    const chartData = {
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          return `${params[0].axisValueLabel} <br />
            ${params[0].seriesName}: <b>${self.formatNumber(params[0].value[1])}</b><br />
            Vol 24h: <b>${self.formatNumber(vol[params[0].dataIndex])}</b>
          `;
        },
        axisPointer: {
          type: 'cross',
          label: {
            show: true,
            formatter: function (params: any) {
              if (params.seriesIndex === 0) {
                return params.value;
              }
              if (params.axisDimension === 'y') {
                return self.formatNumber(params.value);
              }
              return moment(params.value).format('DD MMM YY HH:mm:ss');
            }
          },
          lineStyle: {
            color: '#999',
            width: 1,
            type: 'solid'
          }
        }
      },
      xAxis: {
        type: 'time',
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        position: 'right',
        interval: roundedInterval,
        min: isPrice ? minPrice : minMarket,
        max: isPrice ? maxPrice : maxMarket,
        axisLabel: {
          showMinLabel: false,
          showMaxLabel: false,
          position: 'end',
          formatter: (value: number, index: number) => {
            return self.formatNumber(value)
          }
        },
      },
      grid: {
        left: 40,
        right: 80
      },
      dataZoom: [
        {
          start: 0,
          end: 100
        }
      ],
      // visualMap: isPrice ? {
      //   show: false,
      //   min: price[0] ? price[0][1] : 0,
      //   max: price[0] ? (price[0][1] + 1e-10) : 0,
      //   inRange: {
      //     color: ['#ea3943', '#16c784']
      //   }
      // } : null,
      series: [
        {
          name: isPrice ? 'Price' : 'Market Cap',
          data: isPrice ? price : market,
          type: 'line',
          showSymbol: false,
          endLabel: isPrice ? {
            show: true,
            fontSize: 12,
            color: '#fff',
            backgroundColor: lastValue >= firstValue ? '#16c784' : '#ea3943',
            padding: [0, 4, 0, 4],
            formatter: (params: any) => {
              return `${self.formatNumber(params.value[1])}`;
            }
          } : null,
          markLine: isPrice ? {
            data: [
              {
                name: 'Start',
                yAxis: price[0] ? price[0][1] : 0,
                lineStyle: {
                  type: 'dashed',
                  color: '#aaa'
                },
                label: {
                  position: 'start',
                  distance: -20,
                  formatter: (params: any) => {
                    return `${self.formatNumber(params.value)}`;
                  }
                }
              },
            ],
            symbol: 'none',
          } : null,
          markPoint: isPrice ? {
            symbol: 'circle',
            symbolSize: 10,
            data: [{
              name: 'Current Price',
              xAxis: lastTime,
              yAxis: lastValue
            }]
          } : null,
          areaStyle: isPrice ? {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: lastValue >= firstValue ? '#16c784' : '#ea3943'
                }, {
                  offset: 1,
                  color: isDark ? '#000' : '#fff'
                }
              ]
            }
          } : null,
          itemStyle: isPrice ? {
            color: lastValue >= firstValue ? '#16c784' : '#ea3943'
          } : null
        }
      ]
    };
    return chartData;
  }

  private initCandlestickChart(data: { candlestickData: { name: string, value: number[] }[], minPrice: number, maxPrice: number }) {
    const { candlestickData, minPrice, maxPrice } = data;
    const self = this;
    const lastObj = candlestickData[candlestickData.length - 1];
    const openVal = lastObj?.value[1] || 0;
    const closeVal = lastObj?.value[2] || 0;
    const minInterval = (maxPrice - minPrice) / 8;
    const power = Math.pow(10, Math.floor(Math.log10(minInterval)));
    const roundedInterval = Math.ceil(minInterval / power) * power;
    const chartData = {
      xAxis: {
        type: 'time',
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        position: 'right',
        interval: roundedInterval,
        min: minPrice,
        max: maxPrice,
        axisLabel: {
          showMinLabel: false,
          showMaxLabel: false,
          position: 'end',
          formatter: (value: number, index: number) => {
            return self.formatNumber(value)
          }
        },
      },
      grid: {
        left: 40,
        right: 80
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const val = params[0].value;
          const change = val[2] - val[1];
          return `${params[0].axisValueLabel} <br />
            Open: <b>$${self.formatNumber(val[1])}</b><br />
            High: <b>$${self.formatNumber(val[4])}</b><br />
            Low: <b>$${self.formatNumber(val[3])}</b><br />
            Close: <b>$${self.formatNumber(val[2])}</b><br />
            Change: <b style="color: ${change >= 0 ? '#16c784' : '#ea3943'}">$${self.formatNumber(Math.abs(change))}</b><br />
            Vol: <b>$${self.formatNumber(val[5])}</b><br />
          `;
        },
        axisPointer: {
          type: 'cross',
          label: {
            show: true,
          },
          lineStyle: {
            color: '#999',
            width: 1,
            type: 'solid'
          }
        }
      },
      series: [
        {
          name: 'Price',
          type: 'candlestick',
          data: candlestickData,
          itemStyle: {
            color: '#16c784',
            color0: '#ea3943',
            borderColor: '#16c784',
            borderColor0: '#ea3943',
          },
          markLine: {
            data: [
              {
                name: 'End',
                yAxis: closeVal,
                itemStyle: {
                  color: closeVal >= openVal ? '#16c784' : '#ea3943',
                },
                label: {
                  position: 'end',
                  fontSize: 12,
                  color: '#fff',
                  backgroundColor: closeVal >= openVal ? '#16c784' : '#ea3943',
                  distance: 15,
                  padding: [0, 4, 0, 4],
                  formatter: (params: any) => {
                    return `${self.formatNumber(closeVal)}`;
                  }
                }
              },
            ],
            symbol: 'none',
          }
        }
      ]
    }
    return chartData;
  }

  private updateChart(isType?: boolean) {
    if (!this.pnlTradingChart) return;
    const theme = this.tag?.theme;
    const chartData = this.getChartData();
    const data = this.typeChart !== 'candlestick' ? this.initChart(chartData, this.typeChart, theme === 'dark') : this.initCandlestickChart(this.convertToCandlestickData(historical.data.quotes));
    if (isType || !this.chartElm) {
      this.pnlCharts.clearInnerHTML();
      this.chartElm = new LineChart(this.pnlCharts, {
        width: 'calc(100% - 10px)',
        height: 500,
        theme: theme || 'light',
        data: data
      });
      if (!isType && this.tag?.theme) {
        this.chartElm.theme = theme;
      }
    } else {
      this.chartElm.data = data;
    }
    this.chartElm.drawChart();
  }

  private onTypeChange(src: Control, type: IType, isSwitch?: boolean) {
    if (this.typeChart === type) return;
    this.typeChart = type;
    const hStack = isSwitch ? this.hStackSwitch : this.hStackType;
    const btnType = hStack.querySelector('.chart-btn--active');
    if (btnType) {
      btnType.classList.remove('chart-btn--active');
    }
    src.classList.add('chart-btn--active');
    if (!isSwitch) {
      this.hStackSwitch.firstElementChild?.classList.add('chart-btn--active');
      this.hStackSwitch.lastElementChild?.classList.remove('chart-btn--active');
    }
    this.hStackSwitch.visible = !(!isSwitch && type === 'market');
    this.updateChart(true);
  }

  private onDurationChange(src: Button, duration: IDuration) {
    if (this.duration === duration) return;
    this.duration = duration;
    const btnType = this.hStackDuration.querySelector('.chart-btn--active');
    if (btnType) {
      btnType.classList.remove('chart-btn--active');
    }
    src.classList.add('chart-btn--active');
    this.updateChart();
  }

  private resizeCharts() {
    this.chartElm?.resize();
  }

  init() {
    super.init();
    this.classList.add(tradingChartStyle);
    if (this.tag?.theme === 'dark') {
      this.classList.add('trading-chart--dark');
    }
    const cryptoName = this.getAttribute('cryptoName', true, '');
    const showHeader = this.getAttribute('showHeader', true, true);
    const showFooter = this.getAttribute('showFooter', true, true);
    const width = this.getAttribute('width', true);
    if (width) {
      this.pnlTradingChart.width = width;
    }
    this.setData({
      cryptoName,
      showHeader,
      showFooter
    });

    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.resizeCharts();
      }, 300);
    });
  }

  render() {
    return (
      <i-scom-dapp-container id="dappContainer" showWalletNetwork={false} display="flex" height="100%" width="100%">
        <i-panel id="pnlTradingChart" minWidth={300} maxWidth="100%">
          <i-hstack gap={20} wrap="wrap" width="100%" padding={{ top: 10, left: 20, right: 20 }}>
            <i-label id="lbTitle" width="100%" font={{ bold: true, size: '18px' }} />
            <i-hstack id="hStackType" class={groupBtnStyle}>
              <i-button caption="Price" class="chart-btn--active" onClick={(src: Button) => this.onTypeChange(src, 'price')} />
              <i-button caption="Market Cap" onClick={(src: Button) => this.onTypeChange(src, 'market')} />
            </i-hstack>
            <i-hstack id="hStackSwitch" class={groupBtnStyle}>
              <i-image url={assets.fullPath('img/line.svg')} class="chart-btn--active" onClick={(src: Image) => this.onTypeChange(src, 'price', true)} />
              <i-image url={assets.fullPath('img/candlestick.svg')} onClick={(src: Image) => this.onTypeChange(src, 'candlestick', true)} />
            </i-hstack>
            <i-hstack id="hStackDuration" class={groupBtnStyle} margin={{ left: 'auto' }}>
              {
                durations.map((v, index) => <i-button caption={v.title} class={index === 0 ? 'chart-btn--active' : ''} onClick={(src: Button) => this.onDurationChange(src, v.value)} />)
              }
            </i-hstack>
          </i-hstack>
          <i-panel id="pnlCharts" width="100%" minHeight={500} />
        </i-panel>
      </i-scom-dapp-container>
    )
  }
}
