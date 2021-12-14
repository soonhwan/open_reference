import React from 'react';
import { action } from '@storybook/addon-actions';
import { ReceiptPopup, DimPopup } from 'components';

export const ReceiptPopupEx = () => {
  const title1 = {
    text: '상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명',
    desc: '상품 추가 정보 텍스트',
    price: 1000,
    regDt: '2020.09.22'
  }
  const sale1 = [
    { text: '할인 및 포인트 적용 1', price: 100 },
    { text: '할인 및 포인트 적용 2', price: 100 }
  ]
  const payment1 = {
    text: '결제수단명',
    price: 800
  }
  const benefits1 = [
    { text: '북스캐쉬 80 ℗ 지급', regDt: '2020.09.22' },
    { text: '대표쿠폰명 외 N종 지급', regDt: '2020.09.22' },
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }
  
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">ReceiptPopup (mode : basic)</div>
        <div className="sampleCo">
          <DimPopup></DimPopup>
          <ReceiptPopup mode="basic" productInfo={title1} saleInfos={sale1} pryment={payment1} benefits={benefits1} firstBtnNm="닫기" prevEvent={prevEvent} onEvent={action('1.basic')}></ReceiptPopup>
        </div>
      </div>

      <style>{`
          body { background:#ffffff; }
          .storybook-container { background:#ffffff !important; }
          .sampleCase { width:100%; min-width:280px;}
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
          }
          .sampleCase .sampleTitle span { padding:5px 0 0 0; font-size:12px; display:block; }
          .sampleCase .sampleCo {
            padding:20px 0 20px 0;
            background: rgba(0,0,0,0.3);
          }
      `}</style>
    </div>
  );
}


export default ReceiptPopupEx
