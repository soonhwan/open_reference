import React from 'react';
import { action } from '@storybook/addon-actions';
import { MemberTextInfo } from 'components';

export const MemberTextInfoEx = () => {
  const mainSummary1 = '14세 미만이신 경우 정보통신망 이용촉진 및 정보 보호 등에 관한 법률 제 44조의 5에 의거하여 법정대리인의 동의 절차가 필요합니다.';
  const mainSummary2 = 'unknown를 이용하기 위해<br />unknown 계정으로 로그인 해 주세요';
  const mainSummary3 = '휴대폰 번호로 unknown를 이용중인 경우, unknown<br />앱 내 ‘좌메뉴>계정관리’에서 아이디 회원으로<br />전환하셔야 이용 가능합니다.';
  const accountInfo4 = {
    sns: 'apple', /* facebook, google, naver, apple, tworld, mdn */
    name: 'abcd@gmail.com'
  }
  const mainSummary4 = '이 아이디로 북패스를 이용하시겠습니까?';

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 기본형 (mode : basic)</div>
        <MemberTextInfo mode="basic" summary={mainSummary1}></MemberTextInfo>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">02. 기본형 센터 (mode : basicCenter)</div>
        <MemberTextInfo mode="basicCenter" summary={mainSummary2}></MemberTextInfo>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">03. 하단 Info (mode : smallCenter)</div>
        <MemberTextInfo mode="smallCenter" summary={mainSummary3}></MemberTextInfo>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">04. 아이디 정보 (mode : account)</div>
        <MemberTextInfo mode="account" accountInfo={accountInfo4} summary={mainSummary4}></MemberTextInfo>
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


export default MemberTextInfoEx