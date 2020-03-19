import { axiosGetAsync } from '@src/utils/HttpUtils';

export const GET_CAR_COND_MANUFACTURER = 'GET_CAR_COND_MANUFACTURER';
export const GET_CAR_COND_NUMBER_OF_YEAR = 'GET_CAR_COND_NUMBER_OF_YEAR';
export const GET_CAR_COND_MODEL = 'GET_CAR_COND_MODEL';
export const GET_CAR_COND_FUEL = 'GET_CAR_COND_FUEL';
export const GET_CAR_COND_DETAIL_MODEL = 'GET_CAR_COND_DETAIL_MODEL';
export const GET_CAR_COND_DRIV_DIST = 'GET_CAR_COND_DRIV_DIST';
export const GET_CAR_COND_COLOR = 'GET_CAR_COND_COLOR';
export const GET_CAR_COND_OPTION = 'GET_CAR_COND_OPTION';

export const getManufacturer = (carNo, cancelToken = null) => async (dispatch) => {
  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/${carNo}`, cancelToken);
  if (res && res.data) {
    payload = await res.data;
  }

  payload = [
    { value: '1', label: '현대' },
    { value: '2', label: '기아' }
  ];

  dispatch({
    type: GET_CAR_COND_MANUFACTURER,
    payload
  });
};

export const getNumberOfYears = (carCond) => (dispatch) => {
  console.log(carCond);
  const nowYear = new Date().getFullYear();
  const noyOptions = [];
  for (let year = nowYear; year >= nowYear - 20; year--) {
    noyOptions.push({ value: year, label: year + '년식' });
  }

  dispatch({
    type: GET_CAR_COND_NUMBER_OF_YEAR,
    payload: noyOptions
  });
};

export const getModels = (carCond, cancelToken = null) => async (dispatch) => {
  console.log(carCond);
  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/${carCond}`, cancelToken);
  if (res && res.data) {
    payload = await res.data;
  }

  payload = [
    { value: '1', label: 'i30' },
    { value: '2', label: 'i40' },
    { value: '3', label: '그렌저' }
  ];

  dispatch({
    type: GET_CAR_COND_MODEL,
    payload
  });
};

export const getFuels = (carCond, cancelToken = null) => async (dispatch) => {
  console.log(carCond);
  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/${carCond}`, cancelToken);
  if (res && res.data) {
    payload = await res.data;
  }

  payload = [
    { value: '11', label: '가솔린' },
    { value: '22', label: '경유' },
    { value: '33', label: '하이브리드' }
  ];

  dispatch({
    type: GET_CAR_COND_FUEL,
    payload
  });
};

export const getDetailModels = (carCond, cancelToken = null) => async (dispatch) => {
  console.log(carCond);
  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/${carCond}`, cancelToken);
  if (res && res.data) {
    payload = await res.data;
  }

  payload = [
    { value: '11', label: '더뉴i301' },
    { value: '22', label: '더뉴i302' },
    { value: '33', label: '더뉴i303' }
  ];

  dispatch({
    type: GET_CAR_COND_DETAIL_MODEL,
    payload
  });
};

export const getDrivingDistance = (carCond, cancelToken = null) => async (dispatch) => {
  console.log(carCond);
  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/${carCond}`, cancelToken);
  if (res && res.data) {
    payload = await res.data;
  }

  payload = [
    { value: 10000, label: '10000' },
    { value: 20000, label: '20000' },
    { value: 30000, label: '30000' },
    { value: 40000, label: '40000' },
    { value: 50000, label: '50000' }
  ];

  dispatch({
    type: GET_CAR_COND_DRIV_DIST,
    payload
  });
};

export const getColors = (carCond, cancelToken = null) => async (dispatch) => {
  console.log(carCond);
  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/${carCond}`, cancelToken);
  if (res && res.data) {
    payload = await res.data;
  }

  payload = [
    { value: '흰색', label: '흰색' },
    { value: '진주색', label: '진주색' },
    { value: '검정색', label: '검정색' },
    { value: '검정투톤', label: '검정투톤' },
    { value: '쥐색', label: '쥐색' },
    { value: '은색', label: '은색' },
    { value: '은회색', label: '은회색' },
    { value: '은색투톤', label: '은색투톤' },
    { value: '흰색투톤', label: '흰색투톤' },
    { value: '진주투톤', label: '진주투톤' },
    { value: '은하색', label: '은하색' },
    { value: '명은색', label: '명은색' },
    { value: '빨간색', label: '빨간색' },
    { value: '주황색', label: '주황색' },
    { value: '자주색', label: '자주색' },
    { value: '보라색', label: '보라색' },
    { value: '분홍색', label: '분홍색' },
    { value: '노란색', label: '노란색' },
    { value: '갈대색', label: '갈대색' },
    { value: '연금색', label: '연금색' },
    { value: '갈색', label: '갈색' },
    { value: '갈색투톤', label: '갈색투톤' },
    { value: '금색', label: '금색' },
    { value: '금색투톤', label: '금색투톤' },
    { value: '청색', label: '청색' },
    { value: '하늘색', label: '하늘색' },
    { value: '청색', label: '청색' },
    { value: '담녹색', label: '담녹색' },
    { value: '녹색', label: '녹색' },
    { value: '연두색', label: '연두색' },
    { value: '청옥색', label: '청옥색' },
    { value: '기타', label: '기타' }
  ];

  dispatch({
    type: GET_CAR_COND_COLOR,
    payload
  });
};

export const getCarCondOptions = (cancelToken = null) => async (dispatch) => {
  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/`, cancelToken);
  if (res && res.data) {
    payload = await res.data;
  }

  payload = [
    { value: '1', label: '선루프' },
    { value: '2', label: 'LED' },
    { value: '3', label: '하이패스' },
    { value: '4', label: '옵션4' },
    { value: '5', label: '옵션5' },
    { value: '6', label: '옵션6' },
    { value: '7', label: '옵션7' },
    { value: '8', label: '옵션8' },
    { value: '9', label: '옵션9' },
    { value: '10', label: '옵션10' },
    { value: '11', label: '옵션11' },
    { value: '12', label: '옵션12' },
    { value: '13', label: '옵션13' },
    { value: '14', label: '옵션14' },
    { value: '15', label: '옵션15' },
    { value: '16', label: '옵션16' }
  ];

  dispatch({
    type: GET_CAR_COND_OPTION,
    payload
  });
};
