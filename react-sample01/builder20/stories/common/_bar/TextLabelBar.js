import React from 'react';
import { action } from '@storybook/addon-actions';
import { TextLabelBar } from 'components';

export const TextLabelBarEx = () => {
  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }  

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 서브 타이틀 ( mode : basic )</div>
        <TextLabelBar mode="basic" title="닉네임" prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 서브 타이틀 ( mode : basic )</div>
        <TextLabelBar mode="basic" title="작가인증" subTitle="완료" completeYn="Y" prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 서브 타이틀 - 링크형 ( mode : link )</div>
        <TextLabelBar mode="link" title="unknown 이용해지" prevEvent={prevEvent} onEvent={action('2.link')} />
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

export default TextLabelBarEx
