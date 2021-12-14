import React from 'react';
import { action } from '@storybook/addon-actions';
import { DetailFloating } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const DetailFloatingEx = () => {
  const list1 = getMockJs('product', 'general');
  const purchase1 = [
    { label: '전체대여' }
  ];
  const subTab1 = [
    { text: '작품 정보', value: 'opt-1' },
    { text: '연재 9999', value: 'opt-2' },
    { text: '댓글 9999', value: 'opt-3' },
    { text: '추천', value: 'opt-4' }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 상세 플로팅 (mode : basic)</div>
        <DetailFloating mode="basic" purchaseOption={purchase1} productItem={list1} subOptions={subTab1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>

      {/* <div className="sampleCase">
        <div className="sampleTitle">2. 상세 플로팅 (mode : dimed)</div>
        <DetailFloating mode="dimed" />
      </div> */}
      
      <style>{`
          .storybook-container { background: #ffffff !important; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
          // .sampleCase .PurchaseBox { position:static; display:block; }
      `}</style>
    </div>
  );
}

export default DetailFloatingEx
