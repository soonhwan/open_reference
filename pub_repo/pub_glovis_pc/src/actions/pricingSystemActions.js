import { isEmpty } from 'lodash';
import { axiosGetAsync } from '@src/utils/HttpUtils';

export const GET_PRICING_MARKET_PRICE = 'GET_PRICING_MARKET_PRICE';
export const GET_PRICING_CAR_INFO = 'GET_PRICING_CAR_INFO';
export const GET_PRICING_BID_LIST = 'GET_PRICING_BID_LIST';
export const GET_PRICING_AUCTION_DATA = 'GET_PRICING_AUCTION_DATA';
export const GET_PRICING_VIEWABLE_CNT = 'GET_PRICING_VIEWABLE_CNT';
export const GET_PRICING_TICKET_INFO = 'GET_PRICING_TICKET_INFO';

export const getPricingMarketPrice = (carNo, cancelToken = null) => async (dispatch) => {
  if (isEmpty(carNo)) {
    return;
  }

  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/${carNo}`, cancelToken);
  if (res && res.data) {
    payload = await res.data;
  } else {
    payload = {
      monthlyPrice: [4980, 4900, 4780, 4610, 4500],
      currentPrice: {
        minPrice: 2000,
        maxPrice: 7000,
        marketMinPrice: 3000,
        marketMaxPrice: 5500,
        price: 5000
      }
    };
  }

  dispatch({
    type: GET_PRICING_MARKET_PRICE,
    payload
  });
};

export const setPricingCarInfo = (carinfo) => (dispatch) => {
  console.log('setPricingCarInfo', carinfo);
  dispatch({
    type: GET_PRICING_CAR_INFO,
    payload: carinfo
  });
};

export const getPricingByCarNo = (carNo, carCond, viewableCnt, hasPricingTicket, cancelToken = null) => async (dispatch) => {
  console.log('getPricingByCarNo', carNo, carCond);
  if (isEmpty(carNo)) {
    return;
  }

  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/${carNo}`, cancelToken);
  if (res && res.data) {
    payload = await res.data;
  } else {
    payload = {
      crNo: '12가3456',
      noy: '2016년',
      dspl: '1,999cc',
      rlsPrc: '3,851만원',
      fuel: '가솔란+전기',
      frstRegDt: new Date(),
      drvDist: '50000',
      clr: '검정색'
    };
  }

  dispatch({
    type: GET_PRICING_CAR_INFO,
    viewableCnt: hasPricingTicket === true ? viewableCnt : viewableCnt - 1,
    payload
  });
};

