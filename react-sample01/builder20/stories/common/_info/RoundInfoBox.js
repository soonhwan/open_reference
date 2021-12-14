import React from 'react';
import { action } from '@storybook/addon-actions';
import { RoundInfoBox } from 'components';

export const RoundInfoBoxEx = () => {
  const desc1 = '환급신청을 선택하시면 환급에 필요한 정보 입력 후 이용해지 할 수 있습니다.';
  const firstBtnNm1 = '환급신청 없이 바로 이용해지';

  const title2 = '김북스님,<br /> 북패스를 구독 중입니다.';
  const desc2 = '이번달 N작품을 읽었습니다.<br />다음 결제일은 YYYY.MM.DD 입니다.';
  const firstBtnNm2 = '다시 구독하기';

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 기본형 (mode : basic)</div>
        <RoundInfoBox mode="basic" desc={desc1}></RoundInfoBox>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 기본형 + 버튼 (mode : basic)</div>
        <RoundInfoBox mode="basic" desc={desc1} firstBtnNm={firstBtnNm1} prevEvent={prevEvent} onEvent={action('1.basic')} ></RoundInfoBox>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">02. 구독하기 (mode : subscribe)</div>
        <RoundInfoBox mode="subscribe" title={title2} desc={desc2}></RoundInfoBox>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 구독하기 + 버튼 (mode : subscribe)</div>
        <RoundInfoBox mode="subscribe" title={title2} desc={desc2} firstBtnNm={firstBtnNm2} prevEvent={prevEvent} onEvent={action('2.subscribe')} ></RoundInfoBox>
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


export default RoundInfoBoxEx