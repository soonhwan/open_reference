import React from 'react';
import { action } from '@storybook/addon-actions';
import { MySubCashPoint } from 'components';

export const MySubCashPointEx = () => {
  const option1 = [
    { type: 'cash', text: '북스캐쉬', price: 1000000 },
    { type: 'point', text: '북스포인트', price: 1000000 }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 캐쉬 포인트 박스</div>
        <MySubCashPoint mode="basic" cashPointOptions={option1} prevEvent={prevEvent} onEvent={action('1.basic')} />
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
export default MySubCashPointEx
