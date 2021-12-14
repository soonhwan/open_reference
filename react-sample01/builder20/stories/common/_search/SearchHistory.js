import React from 'react';
import { action } from '@storybook/addon-actions';
import { SearchHistory } from 'components';

export const SearchHistoryEx = () => {
  const searchHisotrys = [
    { text: '검색어 1', value: 'opt-1', },
    { text: '검색어 2', value: 'opt-2', },
    { text: '검색어 3', value: 'opt-3', },
    { text: '검색어 4', value: 'opt-4', },
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }
  
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1 Search History</div>
        <div className="sampleCo">
          <SearchHistory mode="basic" options={searchHisotrys} prevEvent={prevEvent} onEvent={action('1.searchHistory')}></SearchHistory>
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


export default SearchHistoryEx
