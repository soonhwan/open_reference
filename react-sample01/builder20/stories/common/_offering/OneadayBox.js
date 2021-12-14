import React from 'react';
import { action } from '@storybook/addon-actions';
import { OneadayBox } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const OneadayBoxEx = () => {
  const title1 = '오늘의 추천';
  const saleInfo1 = '30%';
  const summary1 = '인기도서 감사일기의 힘 오늘 하루 40% 캐쉬백 증정 이벤트';
  const list1 = getMockJs('product', 'list', 1);

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }


  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. OneadayBox</div>
        <OneadayBox title={title1} saleInfo={saleInfo1} summary={summary1} infoList={list1} prevEvent={prevEvent} onEvent={action('1.OneadayBox')} />
      </div>
      <style>{`
          .storybook-container { background: #ffffff !important; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
      `}</style>
    </div>
  );
}
export default OneadayBoxEx
