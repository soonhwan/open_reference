import React from 'react';
import { action } from '@storybook/addon-actions';
import { MemberIllInfo } from 'components';

export const MemberIllInfoEx = () => {
  const noThumb1 = '/static/images/common/member_illpic_01.png';
  const mainTitle1 = 'unknown 북패스 등록';

  const noThumb2 = '/static/images/common/member_illpic_01.png';
  const mainTitle2 = 'unknown 북패스 등록';
  const mainSummary2 = '북패스 등록을 위해서 unknown 로그인이 필요합니다.';

  const noThumb3 = '/static/images/common/member_illpic_adult_01.png';
  const mainTitle3 = '성인인증이 필요합니다.';
  const mainSummary3 = '본 정보는 청소년유해매체물로서 정보통신망 이용 촉진 및 정보 보호 등에 관한 법률 및 청소년 보호법의 규정에 의하여<br />만 19세 미만의 청소년이 이용할 수 없습니다.';


  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 기본형 (mode : basic)</div>
        <MemberIllInfo mode="basic" thumb={noThumb1} title={mainTitle1}></MemberIllInfo>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 기본형 + 설명 (mode : basic)</div>
        <MemberIllInfo mode="basic" thumb={noThumb2} title={mainTitle2} summary={mainSummary2}></MemberIllInfo>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">02. 성인 인증 안내 (mode : adult)</div>
        <MemberIllInfo mode="adult" thumb={noThumb3} title={mainTitle3} summary={mainSummary3}></MemberIllInfo>
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


export default MemberIllInfoEx