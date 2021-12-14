import React from 'react';
import { action } from '@storybook/addon-actions';
import { IllInfoBox } from 'components';

export const IllInfoBoxEx = () => {
  const noThumb1 = '/static/images/thumb/list_no_results_01.png';
  const mainTitle1 = '해지하시면 모든 정보와<br />구매내역이 삭제되고 복구되지 않습니다.<br />신중하게 결정해 주세요.';

  const noThumb2 = '/static/images/thumb/list_no_results_01.png';
  const mainTitle2 = 'unknown 이용해지가 완료되었습니다.';
  const mainSummary2 = '그동안 unknown를 이용해주셔서 감사합니다.<br />원하신다면 언제든 다시 가입하실 수 있습니다.<br />더 나은 모습으로 발전하는 unknown가 되겠습니다.';
  const btnNm = '확인';


  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 기본형 (mode : basic)</div>
        <IllInfoBox mode="basic" thumb={noThumb1} title={mainTitle1}></IllInfoBox>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 완료형 (mode : complete)</div>
        <IllInfoBox mode="complete" thumb={noThumb2} title={mainTitle2} summary={mainSummary2} moreBtn={btnNm} prevEvent={prevEvent} onEvent={action('2.complete')}></IllInfoBox>
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


export default IllInfoBoxEx