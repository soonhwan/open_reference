import React from 'react';
import { action } from '@storybook/addon-actions';
import { MemberAuthButton } from 'components';

export const MemberAuthButtonEx = () => {
  const btnLists1 = [
    { title: '법정대리인 본인확인', desc: '법정대리인 본인 명의의 휴대폰, 아이핀 계정, 신용카드나 체크카드를 이용하여 인증하실 수 있습니다.' }
  ]

  const btnLists2 = [
    { title: '휴대폰 본인확인', desc: '본인명의의 휴대폰을 이용한 인증입니다.' },
    { title: '아이핀 본인확인', desc: '아이핀 계정을 통한 인증입니다.' },
    { title: '카드 본인확인', desc: '본인명의의 신용카드나 체크카드를 이용한 인증입니다.' },
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 기본형 (mode : basic)</div>
        <MemberAuthButton mode="basic" btnLists={btnLists1} prevEvent={prevEvent} onEvent={action('1.basic')}></MemberAuthButton>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 기본형 (mode : basic)</div>
        <MemberAuthButton mode="basic" btnLists={btnLists2} prevEvent={prevEvent} onEvent={action('1.basic')}></MemberAuthButton>
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


export default MemberAuthButtonEx