export const getPricingBidList = (carNo, cancelToken = null) => async (dispatch) => {
  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/${carNo}`, cancelToken);
  if (res && res.data) {
    payload = await res.data;
  } else {
    payload = [
      {
        location: '분당',
        date: '2019.10',
        name: '그랜저(IG) IG220<br />디젤 프리미엄',
        year: 2018,
        fuel: '디젤',
        km: '53,485',
        color: 'NU(9)<br />그랑블루',
        exhaust: '2,199',
        purpose: '법인/법인<br />상품',
        carNumber: 'KMHF<br />141RBJA<br />160647',
        grade: 'A6',
        initialRegist: '2018.03.30',
        mission: 'A/T',
        options: 'ABS VDC 스마트키 내비(일반)',
        price: '2,240'
      },
      {
        location: '시화',
        date: '2019.11',
        name: '그랜저(IG) IG220<br />디젤 프리미엄',
        year: 2018,
        fuel: '디젤',
        km: '53,485',
        color: 'NU(9)<br />그랑블루',
        exhaust: '2,199',
        purpose: '법인/법인<br />상품',
        carNumber: 'KMHF<br />141RBJA<br />160647',
        grade: 'A6',
        initialRegist: '2018.03.30',
        mission: 'A/T',
        options: 'ABS VDC 스마트키 내비(일반)',
        price: '2,240'
      },
      {
        location: '분당',
        date: '2019.11',
        name: '그랜저(IG) IG220<br />디젤 프리미엄',
        year: 2018,
        fuel: '디젤',
        km: '53,485',
        color: 'NU(9)<br />그랑블루',
        exhaust: '2,199',
        purpose: '법인/법인<br />상품',
        carNumber: 'KMHF<br />141RBJA<br />160647',
        grade: 'A6',
        initialRegist: '2018.03.30',
        mission: 'A/T',
        options: 'ABS VDC 스마트키 내비(일반)',
        price: '2,240'
      },
      {
        location: '시화',
        date: '2019.11',
        name: '그랜저(IG) IG220<br />디젤 프리미엄',
        year: 2018,
        fuel: '디젤',
        km: '53,485',
        color: 'NU(9)<br />그랑블루',
        exhaust: '2,199',
        purpose: '법인/법인<br />상품',
        carNumber: 'KMHF<br />141RBJA<br />160647',
        grade: 'A6',
        initialRegist: '2018.03.30',
        mission: 'A/T',
        options: 'ABS VDC 스마트키 내비(일반)',
        price: '2,240'
      },
      {
        location: '분당',
        date: '2019.10',
        name: '그랜저(IG) IG220<br />디젤 프리미엄',
        year: 2018,
        fuel: '디젤',
        km: '53,485',
        color: 'NU(9)<br />그랑블루',
        exhaust: '2,199',
        purpose: '법인/법인<br />상품',
        carNumber: 'KMHF<br />141RBJA<br />160647',
        grade: 'A6',
        initialRegist: '2018.03.30',
        mission: 'A/T',
        options: 'ABS VDC 스마트키 내비(일반)',
        price: '2,240'
      },
      {
        location: '시화',
        date: '2019.11',
        name: '그랜저(IG) IG220<br />디젤 프리미엄',
        year: 2018,
        fuel: '디젤',
        km: '53,485',
        color: 'NU(9)<br />그랑블루',
        exhaust: '2,199',
        purpose: '법인/법인<br />상품',
        carNumber: 'KMHF<br />141RBJA<br />160647',
        grade: 'A6',
        initialRegist: '2018.03.30',
        mission: 'A/T',
        options: 'ABS VDC 스마트키 내비(일반)',
        price: '2,240'
      },
      {
        location: '분당',
        date: '2019.11',
        name: '그랜저(IG) IG220<br />디젤 프리미엄',
        year: 2018,
        fuel: '디젤',
        km: '53,485',
        color: 'NU(9)<br />그랑블루',
        exhaust: '2,199',
        purpose: '법인/법인<br />상품',
        carNumber: 'KMHF<br />141RBJA<br />160647',
        grade: 'A6',
        initialRegist: '2018.03.30',
        mission: 'A/T',
        options: 'ABS VDC 스마트키 내비(일반)',
        price: '2,240'
      },
      {
        location: '시화',
        date: '2019.11',
        name: '그랜저(IG) IG220<br />디젤 프리미엄',
        year: 2018,
        fuel: '디젤',
        km: '53,485',
        color: 'NU(9)<br />그랑블루',
        exhaust: '2,199',
        purpose: '법인/법인<br />상품',
        carNumber: 'KMHF<br />141RBJA<br />160647',
        grade: 'A6',
        initialRegist: '2018.03.30',
        mission: 'A/T',
        options: 'ABS VDC 스마트키 내비(일반)',
        price: '2,240'
      },
      {
        location: '분당',
        date: '2019.10',
        name: '그랜저(IG) IG220<br />디젤 프리미엄',
        year: 2018,
        fuel: '디젤',
        km: '53,485',
        color: 'NU(9)<br />그랑블루',
        exhaust: '2,199',
        purpose: '법인/법인<br />상품',
        carNumber: 'KMHF<br />141RBJA<br />160647',
        grade: 'A6',
        initialRegist: '2018.03.30',
        mission: 'A/T',
        options: 'ABS VDC 스마트키 내비(일반)',
        price: '2,240'
      },
      {
        location: '시화',
        date: '2019.11',
        name: '그랜저(IG) IG220<br />디젤 프리미엄',
        year: 2018,
        fuel: '디젤',
        km: '53,485',
        color: 'NU(9)<br />그랑블루',
        exhaust: '2,199',
        purpose: '법인/법인<br />상품',
        carNumber: 'KMHF<br />141RBJA<br />160647',
        grade: 'A6',
        initialRegist: '2018.03.30',
        mission: 'A/T',
        options: 'ABS VDC 스마트키 내비(일반)',
        price: '2,240'
      }
    ];
  }

  payload.forEach((item) => {
    item.price = parseInt(item.price.replace(/,/g, ''), 10);
  });

  dispatch({
    type: GET_PRICING_BID_LIST,
    payload: payload
      .concat(payload)
      .concat(payload)
      .concat(payload)
  });
};

export const getAuctionDetailInfo = (actionInfo, cancelToken = null) => async (dispatch) => {
  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/${actionInfo.exhaust}`, cancelToken);

  if (res && res.data) {
    payload = await res.data;
  } else {
    payload = {
      actionInfo,
      imageList: [
        {
          id: 1,
          image: '/images/dummy/key-point-img-01.png',
          alt: '차량 이미지1'
        },
        {
          id: 2,
          image: '/images/dummy/key-point-img-02.png',
          alt: '차량 이미지2'
        },
        {
          id: 3,
          image: '/images/dummy/key-point-img-03.png',
          alt: '차량 이미지3'
        },
        {
          id: 4,
          image: '/images/dummy/key-point-img-01.png',
          alt: '차량 이미지4'
        },
        {
          id: 5,
          image: '/images/dummy/key-point-img-02.png',
          alt: '차량 이미지5'
        },
        {
          id: 6,
          image: '/images/dummy/key-point-img-03.png',
          alt: '차량 이미지6'
        },
        {
          id: 7,
          image: '/images/dummy/key-point-img-01.png',
          alt: '차량 이미지7'
        },
        {
          id: 8,
          image: '/images/dummy/key-point-img-02.png',
          alt: '차량 이미지8'
        },
        {
          id: 9,
          image: '/images/dummy/key-point-img-03.png',
          alt: '차량 이미지9'
        }
      ]
    };
  }

  dispatch({
    type: GET_PRICING_AUCTION_DATA,
    payload
  });
};

export const getPricingViewableCount = (userId, cancelToken = null) => async (dispatch) => {
  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/${userId}`, cancelToken);
  if (res && res.data) {
    payload = await res.data;
  } else {
    payload = 3;
  }

  dispatch({
    type: GET_PRICING_VIEWABLE_CNT,
    payload
  });
};

export const getPricingTicketInfo = (userId, cancelToken = null) => async (dispatch) => {
  let payload = null;
  const res = await axiosGetAsync(`/myBoardList/${userId}`, cancelToken);
  if (res && res.data) {
    payload = await res.data;
  } else {
    payload = {
      usePeriod: '3개월 이용중',
      expiredDate: new Date(2020, 0, 30)
    };
  }

  dispatch({
    type: GET_PRICING_TICKET_INFO,
    payload
  });
};
