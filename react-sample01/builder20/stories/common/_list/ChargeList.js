import React from 'react';
import { action } from '@storybook/addon-actions';
import { ChargeList } from 'components';

export const ChargeListEx = () => {
  const option1 = [
    { cashPrice: 1000, pointPrice: 60, accumulate: 6, price: 1000, joinYn: 'n', cancelYn: 'n' },
    { cashPrice: 3000, pointPrice: 180, accumulate: 6, price: 3000, joinYn: 'n', cancelYn: 'n' },
    { cashPrice: 5000, pointPrice: 400, accumulate: 8, price: 5000, joinYn: 'n', cancelYn: 'n' },
    { cashPrice: 10000, pointPrice: 800, accumulate: 8, price: 10000, joinYn: 'n', cancelYn: 'n' },
    { cashPrice: 20000, pointPrice: 1600, accumulate: 8, price: 20000, joinYn: 'n', cancelYn: 'n' },
    { cashPrice: 30000, pointPrice: 3000, accumulate: 10, price: 30000, joinYn: 'Y', cancelYn: 'n', redDt: '2019.10.08' },
    { cashPrice: 50000, pointPrice: 5000, accumulate: 10, price: 50000, joinYn: 'Y', cancelYn: 'Y' },
    { cashPrice: 500000, pointPrice: 50000, accumulate: 10, price: 500000, joinYn: 'n', cancelYn: 'n' }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 충전리스트 (mode : basic)</div>
        <ChargeList mode="basic" optionLists={option1} prevEvent={prevEvent} onEvent={action('1. basic')} />
      </div>

      <style>{`
          body { background:#ffffff; }
          .storybook-container { background:#ffffff !important; }
          .sampleCase { width:100%; min-width:280px;}
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
          .sampleCase .sampleTitle span { padding:5px 0 0 0; font-size:12px; display:block; }
          .sampleCase .sampleCo {
            padding:0;
            background: #ffffff;
          }
      `}</style>
    </div>
  );
}


export default ChargeListEx