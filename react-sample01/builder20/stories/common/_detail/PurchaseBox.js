import React from 'react';
import { action } from '@storybook/addon-actions';
import { PurchaseBox } from 'components';

export const PurchaseBoxEx = () => {
  const purchase1 = [
    { label: '전체대여', value: 'opt-1' }
  ];

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 상세 구매 버튼 (mode : basic)</div>
        <PurchaseBox mode="basic" purchaseOption={purchase1} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      
      <style>{`
          .storybook-container { background: #ffffff !important; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
      `}</style>
    </div>
  );
}

export default PurchaseBoxEx
