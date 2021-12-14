import React from 'react';
import { action } from '@storybook/addon-actions';
import { MySubCouponPass } from 'components';

export const MySubCouponPassEx = () => {
  const cuponOption1 = { text: '쿠폰', num: 3 };
  const passOption1 = { text: '북패스', subscribeYn: false };
  const passOption2 = { text: '북패스', subscribeYn: true };

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 쿠폰/북패스 박스</div>
        <MySubCouponPass mode="basic" couponOption={cuponOption1} passOption={passOption1} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 쿠폰/북패스 박스</div>
        <MySubCouponPass mode="basic" couponOption={cuponOption1} passOption={passOption2} prevEvent={prevEvent} onEvent={action('1.basic')} />
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
export default MySubCouponPassEx
