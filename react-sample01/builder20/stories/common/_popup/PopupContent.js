import React from 'react';
import { action } from '@storybook/addon-actions';
import { Popup, PopupCo, DimPopup } from 'components';

export const PopupSampleEx = () => {
  const title1 = '본인확인용 개인 정보 수집 및 이용 동의(선택)';
  const title2 = '알림';


  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }
  
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">Popup (개인정보 수집 : confirm)</div>
        <div className="sampleCo">
          <Popup mode="confirm" title={title1} firstBtnNm="확인" secondBtnNm="취소" prevEvent={prevEvent} onEvent={action('2.confirm')}>
            <PopupCo.terms>
              <PopupCo.termsItem>
                <PopupCo.termsTitle>제공받는 자</PopupCo.termsTitle>
                <PopupCo.termsDetail>SK텔레콤㈜</PopupCo.termsDetail>
              </PopupCo.termsItem>
              <PopupCo.termsItem>
                <PopupCo.termsTitle>제공목적</PopupCo.termsTitle>
                <PopupCo.termsDetail>T멤버십을 통한 대금결제서비스의 제공</PopupCo.termsDetail>
              </PopupCo.termsItem>
              <PopupCo.termsItem>
                <PopupCo.termsTitle>제공항목</PopupCo.termsTitle>
                <PopupCo.termsDetail>T멤버십 카드번호, 주민등록법 상 생년월일 및 성별</PopupCo.termsDetail>
              </PopupCo.termsItem>
            </PopupCo.terms>
            <PopupCo.para>미동의 시 T멤버십 결제가 불가합니다</PopupCo.para>
          </Popup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Popup (정보 : confirm)</div>
        <div className="sampleCo">
          <Popup mode="confirm" firstBtnNm="확인" secondBtnNm="취소" prevEvent={prevEvent} onEvent={action('2.confirm')}>
            <PopupCo.para>사용중이신 안드로이드 OS 4.0 미만 단말에서는 원활한 서비스 이용이 어렵습니다. 계속 하시겠습니까?</PopupCo.para>
            <PopupCo.roundBox>
              <PopupCo.list>
                <PopupCo.listItem>구매 후 안드로이드 OS 4.0 이상의 다른 기기 사용을 권장합니다.</PopupCo.listItem>
              </PopupCo.list>
            </PopupCo.roundBox>
          </Popup>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">Popup (알림 : confirm)</div>
        <div className="sampleCo">
          <Popup mode="confirmToday" title={title2} firstBtnNm="확인" secondBtnNm="취소" prevEvent={prevEvent} onEvent={action('2.confirm')}>
            <PopupCo.para>안녕하세요. unknown 입니다.<br /><br />SK텔레콤 T멤버십의 T'PLE 프로그램 종료에 따라 할인 혜택이 아래와 같이 종료되오니 참고하시기 바랍니다.</PopupCo.para>
            <PopupCo.roundBox>
              <PopupCo.list>
                <PopupCo.listItem>대상 : T멤버십 T'PLE 할인</PopupCo.listItem>
                <PopupCo.listItem>종료 혜택 : 게임/VOD 50%, 이북/앱 20% 할인 (월 자동결제 포함)</PopupCo.listItem>
                <PopupCo.listItem>종료일 : 2019년 5월 1일(수)</PopupCo.listItem>
              </PopupCo.list>
            </PopupCo.roundBox>
            <PopupCo.para>기존의 일반 T멤버십 할인은 계속 유지되니 많은 이용 바랍니다.<br />T'PLE 할인으로 월 자동결제 상품을 이용 중이신 고객님은 일반 T멤버십 할인(10%)으로 계속 유지됩니다.<br /><br />감사합니다.</PopupCo.para>
          </Popup>
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
            padding:20px 0 20px 0;
            background: rgba(0,0,0,0.3);
          }
          .PopupWrap { position:static; }
      `}</style>
    </div>
  );
}


export default PopupSampleEx
