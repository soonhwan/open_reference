import React from 'react';
import { action } from '@storybook/addon-actions';
import { DetailPrice } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const DetailPriceEx = () => {
  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 상세 가격정보</div>
        <DetailPrice />
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
export default DetailPriceEx
