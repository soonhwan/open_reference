import React from 'react';
import { action } from '@storybook/addon-actions';
import { SubHeader } from 'components';

export const SubHeaderEx = () => {
  const title1 = '타이틀텍스트';
  const title2 = '서브 텍스트 타이틀 서브 텍스트 타이틀 서브 텍스트 타이틀 서브 텍스트 타이틀 서브 텍스트 타이틀 서브 텍스트 타이틀';
  const subTitle1 = '서브텍스트'

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
        <div className="sampleTitle">1. 서브 타이틀 ( mode : basic )</div>
        <SubHeader mode="basic" title={title1} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 서브 타이틀 - 링크형 ( mode : link )</div>
        <SubHeader mode="link" title={title1} prevEvent={prevEvent} onEvent={action('2.link')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">3. 서브 타이틀 - Offering ( mode : offeringBasic )</div>
        <SubHeader mode="offeringBasic" title={title1} prevEvent={prevEvent} onEvent={action('3.offeringBasic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">4. 서브 타이틀 - Offering 링크형 ( mode : offeringLink )</div>
        <SubHeader mode="offeringLink" title={title1} prevEvent={prevEvent} onEvent={action('4.offeringLink')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">5. 서브 타이틀 - Content ( mode : contentBasic )</div>
        <SubHeader mode="contentBasic" title={title1} prevEvent={prevEvent} onEvent={action('5.contentBasic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">6. 서브 타이틀 - Content 링크형 ( mode : contentLink )</div>
        <SubHeader mode="contentLink" title={title1} prevEvent={prevEvent} onEvent={action('6.contentLink')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">5. 서브 타이틀 - Content ( mode : contentBasic )</div>
        <SubHeader mode="contentBasic" title={title1} subTitle={subTitle1} prevEvent={prevEvent} onEvent={action('5.contentBasic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">6. 서브 타이틀 - Content 링크형 ( mode : contentLink )</div>
        <SubHeader mode="contentLink" title={title1} subTitle={subTitle1} prevEvent={prevEvent} onEvent={action('6.contentLink')} />
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

export default SubHeaderEx
