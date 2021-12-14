import React from 'react';
import { action } from '@storybook/addon-actions';
import { RankingBox } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const RankingBoxEx = () => {
  const title1 = '랭킹';
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

  const list2 = getMockJs('product', 'list', 9)

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. RankingBox</div>
        <RankingBox mode="basic" title={title1} subOptions={subRankingNav1} subValue="opt-1" infoList={list2} prevEvent={prevEvent} onEvent={action('1.RankingBox')} />
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
export default RankingBoxEx
