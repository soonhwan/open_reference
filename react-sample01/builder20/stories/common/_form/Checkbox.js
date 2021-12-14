import React from 'react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from 'components';

export const CheckboxEx = () => {
  const inputParam1 = {
    name: 'a001',
    checked: false
  }
  const subText1 = '지급일 : YYYY.MM.DD HH:MM';

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. Checkbox (mode : basic)</div>
        <div className="sampleCo">
          <Checkbox mode="basic" {...inputParam1} prevEvent={prevEvent} onEvent={action('1.basic')}>이름</Checkbox>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Checkbox + 서브텍스트 (mode : basic)</div>
        <div className="sampleCo">
          <Checkbox mode="basic" {...inputParam1} subText={subText1} prevEvent={prevEvent} onEvent={action('1.basic')}>이름</Checkbox>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 텍스트형 + 서브텍스트 (mode : textType)</div>
        <div className="sampleCo">
          <Checkbox mode="textType" subText={subText1}>이름</Checkbox>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">3. Checkbox (mode : checkAll)</div>
        <div className="sampleCo">
          <Checkbox mode="checkAll" {...inputParam1} prevEvent={prevEvent} onEvent={action('2.checkAll')}>모두동의</Checkbox>
        </div>
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


export default CheckboxEx
