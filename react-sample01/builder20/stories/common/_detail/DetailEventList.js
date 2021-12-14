import React from 'react';
import { action } from '@storybook/addon-actions';
import { DetailEventList } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const DetailEventListEx = () => {
  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 상세 이벤트 박스</div>
        <DetailEventList prevEvent={prevEvent} onEvent={action('1.basic')} />
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
export default DetailEventListEx
