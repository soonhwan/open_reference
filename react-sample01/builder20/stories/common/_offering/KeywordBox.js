import React from 'react';
import { action } from '@storybook/addon-actions';
import { KeywordBox } from 'components';

export const KeywordBoxEx = () => {
  const title1 = '지금 인기있는 키워드';
  const subKeyword1 = [
    { text: '#키워드1', value: 'opt-1' },
    { text: '#키워드2', value: 'opt-2' },
    { text: '#키워드3', value: 'opt-3' },
    { text: '#키워드4', value: 'opt-4' },
    { text: '#키워드5', value: 'opt-5' },
    { text: '#키워드6', value: 'opt-6' },
    { text: '#키워드7', value: 'opt-7' },
    { text: '#키워드8', value: 'opt-8' },
    { text: '#키워드9', value: 'opt-9' },
    { text: '#키워드10', value: 'opt-10' }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. KeywordBox</div>
        <KeywordBox mode="basic" title={title1} subOptions={subKeyword1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('1.keyword')} />
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
export default KeywordBoxEx
