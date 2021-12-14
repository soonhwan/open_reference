import React from 'react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from 'components';

export const DropdownEx = () => {
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

  const prevEvent2 = (eventName, preState, state) => {
    if (state === 'opt-4') {
      window.alert('전체 선택 불가능')
      return false
    }
    return true
  }
  
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">Dropdown (기본 선택 값 : 전체)</div>
        <div className="sampleCo">
          <Dropdown initText={title1} options={option1} optionValue="opt-4" prevEvent={prevEvent} onEvent={action('1.option')}></Dropdown>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">DropboxPopup (기본 선택 값 : '')</div>
        <div className="sampleCo">
          <Dropdown initText={title1} options={option1} prevEvent={prevEvent} onEvent={action('1.option')}></Dropdown>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">DropboxPopup (전체 선택 불가능)</div>
        <div className="sampleCo">
          <Dropdown initText={title1} options={option1} optionValue="opt-2" prevEvent={prevEvent2} onEvent={action('1.option')}></Dropdown>
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


export default DropdownEx
