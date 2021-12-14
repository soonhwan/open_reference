import React from 'react';
import { action } from '@storybook/addon-actions';
import { SearchDateBar } from 'components';

export const SearchDateBarEx = () => {
  const mainTitle = '기간선택';
  const mainOption = [
    { text: '최근 1년', value: 'opt-1', },
    { text: '최근 2년', value: 'opt-2', },
    { text: '최근 3년', value: 'opt-3', },
    { text: '최근 전체', value: 'opt-4', },
  ]

  const mainTitle2 = '문자 테스트 문자 테스트 문자 테스트';

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)

    if (eventName === 'change_SearchDateBarSub') {
      if (typeof state === 'object' && state.value === 'opt-2') {
        return false
      } else {
        return true
      }
    }
    return true
    
  }
  // const onEvent = (eventName, state, event) => {
  //   console.log(eventName, params, event)
  //   action('123')
  // }


  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">기본형</div>
        <SearchDateBar mode="basic" title={mainTitle} options={mainOption} optionValue="" prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <SearchDateBar mode="basic" title={mainTitle} options={mainOption} optionValue="opt-2" prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <style>{`
          .sampleCase { padding:0 0 10px 0; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
      `}</style>
    </div>
  );
}

export default SearchDateBarEx
