import React from 'react';
import { action } from '@storybook/addon-actions';
import { DropboxPopup, DimPopup } from 'components';

export const PopupEx = () => {
  const title1 = '기간선택';
  const option1 = [
    { text: '최근 1년', value: 'opt-1' },
    { text: '최근 2년', value: 'opt-2' },
    { text: '최근 3년', value: 'opt-3' },
    { text: '전체', value: 'opt-4' }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }
  
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">DropboxPopup (선택형 : option)</div>
        <div className="sampleCo">
          <DimPopup></DimPopup>
          <DropboxPopup mode="option" title={title1} options={option1} optionValue="opt-1" prevEvent={prevEvent} onEvent={action('1.option')}></DropboxPopup>
        </div>
      </div>

      <style>{`
          body { background:#ffffff; }
          .storybook-container { background:#ffffff !important; }
          .sampleCase { width:100%; min-width:280px;}
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
          .sampleCase .sampleTitle span { padding:5px 0 0 0; font-size:12px; display:block; }
          .sampleCase .sampleCo {
            padding:0;
            background: #ffffff;
          }
      `}</style>
    </div>
  );
}


export default PopupEx
