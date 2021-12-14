import React from 'react';
import { action } from '@storybook/addon-actions';
import { CashPointInfoBox } from 'components';

export const CashPointInfoBoxEx = () => {
  const label1 = '사용 가능 캐쉬';
  const price1 = 1000000;
  const desc1 = '1주일 이내 소멸예정  : 40 ©<br />기준일 : 2020.08.24';

  const label2 = '사용 가능 포인트';
  const price2 = 1000000;
  const desc2 = '1주일 이내 소멸예정  : 40 ℗<br />기준일 : 2020.08.24';

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 캐쉬 (mode : cash)</div>
        <CashPointInfoBox mode="cash" label={label1} price={price1} desc={desc1}></CashPointInfoBox>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">02. 포인트 (mode : point)</div>
        <CashPointInfoBox mode="point" label={label2} price={price2} desc={desc2}></CashPointInfoBox>
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


export default CashPointInfoBoxEx