import React from 'react';
import { action } from '@storybook/addon-actions';
import { CheckboxTerm } from 'components';

export const CheckboxTermEx = () => {
  const inputParam1 = {
    name: 'a001',
    checked: false
  }
  const subText1 = '통신사에 구애받지 않고 ONE store및 ONE store 관련 상품을 이용하기 위한 필수 동의 항목입니다.';

  const inputParam2 = {
    name: 'a002',
    checked: false
  }
  const subText2 = '통신사에 구애받지 않고 ONE store및 ONE store 관련 상품을 이용하기 위한 필수 동의 항목입니다.';
  const btnNm2 = '전문보기'

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. CheckboxTerm (mode : basic)</div>
        <div className="sampleCo">
          <CheckboxTerm mode="basic" inputParam={inputParam1} subText={subText1} prevEvent={prevEvent} onEvent={action('1.basic')}>개인정보의 제 3자 제공 :<br />SK텔레콤 > KT / LGU+</CheckboxTerm>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - CheckboxTerm (mode : basic)</div>
        <div className="sampleCo">
          <CheckboxTerm mode="basic" inputParam={inputParam2} subText={subText2} btnNm={btnNm2} prevEvent={prevEvent} onEvent={action('1.basic')}>개인정보의 제 3자 제공 :<br />SK텔레콤 > KT / LGU+</CheckboxTerm>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. Member CheckboxTerm (mode : member)</div>
        <div className="sampleCo">
          <CheckboxTerm mode="member" inputParam={inputParam1} subText={subText1} prevEvent={prevEvent} onEvent={action('1.member')}>개인정보의 제 3자 제공 :<br />SK텔레콤 > KT / LGU+</CheckboxTerm>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Member CheckboxTerm (mode : member)</div>
        <div className="sampleCo">
          <CheckboxTerm mode="member" inputParam={inputParam2} subText={subText2} btnNm={btnNm2} prevEvent={prevEvent} onEvent={action('1.member')}>개인정보의 제 3자 제공 :<br />SK텔레콤 > KT / LGU+</CheckboxTerm>
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


export default CheckboxTermEx
