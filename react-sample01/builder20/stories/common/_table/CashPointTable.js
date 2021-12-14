import React from 'react';
import { action } from '@storybook/addon-actions';
import { CashPointTable } from 'components';

export const CashPointTableEx = () => {
  const list1 = [
    { regDt: '2020.08.21', price: 1000000, unit: '©', text: '캐쉬 충전 보너스', termDt: '2020.09.21' },
    { regDt: '2020.08.21', price: 1000000, unit: '©', text: '캐쉬 충전 보너스', termDt: '2020.09.21' },
    { regDt: '2020.08.21', price: 1000000, unit: '©', text: '캐쉬 충전 보너스', termDt: '2020.09.21' }
  ]
  const list2 = [
    { regDt: '2020.08.21', price: 1000000, unit: '℗', text: '캐쉬 충전 보너스', termDt: '2020.09.21' },
    { regDt: '2020.08.21', price: 1000000, unit: '℗', text: '캐쉬 충전 보너스', termDt: '2020.09.21' },
    { regDt: '2020.08.21', price: 1000000, unit: '℗', text: '캐쉬 충전 보너스', termDt: '2020.09.21' }
  ]
  const list3 = [
    { regDt: '2020.08.21', price: 1000000, unit: '©', text: '캐쉬 충전 보너스' },
    { regDt: '2020.08.21', price: 1000000, unit: '©', text: '캐쉬 충전 보너스' },
    { regDt: '2020.08.21', price: 1000000, unit: '©', text: '캐쉬 충전 보너스' }
  ]
  const list4 = [
    { regDt: '2020.08.21', price: 1000000, unit: '℗', text: '캐쉬 충전 보너스' },
    { regDt: '2020.08.21', price: 1000000, unit: '℗', text: '캐쉬 충전 보너스' },
    { regDt: '2020.08.21', price: 1000000, unit: '℗', text: '캐쉬 충전 보너스' }
  ]

  const thumb1 = '/static/images/thumb/list_no_results_01.png';
  const noTitle1 = '적립내역이 없습니다';
  const noTitle2 = '변동내역이 없습니다';
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 북스캐쉬포인트 적립내역(캐쉬) (mode : accumulate)</div>
        <CashPointTable mode="accumulate" variant="cash" lists={list1} thumb={thumb1} noTitle={noTitle1} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 북스캐쉬포인트 적립내역(포인트) (mode : accumulate)</div>
        <CashPointTable mode="accumulate" variant="point" lists={list2} thumb={thumb1} noTitle={noTitle1} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 북스캐쉬포인트 적립내역(포인트: 내역없음) (mode : accumulate)</div>
        <CashPointTable mode="accumulate" variant="point" thumb={thumb1} noTitle={noTitle1} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 북스캐쉬포인트 변동내역(캐쉬) (mode : change)</div>
        <CashPointTable mode="change" variant="cash" lists={list3} thumb={thumb1} noTitle={noTitle2} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 북스캐쉬포인트 변동내역(포인트) (mode : change)</div>
        <CashPointTable mode="change" variant="point" lists={list4} thumb={thumb1} noTitle={noTitle2} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 북스캐쉬포인트 변동내역(포인트: 내역없음) (mode : change)</div>
        <CashPointTable mode="change" variant="point" thumb={thumb1} noTitle={noTitle2} />
      </div>
      <style>{`
          .storybook-container { background: #ffffff !important; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
            margin-bottom: 10px;
          }
      `}</style>
    </div>
  );
}
export default CashPointTableEx
