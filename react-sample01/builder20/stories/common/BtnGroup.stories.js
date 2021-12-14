import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import StoryWrapperComponent from '../hocs/StoryWrapperComponent.js'
import { BtnGroup } from 'components';

export const BtnGroupEx = () => {
  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 버튼 그룹 (mode : basic)</div>
        <div className="sampleCo">
          <BtnGroup mode="basic" firstBtnNm="인증하기" prevEvent={prevEvent} onEvent={action('1.basic')}></BtnGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 버튼 그룹 (mode : basic) Disabled</div>
        <div className="sampleCo">
          <BtnGroup mode="basic" firstBtnNm="인증하기" firstDisabledYn="Y" prevEvent={prevEvent} onEvent={action('1.basic')}></BtnGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> -  버튼 그룹 (mode : basic)</div>
        <div className="sampleCo">
          <BtnGroup mode="basic" firstBtnNm="환급하기" secondBtnNm="취소하기" prevEvent={prevEvent} onEvent={action('1.basic')}></BtnGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> -  버튼 그룹 (mode : basic) Disabled</div>
        <div className="sampleCo">
          <BtnGroup mode="basic" firstBtnNm="회원가입" firstDisabledYn="Y" secondBtnNm="취소" prevEvent={prevEvent} onEvent={action('1.basic')}></BtnGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 버튼 그룹 세로형 (mode : row)</div>
        <div className="sampleCo">
          <BtnGroup mode="row" firstBtnNm="북패스 이용하기" secondBtnNm="로그아웃" prevEvent={prevEvent} onEvent={action('2.row')}></BtnGroup>
        </div>
      </div>

      <style>{`
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
          .sampleCase .sampleTitle span { padding:5px 0 0 0; font-size:12px; display:block; }
          .sampleCase .sampleCo {
            padding: 5px 0;
            background: #ffffff;
          }
      `}</style>
    </div>
  );
}


storiesOf('Components|Common/BtnGroup', module)
  .addDecorator(StoryWrapperComponent)
  .add('default', () => (
    <BtnGroupEx />
  ))
