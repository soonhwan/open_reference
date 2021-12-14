import React from 'react';
import { action } from '@storybook/addon-actions';
import { RadioMutiple } from 'components';

export const SelectEx = () => {
  const inputParam1 = {
    requiredYn: 'N',
    checkItems: [
      {
        mode: 'basic',
        name: 'a001',
        checked: true,
        text: '휴대폰'
      },
      {
        mode: 'basic',
        name: 'a001',
        checked: false,
        text: '이메일'
      },
    ]
  }

  const inputParam2 = {
    requiredYn: 'Y',
    checkItems: [
      {
        mode: 'basic',
        name: 'a002',
        checked: true,
        text: '휴대폰'
      },
      {
        mode: 'basic',
        name: 'a002',
        checked: false,
        text: '이메일'
      },
    ],
    infoType: 'info',
    infoMessage: '- 등록 전 보유하신 캐쉬 또는 쿠폰의 유효기간을 확인해주세요.<br />- unknown 캐쉬 번호는 unknown 앱에서 등록 가능합니다.'
  }

  const inputParam3 = {
    requiredYn: 'N',
    checkItems: [
      {
        mode: 'basic',
        name: 'a003',
        checked: true,
        text: '휴대폰'
      },
      {
        mode: 'basic',
        name: 'a003',
        checked: false,
        text: '이메일'
      },
    ]
  }

  const inputParam4 = {
    requiredYn: 'N',
    checkItems: [
      {
        mode: 'basic',
        name: 'a004',
        checked: true,
        text: '만 14세 이하'
      },
      {
        mode: 'basic',
        name: 'a004',
        checked: false,
        text: '만 14세 이상'
      },
    ]
  }

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. Radio (mode : basic)</div>
        <div className="sampleCo">
          <RadioMutiple mode="basic" {...inputParam1} prevEvent={prevEvent} onEvent={action('1.basic')}>구분</RadioMutiple>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Radio (mode : basic)</div>
        <div className="sampleCo">
          <RadioMutiple mode="basic" {...inputParam2} prevEvent={prevEvent} onEvent={action('1.basic')}>구분</RadioMutiple>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Radio (mode : basic)  (label hidden)</div>
        <div className="sampleCo">
          <RadioMutiple mode="basic" {...inputParam3} labelHiddenYn="Y" prevEvent={prevEvent} onEvent={action('1.basic')}>구분</RadioMutiple>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. Radio (mode : member)</div>
        <div className="sampleCo">
          <RadioMutiple mode="member" {...inputParam4} labelHiddenYn="Y" prevEvent={prevEvent} onEvent={action('1.member')}>구분</RadioMutiple>
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


export default SelectEx
