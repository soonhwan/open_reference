import React from 'react';
import { action } from '@storybook/addon-actions';
import { PayPopup, DimPopup } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const PayPopupEx = () => {
  const myHold1 = {
    cash: 9999,
    point: 9999,
  }
  const list1 = getMockJs('product', 'romance');
  const rentInfo1 = {
    text: '대여',
    day: 3,
    price: 5000,
  }

  const couponLists1 = [
    { couponNm: '우수고객 10%할인', duplicate: 30, value: 'otp-1' },
    { couponNm: '우수고객 5%할인', duplicate: '', value: 'otp-2' }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }
  
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">PayPopup (mode : basic) 1. 단수</div>
        <div className="sampleCo">
          <DimPopup></DimPopup>
          <PayPopup mode="basic" myHold={myHold1} productItem={list1} rentInfo={rentInfo1} couponLists={couponLists1} prevEvent={prevEvent} onEvent={action('1.basic')}></PayPopup>
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


export default PayPopupEx
