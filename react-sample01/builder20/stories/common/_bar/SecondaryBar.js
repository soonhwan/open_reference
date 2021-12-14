import React from 'react';
import { action } from '@storybook/addon-actions';
import { SecondaryBar } from 'components';

export const SecondaryBarEx = () => {
  const subKeyword1 = [
    { text: '#키워드1', value: 'opt-1' },
    { text: '#키워드2', value: 'opt-2' },
    { text: '#키워드3', value: 'opt-3' },
    { text: '#키워드4', value: 'opt-4' },
    { text: '#키워드5', value: 'opt-5' },
    { text: '#키워드6', value: 'opt-6' },
    { text: '#키워드7', value: 'opt-7' },
    { text: '#키워드8', value: 'opt-8' },
    { text: '#키워드9', value: 'opt-9' }
  ]
  const subKeyword2 = [
    { text: '#키워드1', value: 'opt-1' },
    { text: '#키워드2', value: 'opt-2' },
    { text: '#키워드3', value: 'opt-3' },
    { text: '#키워드4', value: 'opt-4' },
    { text: '#키워드5', value: 'opt-5' },
    { text: '#키워드6', value: 'opt-6' },
    { text: '#키워드7', value: 'opt-7' },
    { text: '#키워드8', value: 'opt-8' },
    { text: '#키워드9', value: 'opt-9' },
    { text: '#키워드10', value: 'opt-10' },
    { text: '#키워드11', value: 'opt-11' },
    { text: '#키워드12', value: 'opt-12' },
    { text: '#키워드13', value: 'opt-13' },
    { text: '#키워드14', value: 'opt-14' },
    { text: '#키워드15', value: 'opt-15' },
    { text: '#키워드16', value: 'opt-16' },
    { text: '#키워드17', value: 'opt-17' },
    { text: '#키워드18', value: 'opt-18' },
    { text: '#키워드19', value: 'opt-19' },
    { text: '#키워드21', value: 'opt-21' },
    { text: '#키워드22', value: 'opt-22' },
    { text: '#키워드23', value: 'opt-23' },
    { text: '#키워드24', value: 'opt-24' },
    { text: '#키워드25', value: 'opt-25' },
    { text: '#키워드26', value: 'opt-26' },
    { text: '#키워드27', value: 'opt-27' },
    { text: '#키워드28', value: 'opt-28' },
    { text: '#키워드29', value: 'opt-29' },
    { text: '#키워드30', value: 'opt-30' }
  ]

  const subCategory1 = [
    { text: '장르1', value: 'opt-1' },
    { text: '장르2', value: 'opt-2' },
    { text: '장르3', value: 'opt-3' },
    { text: '장르4', value: 'opt-4' },
    { text: '장르5', value: 'opt-5' },
    { text: '장르6', value: 'opt-6' },
    { text: '장르7', value: 'opt-7' },
    { text: '장르8', value: 'opt-8' },
    { text: '장르9', value: 'opt-9' },
    { text: '장르10', value: 'opt-10' },
    { text: '장르11', value: 'opt-11' },
    { text: '장르12', value: 'opt-12' },
    { text: '장르13', value: 'opt-13' },
    { text: '장르14', value: 'opt-14' },
    { text: '장르15', value: 'opt-15' },
    { text: '장르16', value: 'opt-16' },
    { text: '장르17', value: 'opt-17' },
    { text: '장르18', value: 'opt-18' },
    { text: '장르19', value: 'opt-19' }
  ]

  const subTab1 = [
    { text: '작품 정보', value: 'opt-1' },
    { text: '연재 9999', value: 'opt-2' },
    { text: '댓글 9999', value: 'opt-3' },
    { text: '추천', value: 'opt-4' }
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

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">SecondaryBar (mode : keyword)</div>
        <div className="sampleCo">
          <SecondaryBar mode="keyword" subOptions={subKeyword1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('1.keyword')}></SecondaryBar>
        </div>
        <div className="sampleCo">
          <SecondaryBar mode="keyword" subOptions={subKeyword2} subValue="opt-4" prevEvent={prevEvent} onEvent={action('1.keyword')}></SecondaryBar>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">SecondaryBar (mode : detailKeyword)</div>
        <div className="sampleCo">
          <SecondaryBar mode="detailKeyword" subOptions={subKeyword1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('2.keyword')}></SecondaryBar>
        </div>
        <div className="sampleCo">
          <SecondaryBar mode="detailKeyword" subOptions={subKeyword2} subValue="opt-4" prevEvent={prevEvent} onEvent={action('2.keyword')}></SecondaryBar>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">SecondaryBar (mode : category)</div>
        <div className="sampleCo">
          <SecondaryBar mode="category" subOptions={subCategory1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('3.category')}></SecondaryBar>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">SecondaryBar (mode : detailTab)</div>
        <div className="sampleCo">
          <SecondaryBar mode="detailTab" subOptions={subTab1} subValue="opt-1" prevEvent={prevEvent} onEvent={action('4.detailTab')}></SecondaryBar>
        </div>
      </div>

      <style>{`
          body { background:#ffffff; }
          .storybook-container { background:#ffffff !important; }
          .sampleCase { width:100%; min-width:280px;}
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
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


export default SecondaryBarEx
