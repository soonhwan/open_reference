import React from 'react';
import { action } from '@storybook/addon-actions';
import { SearchBottomBtn } from 'components';

export const SearchBottomBtnEx = () => {
  const btnNm = '통합검색결과 더보기';
  
  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }
  
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1 Search Auto</div>
        <div className="sampleCo">
          <SearchBottomBtn mode="basic" moreBtn={btnNm} prevEvent={prevEvent} onEvent={action('1.SearchBottomBtn')}></SearchBottomBtn>
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


export default SearchBottomBtnEx
