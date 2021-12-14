import React from 'react';
import { action } from '@storybook/addon-actions';
import { SortingBar } from 'components';

export const SortingBarEx = () => {
  const mainTitle1 = 100;
  const option1 = [
    { text: '최신순', value: 'opt-1', },
    { text: '인기순', value: 'opt-2', },
    { text: '별점순', value: 'opt-3', },
  ]

  const mainTitle2 = '문자 테스트 문자 테스트 문자 테스트';

  const mainTitle3 = '기간선택';
  const mainOption3 = [
    { text: '최근 1년', value: 'opt-1', },
    { text: '최근 2년', value: 'opt-2', },
    { text: '최근 3년', value: 'opt-3', },
    { text: '최근 전체', value: 'opt-4', },
  ]
  const option3 = [
    { text: '적립내역', value: 'opt-1', },
    { text: '사용내역', value: 'opt-2', },
  ]

  const mainTitle4 = '선택';
  const option4 = [
    { text: '최신순', value: 'opt-1', },
    { text: '1회부터', value: 'opt-2', },
    { text: '미구매', value: 'opt-3', },
  ]

  const option5 = [
    { text: '최신순', value: 'opt-1', },
    { text: '1회부터', value: 'opt-2', },
    { text: '내댓글', value: 'opt-3', },
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)

    if (eventName === 'change_SortingBarSub') {
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
        <div className="sampleTitle">1. 기본형 (mode : basic)</div>
        <SortingBar mode="basic" title={mainTitle1} itemList={option1} selectedItemValue="opt-1" prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 기본형 + 완결 (mode : completed)</div>
        <SortingBar mode="completed" title={mainTitle2} itemList={option1} selectedItemValue="opt-1" prevEvent={prevEvent} onEvent={action('2.completed')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">3. DropDown (mode : dropdown)</div>
        <SortingBar mode="dropdown" title={mainTitle3} options={mainOption3} optionValue="" itemList={option3} selectedItemValue="opt-1" prevEvent={prevEvent} onEvent={action('3.DropDown')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">4. Selected (mode : selected)</div>
        <SortingBar mode="selected" title={mainTitle4} itemList={option4} selectedItemValue="opt-1" prevEvent={prevEvent} onEvent={action('3.Selected')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">4. Selected (mode : notitle)</div>
        <SortingBar mode="notitle" itemList={option5} selectedItemValue="opt-1" prevEvent={prevEvent} onEvent={action('3.notitle')} />
      </div>
      <style>{`
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
      `}</style>
    </div>
  );
}

export default SortingBarEx
