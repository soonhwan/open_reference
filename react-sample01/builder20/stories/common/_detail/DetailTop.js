import React from 'react';
import { action } from '@storybook/addon-actions';
import { DetailTop } from 'components';
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

  console.log('===>', list1);

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 상세페이지 주요 정보 (일반)</div>
        <DetailTop productItem={list1} mainBtnCond={{ type: 1, detail: 'A', visible: true }} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 상세페이지 주요 정보 (일반) 내별점 주기</div>
        <DetailTop productItem={list1} mainBtnCond={{ type: 1, detail: 'B', visible: true }} myavgscoreYn="Y" myavgscoreNum="0" prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 상세페이지 주요 정보 (판타지)</div>
        <DetailTop productItem={list2} mainBtnCond={{ type: 1, detail: 'C', visible: true }} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">3. 상세페이지 주요 정보 (로맨스)</div>
        <DetailTop productItem={list3} mainBtnCond={{ type: 2, detail: 'A', visible: true }} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">4. 상세페이지 주요 정보 (세트)</div>
        <DetailTop productItem={list4} mainBtnCond={{ type: 2, detail: 'A', visible: true }} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">5. 상세페이지 주요 정보 (오디오북)</div>
        <DetailTop productItem={list5} mainBtnCond={{ type: 2, detail: 'B', visible: true }} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">6. 상세페이지 주요 정보 (만화)</div>
        <DetailTop productItem={list6} mainBtnCond={{ type: 2, detail: 'A', visible: false }} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">7. 상세페이지 주요 정보 (웹툰)</div>
        <DetailTop productItem={list7} mainBtnCond={{ type: 2, detail: 'A', visible: false }} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">8. 상세페이지 주요 정보 (웹소설)</div>
        <DetailTop productItem={list8} mainBtnCond={{ type: 3, detail: null, visible: null }} prevEvent={prevEvent} onEvent={action('1.basic')} />
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
export default DetailTopEx
