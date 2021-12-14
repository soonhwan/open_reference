import React from 'react';
import { action } from '@storybook/addon-actions';
import { Popup, DimPopup } from 'components';

export const PopupCoverSampleEx = () => {
  const coverPic1 = '/data7/SMILE_DATA7/IMG/PEBOOKS/202006/17/0040084650/01_0040084650_1335.png';

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }
  /*
  <div className="sampleCase">
    <div className="sampleTitle">Popup (확인 팝업 : alert)</div>
    <div className="sampleCo">
      <Popup mode="alert" title={title1} detail={detail1} firstBtnNm="확인" prevEvent={prevEvent} onEvent={action('1.alert')}></Popup>
    </div>
  </div>
  <div className="sampleCase">
    <div className="sampleTitle">Popup (확인 팝업 : alertToday / 다시보지 않기)</div>
    <div className="sampleCo">
      <Popup mode="alertToday" title={title1} detail={detail1} firstBtnNm="확인" prevEvent={prevEvent} onEvent={action('1.alert')}></Popup>
    </div>
  </div>
  <div className="sampleCase">
    <div className="sampleTitle">Popup (선택 팝업 : confirm)</div>
    <div className="sampleCo">
      <Popup mode="confirm" title={title1} detail={detail1} firstBtnNm="예" secondBtnNm="아니요" prevEvent={prevEvent} onEvent={action('2.confirm')}></Popup>
    </div>
  </div>
  <div className="sampleCase">
    <div className="sampleTitle">Popup (선택 팝업 : confirmToday / 다시보지 않기)</div>
    <div className="sampleCo">
      <Popup mode="confirmToday" title={title1} detail={detail1} firstBtnNm="예" secondBtnNm="아니요" prevEvent={prevEvent} onEvent={action('2.confirm')}></Popup>
    </div>
  </div>
  <div className="sampleCase">
    <div className="sampleTitle">Popup (선택 팝업 : confirmBtnStyle)</div>
    <div className="sampleCo">
      <Popup mode="confirmBtnStyle" title={title2} detail={detail2} firstBtnNm="북패스 자세히 보기" secondBtnNm="구매 계속하기" prevEvent={prevEvent} onEvent={action('2.confirm')}></Popup>
    </div>
  </div>
  <div className="sampleCase">
    <div className="sampleTitle">Popup (선택 팝업 : confirmBtnStyleToday / 다시보지 않기)</div>
    <div className="sampleCo">
      <Popup mode="confirmBtnStyleToday" title={title2} detail={detail2} firstBtnNm="북패스 자세히 보기" secondBtnNm="구매 계속하기" prevEvent={prevEvent} onEvent={action('2.confirm')}></Popup>
    </div>
  </div>
  */
  
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">Popup (mode : detailCover)</div>
        <div className="sampleCo">
          <DimPopup></DimPopup>
          <Popup mode="detailCover" coverPic={coverPic1} prevEvent={prevEvent} onEvent={action('1.detailCover')}></Popup>
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
            padding:20px 0 20px 0;
            background: rgba(0,0,0,0.3);
          }
      `}</style>
    </div>
  );
}


export default PopupCoverSampleEx
