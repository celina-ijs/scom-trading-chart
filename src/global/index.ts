import { moment } from '@ijstech/components';
import { all, day, historical, month, threeMonths, week, year } from './dummy/index';

export * from './interface';

export const API_ENDPOINT = 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/';
export type IType = 'price' | 'market' | 'candlestick';
export type IDuration = '1D' | '7D' | '1M' | '3M' | '1Y' | 'ALL';
const TIME_START_ALL = 1278979200;
const convertId = 2781;

const getTimeStart = (duration: IDuration) => {
  switch (duration) {
    case '1D':
      return moment().subtract(1, 'day').unix();
    case '7D':
      return moment().subtract(1, 'week').unix();
    case '1M':
      return moment().subtract(1, 'month').unix();
    case '3M':
      return moment().subtract(3, 'months').unix();
    case '1Y':
      return moment().subtract(1, 'year').unix();
    case 'ALL':
      return TIME_START_ALL;
    default:
      break;
  }
}

const getInterval = (duration: IDuration) => {
  switch (duration) {
    case '1D':
    case '7D':
    case '1M':
      return '1hr';
    default:
      return 'daily';
  }
}

export const callAPI = async (name: string, type: IType, duration: IDuration) => {
  if (!name || !type || !duration) return {};
  // Param name should be replaced with an id
  const prefix = type === 'candlestick' ?
    `historical?name=${name}&timeStart=${getTimeStart(duration)}&timeEnd=${moment().unix()}&interval=${getInterval(duration)}&convertId=${convertId}` :
    `detail/chart?name=${name}&range=${duration}`;
  try {
    const response = await fetch(`${API_ENDPOINT}${prefix}`);
    const jsonData = await response.json();
    return type === 'candlestick' ? jsonData.data.quotes : jsonData.data.points || {};
  } catch (error) {
    console.log(error);
    // This line will be removed when the API is ready
    return dummyData(type, duration);
  }
  return {};
}

const dummyData = (type: IType, duration: IDuration) => {
  if (type === 'candlestick') return historical.data.quotes;
  switch (duration) {
    case '1D':
      return day.data.points;
    case '7D':
      return week.data.points;
    case '1M':
      return month.data.points;
    case '3M':
      return threeMonths.data.points;
    case '1Y':
      return year.data.points;
    case 'ALL':
      return all.data.points;
    default:
      return {};
  }
}