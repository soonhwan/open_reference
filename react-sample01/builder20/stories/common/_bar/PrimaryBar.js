import React from 'react';
import { action } from '@storybook/addon-actions';
import { PrimaryBar } from 'components';

export const PrimaryBarEx = () => {
  const subList1 = [
    { text: '메뉴1', value: 'opt-1' },
    { text: '메뉴2', value: 'opt-2' },
    { text: '메뉴3', value: 'opt-3' },
    { text: '메뉴4', value: 'opt-4' },
    { text: '메뉴5', value: 'opt-5' },
    { text: '메뉴6', value: 'opt-6' },
    { text: '메뉴7', value: 'opt-7' },
    { text: '메뉴8', value: 'opt-8' },
    { text: '메뉴9', value: 'opt-9' },
  ]

  const subList2 = [
    { text: '메뉴1', value: 'opt-1' },
    { text: '메뉴2', value: 'opt-2' },
    { text: '메뉴3', value: 'opt-3' },
    { text: '메뉴4', value: 'opt-4' },
    { text: '메뉴5', value: 'opt-5' },
    { text: '메뉴6', value: 'opt-6' },
    { text: '메뉴7', value: 'opt-7' },
    { text: '메뉴8', value: 'opt-8' },
    { text: '메뉴9', value: 'opt-9' },
    { text: '메뉴10', value: 'opt-10' },
    { text: '메뉴11', value: 'opt-11' },
    { text: '메뉴12', value: 'opt-12' },
    { text: '메뉴13', value: 'opt-13' },
    { text: '메뉴14', value: 'opt-14' },
    { text: '메뉴15', value: 'opt-15' },
    { text: '메뉴16', value: 'opt-16' },
    { text: '메뉴17', value: 'opt-17' },
    { text: '메뉴18', value: 'opt-18' },
    { text: '메뉴19', value: 'opt-19' },
    { text: '메뉴21', value: 'opt-21' },
    { text: '메뉴22', value: 'opt-22' },
    { text: '메뉴23', value: 'opt-23' },
    { text: '메뉴24', value: 'opt-24' },
    { text: '메뉴25', value: 'opt-25' },
    { text: '메뉴26', value: 'opt-26' },
    { text: '메뉴27', value: 'opt-27' },
    { text: '메뉴28', value: 'opt-28' },
    { text: '메뉴29', value: 'opt-29' },
    { text: '메뉴30', value: 'opt-30' }
  ]

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

  const subRankingNav1 = [
    { text: '메뉴1', value: 'opt-1' },
    { text: '메뉴2', value: 'opt-2' },
    { text: '메뉴3', value: 'opt-3' },
    { text: '메뉴4', value: 'opt-4' },
    { text: '메뉴5', value: 'opt-5' },
    { text: '메뉴6', value: 'opt-6' },
    { text: '메뉴7', value: 'opt-7' },
    { text: '메뉴8', value: 'opt-8' },
    { text: '메뉴9', value: 'opt-9' },
    { text: '메뉴10', value: 'opt-10' },
    { text: '메뉴11', value: 'opt-11' },
    { text: '메뉴12', value: 'opt-12' },
    { text: '메뉴13', value: 'opt-13' },
    { text: '메뉴14', value: 'opt-14' },
    { text: '메뉴15', value: 'opt-15' },
    { text: '메뉴16', value: 'opt-16' },
    { text: '메뉴17', value: 'opt-17' },
    { text: '메뉴18', value: 'opt-18' },
    { text: '메뉴19', value: 'opt-19' },
    { text: '메뉴20', value: 'opt-20' }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)

    if (eventName === 'change_PrimaryBar') {
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
        <div className="sampleTitle">PrimaryBar (mode : core)</div>
        <div className="sampleCo">
          <PrimaryBar mode="core" itemList={subList1} selectedItemValue="opt-1" prevEvent={prevEvent} onEvent={action('1.core')}></PrimaryBar>
        </div>
        <div className="sampleCo">
          <PrimaryBar mode="core" itemList={subList2} selectedItemValue="opt-10" prevEvent={prevEvent} onEvent={action('1.core')}></PrimaryBar>
        </div>
        <div className="sampleCo">
          <PrimaryBar mode="core" itemList={subList2} selectedItemValue="opt-27" prevEvent={prevEvent} onEvent={action('1.core')}></PrimaryBar>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">PrimaryBar (mode : landingNav)</div>
        <div className="sampleCo">
          <PrimaryBar mode="landingNav" itemList={subList1} selectedItemValue="opt-1" prevEvent={prevEvent} onEvent={action('2.landingNav')}></PrimaryBar>
        </div>
        <div className="sampleCo">
          <PrimaryBar mode="landingNav" itemList={subList2} selectedItemValue="opt-10" prevEvent={prevEvent} onEvent={action('2.landingNav')}></PrimaryBar>
        </div>
        <div className="sampleCo">
          <PrimaryBar mode="landingNav" itemList={subList2} selectedItemValue="opt-27" prevEvent={prevEvent} onEvent={action('2.landingNav')}></PrimaryBar>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">PrimaryBar (mode : rankingNav)</div>
        <div className="sampleCo">
          <PrimaryBar mode="rankingNav" itemList={subRankingNav1} selectedItemValue="opt-1" prevEvent={prevEvent} onEvent={action('3.rankingNav')}></PrimaryBar>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">PrimaryBar (mode : keyword)</div>
        <div className="sampleCo">
          <PrimaryBar mode="keyword" itemList={subKeyword1} selectedItemValue="opt-1" prevEvent={prevEvent} onEvent={action('4.keyword')}></PrimaryBar>
        </div>
        <div className="sampleCo">
          <PrimaryBar mode="keyword" itemList={subKeyword2} selectedItemValue="opt-5" prevEvent={prevEvent} onEvent={action('4.keyword')}></PrimaryBar>
        </div>
        <div className="sampleCo">
          <PrimaryBar mode="keyword" itemList={subKeyword2} selectedItemValue="opt-27" prevEvent={prevEvent} onEvent={action('4.keyword')}></PrimaryBar>
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

export default PrimaryBarEx
