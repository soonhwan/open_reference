import React from 'react';
import { action } from '@storybook/addon-actions';
import { MDPickBox } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const MDPickBoxEx = () => {
  const title1 = '에디터추천';
  const subTitle1 = '8월추천도서';
  const summary1 = '유튜브 경제의 신과 함께 작가의 신작 2020년 이후 한번도 경험하지 못한 세상 새로운 부를 창출할 수 있는 직접적인 솔루션';
  const list1 = getMockJs('product', 'list', 1);
  const subKeyword1 = [
    { text: '#키워드1', value: 'opt-1' },
    { text: '#키워드2', value: 'opt-2' },
    { text: '#키워드3', value: 'opt-3' },
    { text: '#키워드4', value: 'opt-4' }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }


  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. OneadayBox</div>
        <MDPickBox title={title1} subTitle={subTitle1} summary={summary1} infoList={list1} subOptions={subKeyword1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('1.MDPickBox')} />
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
export default MDPickBoxEx
