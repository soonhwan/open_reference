const IS_BROWSER = typeof window !== 'undefined';

const API_SERVER = IS_BROWSER ? '' : (process.env.API_SERVER || 'http://localhost:8080');

const DEFAULT_ROUTE_DELAY = 300; // 0.3 seconds


// log 설정
const logConfig = {
  // init
  componentList: false,
  routeList: false,
  reducerList: false,
  pageList: false,

  // runtime
  createPromiseThunk: false,
  render: true,
}

module.exports = {
  API_SERVER,
  IS_BROWSER,
  DEFAULT_ROUTE_DELAY,
  logConfig,
}