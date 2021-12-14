import React from 'react';
import { action } from '@storybook/addon-actions';
import { Card } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const CardEx = () => {
  const title1 = '서브 텍스트 타이틀';
  const list1 = getMockJs('product', 'list', 10)
  const list2 = getMockJs('webtoon', 'list', 20)

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 2n 카드 ( mode: 2n )</div>
        <Card mode="2n" title={title1} itemRenderer="swiperCard" infoList={list1} prevEvent={prevEvent} onEvent={action('1.2n')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 3n 카드 ( mode: 3n )</div>
        <Card mode="3n" title={title1} itemRenderer="swiperCard" infoList={list2} prevEvent={prevEvent} onEvent={action('2.3n')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">3. Detail 3n 카드 ( mode: detail3n )</div>
        <Card mode="detail3n" title={title1} itemRenderer="swiperCard" infoList={list2} prevEvent={prevEvent} onEvent={action('3.Detail 3n')} />
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
export default CardEx
