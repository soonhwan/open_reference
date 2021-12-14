import React from 'react';
import { action } from '@storybook/addon-actions';
import { PurchaseBox } from 'components';

export const PurchaseBoxCoEx = () => {
  const purchase1 = [
    { label: '전체대여', value: 'opt-1' },
    { label: '전체소장', value: 'opt-2' }
  ];

  const purchase2 = [
    { label: '전체소장', value: 'opt-1' }
  ];

  const purchase3 = [
    { label: '전체대여', sub: '10% 할인', value: 'opt-1' },
    { label: '전체소장', sub: '10% 할인', value: 'opt-2' }
  ];

  const purchase4 = [
    { label: '전체소장', sub: '10% 할인', value: 'opt-1' }
  ];

  const purchase5 = [
    { label: '소장', sub: '4,500 ⓒ / 14일', value: 'opt-1' }
  ];

  const purchase6 = [
    { label: '대여 (1권)', sub: '1,000 ⓒ / 3일', value: 'opt-1' },
    { label: '소장 (1권)', sub: '2,000 ⓒ', value: 'opt-2' }
  ];

  const purchase7 = [
    { label: '앱으로 보기', value: 'opt-1' }
  ];
  const info7 = '북패스 보유기간 내 무제한 이용';

  const purchase8 = [
    { label: '구독하기', value: 'opt-1' }
  ];

  const purchase9 = [
    { label: '텍스트텍스트텍스트텍스트', value: 'opt-1' }
  ];
  const info9 = '해당 상품은 전체 구매를 지원하지 않습니다.';

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 상세 구매 버튼 (mode : basic)</div>
        <PurchaseBox mode="basic" purchaseOption={purchase1} prevEvent={prevEvent} onEvent={action('1.basic')} />
        <PurchaseBox mode="basic" purchaseOption={purchase2} prevEvent={prevEvent} onEvent={action('1.basic')} />
        <PurchaseBox mode="basic" purchaseOption={purchase3} prevEvent={prevEvent} onEvent={action('1.basic')} />
        <PurchaseBox mode="basic" purchaseOption={purchase4} prevEvent={prevEvent} onEvent={action('1.basic')} />
        <PurchaseBox mode="basic" purchaseOption={purchase5} prevEvent={prevEvent} onEvent={action('1.basic')} />
        <PurchaseBox mode="basic" purchaseOption={purchase6} prevEvent={prevEvent} onEvent={action('1.basic')} />
        <PurchaseBox mode="basic" purchaseOption={purchase7} purchaseInfo={info7} prevEvent={prevEvent} onEvent={action('1.basic')} />
        <PurchaseBox mode="basic" purchaseOption={purchase8} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">2. 상세 구매 버튼 딤드 (mode : dimed)</div>
        <PurchaseBox mode="dimed" purchaseOption={purchase1} purchaseInfo={info9} prevEvent={prevEvent} onEvent={action('2.dimed')} />
        <PurchaseBox mode="dimed" purchaseOption={purchase2} purchaseInfo={info9} prevEvent={prevEvent} onEvent={action('2.dimed')} />
        <PurchaseBox mode="dimed" purchaseOption={purchase9} purchaseInfo={info9} prevEvent={prevEvent} onEvent={action('2.dimed')} />
      </div>
      
      <style>{`
          .storybook-container { background: #ffffff !important; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
          .sampleCase .PurchaseBox { position:static; display:block; }
      `}</style>
    </div>
  );
}

export default PurchaseBoxCoEx
