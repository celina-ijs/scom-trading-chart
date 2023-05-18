export interface PageBlock {
  // Properties
  getData: () => any;
  setData: (data: any) => Promise<void>;
  getTag: () => any;
  setTag: (tag: any) => Promise<void>
  validate?: () => boolean;
  defaultEdit?: boolean;
  tag?: any;

  // Page Events
  readonly onEdit: () => Promise<void>;
  readonly onConfirm: () => Promise<void>;
  readonly onDiscard: () => Promise<void>;
  // onClear: () => void;

  // Page Block Events
  edit: () => Promise<void>;
  confirm: () => Promise<void>;
  discard: () => Promise<void>;
  config: () => Promise<void>;
}

export interface IConfig {
  cryptoName: string;
  showHeader?: boolean;
  showFooter?: boolean;
};

export interface IPriceOrMarket {
  price: [number, number][];
  market: [number, number][];
  vol: number[];
  minPrice: number;
  maxPrice: number;
  minMarket: number;
  maxMarket: number;
}

export interface ICandlestick {
  candlestickData: {
    name: string;
    value: number[];
  }[],
  minPrice: number;
  maxPrice: number;
}

export interface ICandlestickData {
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