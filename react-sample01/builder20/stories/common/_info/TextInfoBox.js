import React from 'react';
import { action } from '@storybook/addon-actions';
import { TextInfoBox } from 'components';

export const TextInfoBoxEx = () => {
  const title1 = '이용안내';
  const desc1 = '∙ 이용권 기간 내 대상이 되는 상품을 볼 수 있습니다.<br />∙ 30일 단위로 자동 결제되며, 해지는 결제 예정일 전에 해야합니다.<br />∙ 해지를 하면 남은 기간 동안은 사용이 가능하며 다음 자동 결제가 발생하지 않습니다.<br />∙ 결제 취소는 이용권을 통한 사용실적이 없는 상태에서 결제일로부터 7일 이내 고객센터(1600-6573)를 통해 접수된 건에 한하여 제공됩니다.<br />∙ 번호 이동/번호 변경/명의변경 등 회선 상태가 변경된 경우 이용권이 자동 해지되는 부분은 각 이동통신사 정책에 따릅니다.';
  const desc2 = '각 캐쉬별 최종 충전시점의 보유금액 기준으로 60%이상 사용시(1만원 이하인 경우 80%이상) 잔액에 대해 환급이 가능합니다.<br />조건 미충족 시 잔액 환급이 불가하며, 캐쉬 추가 소진 후 환급신청하실 수 있습니다.<br />충전 또는 구매 시 무료로 지급받은 캐쉬 또는 쿠폰이 있을 경우, 이미 사용한 캐쉬 및 쿠폰에 해당하는 금액은 차감 후 환불됩니다.';
  const title3 = '개인정보 수집 및 이용에 동의합니다.'
  const checkParam3 = {
    name: 'a001',
    checked: false
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 기본형 (mode : basic)</div>
        <TextInfoBox mode="basic" title={title1} desc={desc1}></TextInfoBox>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 기본형 (mode : basic)</div>
        <TextInfoBox mode="basic" desc={desc2}></TextInfoBox>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">02. 상단 라인형 (mode : line)</div>
        <TextInfoBox mode="line" title={title1} desc={desc1}></TextInfoBox>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 상단 라인형 (mode : line)</div>
        <TextInfoBox mode="line" desc={desc2}></TextInfoBox>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">03. 체크 동의 라인형 (mode : checkboxLine)</div>
        <TextInfoBox mode="checkboxLine" title={title3} checkParam={checkParam3} desc={desc1}></TextInfoBox>
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


export default TextInfoBoxEx