import React from 'react';
import { action } from '@storybook/addon-actions';
import { MemberLoginList } from 'components';

export const MemberLoginListEx = () => {
  const snsList1 = [
    { sns: 'naver', text: 'NAVER로 로그인' },
    { sns: 'facebook', text: 'facebook으로 로그인' },
    { sns: 'google', text: 'Google로 로그인' },
    { sns: 'apple', text: 'Apple로 로그인' },
    { sns: 'tworld', text: '기존 T store 아이디로 로그인' }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 로그인 (mode : basic)</div>
        <MemberLoginList mode="basic" snsLists={snsList1} prevEvent={prevEvent} onEvent={action('1.basic')}></MemberLoginList>
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


export default MemberLoginListEx