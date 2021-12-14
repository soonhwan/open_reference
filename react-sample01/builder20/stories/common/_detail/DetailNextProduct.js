import React from 'react';
import { action } from '@storybook/addon-actions';
import { DetailNextProduct } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const DetailTopEx = () => {
  const list1 = getMockJs('product', 'general');
  const list2 = getMockJs('product', 'fantasy');
  const list3 = getMockJs('product', 'romance');
  const list4 = getMockJs('product', 'set');
  const list5 = getMockJs('product', 'audiobook');
  const list6 = getMockJs('product', 'comic');
  const list7 = getMockJs('product', 'webtoon');
  const list8 = getMockJs('product', 'webnovel');

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 상세페이지 주요 정보 (일반)</div>
        <DetailNextProduct productItem={list1} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 상세페이지 주요 정보 (판타지)</div>
        <DetailNextProduct productItem={list2} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">3. 상세페이지 주요 정보 (로맨스)</div>
        <DetailNextProduct productItem={list3} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">4. 상세페이지 주요 정보 (세트)</div>
        <DetailNextProduct productItem={list4} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">5. 상세페이지 주요 정보 (오디오북)</div>
        <DetailNextProduct productItem={list5} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">6. 상세페이지 주요 정보 (만화)</div>
        <DetailNextProduct productItem={list6} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">7. 상세페이지 주요 정보 (웹툰)</div>
        <DetailNextProduct productItem={list7} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">8. 상세페이지 주요 정보 (웹소설)</div>
        <DetailNextProduct productItem={list8} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <style>{`
          .storybook-container { background: #ffffff !important; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
            margin-bottom: 10px;
          }
      `}</style>
    </div>
  );
}
export default DetailTopEx
