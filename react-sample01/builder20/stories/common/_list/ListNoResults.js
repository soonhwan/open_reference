import React from 'react';
import { action } from '@storybook/addon-actions';
import { ListNoResults } from 'components';

export const ListNoResultsEx = () => {
  const noThumb1 = '/static/images/thumb/list_no_results_01.png';
  const mainTitle1 = '텍스트텍스트텍스트텍스트';

  const noThumb2 = '/static/images/thumb/list_no_results_01.png';
  const mainTitle2 = '텍스트텍스트텍스트텍스트';
  const mainSummary2 = '텍스트텍스트텍스트텍스트';

  const noThumb3 = '/static/images/thumb/list_no_results_01.png';
  const mainTitle3 = '<b>타파하</b> 검색결과가 없습니다.';
  const mainSummary3 = '다른 검색어를 입력하거나<br />철자와 띄어쓰기를 확인해 보세요.';

  const noThumb4 = '/static/images/thumb/list_no_results_01.png';
  const mainTitle4 = '북패스 내 <b>타파하</b> 검색결과가 없습니다.';
  const mainSummary4 = '다른 검색어를 입력하거나<br />철자와 띄어쓰기를 확인해 보세요.';
  const btnNm = '통합검색결과 더보기';

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 기본형 (mode : basic)</div>
        <ListNoResults mode="basic" thumb={noThumb1} title={mainTitle1}></ListNoResults>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 기본형 (mode : basic)</div>
        <ListNoResults mode="basic" thumb={noThumb2} title={mainTitle2} summary={mainSummary2}></ListNoResults>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 통합 검색 (mode : basic)</div>
        <ListNoResults mode="basic" thumb={noThumb3} title={mainTitle3} summary={mainSummary3}></ListNoResults>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 북패스 검색 (mode : basic)</div>
        <ListNoResults mode="basic" thumb={noThumb4} title={mainTitle4} summary={mainSummary4} moreBtn={btnNm} prevEvent={prevEvent} onEvent={action('1.ListNoResults')}></ListNoResults>
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


export default ListNoResultsEx