import React from 'react';
import { action } from '@storybook/addon-actions';
import { MemberSubButton } from 'components';

export const MemberSubButtonEx = () => {
  const btnLists1 = [
    { text: '회원가입' }
  ]

  const mainSummary2 = '아이디나 비밀번호가 기억나지 않으세요?';
  const btnLists2 = [
    { text: '아이디 찾기' },
    { text: '비밀번호 찾기' }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 기본형 (mode : basic)</div>
        <MemberSubButton mode="basic" btnLists={btnLists1} prevEvent={prevEvent} onEvent={action('1.basic')}></MemberSubButton>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 아이디 비밀번호 찾기형 (mode : idpass)</div>
        <MemberSubButton mode="idpass" btnLists={btnLists2} summary={mainSummary2} prevEvent={prevEvent} onEvent={action('2.idpass')}></MemberSubButton>
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


export default MemberSubButtonEx