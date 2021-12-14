import React from 'react';
import { action } from '@storybook/addon-actions';
import { PayPopup } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const PayPopupEx = () => {
  const myHold1 = {
    cash: 9999,
    point: 999,
  }
  const list1 = getMockJs('product', 'romance');
  const multiNum1 = 3;
  const rentInfo1 = {
    text: '대여',
    day: 3,
    price: 5000,
  }

  const ownInfo1 = {
    text: '소장',
    price: 5000,
  }
  const couponLists1 = [
    { couponNm: '우수고객 10%할인', duplicate: 30, value: 'otp-1' },
    { couponNm: '우수고객 5%할인', duplicate: '', value: 'otp-2' }
  ]
  const couponLists2 = []

  const myHold2 = {
    cash: 9999,
    point: 0,
  }
  const list2 = getMockJs('product', 'audiobook');
  const list3 = getMockJs('product', 'set');

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }
  
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">PayPopup (mode : basic) 1. 단수</div>
        <div className="sampleCo">
          <PayPopup mode="basic" myHold={myHold1} productItem={list1} rentInfo={rentInfo1} couponLists={couponLists1} prevEvent={prevEvent} onEvent={action('1.basic')}></PayPopup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">PayPopup (mode : basic) - 단수 (소장)</div>
        <div className="sampleCo">
          <PayPopup mode="basic" myHold={myHold1} productItem={list2} ownInfo={ownInfo1} couponLists={couponLists2} prevEvent={prevEvent} onEvent={action('1.basic')}></PayPopup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">PayPopup (mode : basic) - 복수</div>
        <div className="sampleCo">
          <PayPopup mode="basic" myHold={myHold1} productItem={list1} multiNum={multiNum1} couponLists={couponLists1} rentInfo={rentInfo1} prevEvent={prevEvent} onEvent={action('1.basic')}></PayPopup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">PayPopup (mode : basic) - 단수 (북스 포인트가 0원)</div>
        <div className="sampleCo">
          <PayPopup mode="basic" myHold={myHold2} productItem={list1} rentInfo={rentInfo1} couponLists={couponLists1} prevEvent={prevEvent} onEvent={action('1.basic')}></PayPopup>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">PayPopup (mode : voucher) 2. 전체</div>
        <div className="sampleCo">
          <PayPopup mode="voucher" myHold={myHold1} productItem={list1} rentInfo={rentInfo1} couponLists={couponLists1} prevEvent={prevEvent} onEvent={action('2.voucher')}></PayPopup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">PayPopup (mode : voucher) - 전체 (소장)</div>
        <div className="sampleCo">
          <PayPopup mode="voucher" myHold={myHold1} productItem={list2} ownInfo={ownInfo1} couponLists={couponLists2} prevEvent={prevEvent} onEvent={action('2.voucher')}></PayPopup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">PayPopup (mode : voucher) - 전체 (북스 포인트가 0원)</div>
        <div className="sampleCo">
          <PayPopup mode="voucher" myHold={myHold2} productItem={list2} ownInfo={ownInfo1} couponLists={couponLists1} prevEvent={prevEvent} onEvent={action('2.voucher')}></PayPopup>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">PayPopup (mode : timeCoupon) 3. 시다무</div>
        <div className="sampleCo">
          <PayPopup mode="timeCoupon" myHold={myHold1} productItem={list1} rentInfo={rentInfo1} couponLists={couponLists1} prevEvent={prevEvent} onEvent={action('3.timeCoupon')}></PayPopup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">PayPopup (mode : timeCoupon) - 시다무 (소장)</div>
        <div className="sampleCo">
          <PayPopup mode="timeCoupon" myHold={myHold1} productItem={list2} ownInfo={ownInfo1} couponLists={couponLists1} prevEvent={prevEvent} onEvent={action('3.timeCoupon')}></PayPopup>
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
          .PayPopupWrap { position:static; }
      `}</style>
    </div>
  );
}


export default PayPopupEx
