import React from 'react';
import { action } from '@storybook/addon-actions';
import { DetailFloating } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const DetailFloatingCoEx = () => {
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

  const list2 = getMockJs('product', 'fantasy');
  const purchase2 = [
    { label: '전체대여', sub: '10% 할인' },
    { label: '전체소장', sub: '10% 할인' }
  ];

  const purchase3 = [
    { label: '앱으로 보기' }
  ];
  const info3 = '북패스 보유기간 내 무제한 이용';

  const purchase4 = [
    { label: '텍스트텍스트텍스트텍스트' }
  ];
  const info4 = '해당 상품은 전체 구매를 지원하지 않습니다.';

  const purchase5 = [
    { label: '전체대여' },
    { label: '전체소장' }
  ];

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 상세 플로팅 (mode : basic)</div>
        <DetailFloating mode="basic" purchaseOption={purchase1} productItem={list1} subOptions={subTab1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('1.basic')} />
        <DetailFloating mode="basic" productItem={list1} subOptions={subTab1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('1.basic')} />
        <DetailFloating mode="basic" purchaseOption={purchase2} productItem={list2} subOptions={subTab1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('1.basic')} />
        <DetailFloating mode="basic" purchaseOption={purchase3} purchaseInfo={info3} productItem={list2} subOptions={subTab1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">2. 상세 플로팅 딤드 (mode : dimed)</div>
        <DetailFloating mode="dimed" purchaseOption={purchase4} purchaseInfo={info4} productItem={list2} subOptions={subTab1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('2.dimed')} />
        <DetailFloating mode="dimed" purchaseOption={purchase5} purchaseInfo={info4} productItem={list2} subOptions={subTab1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('2.dimed')} />
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
          .sampleCase .DetailFloatingWrap { position:static; display:table; }
      `}</style>
    </div>
  );
}

export default DetailFloatingCoEx
