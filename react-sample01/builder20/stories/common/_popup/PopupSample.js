import React from 'react';
import { action } from '@storybook/addon-actions';
import { Popup } from 'components';

export const PopupSampleEx = () => {
  const title1 = '공지사항';
  const detail1 = '공지사항은 세줄로 내용이 노출됩니다. unknown 새 버전이 업데이트 되었습니다! 다운로드 받으세요.';
  const title2 = '이 작품은 북패스로 볼 수 있습니다!';
  const detail2 = '수만 권의 베스트셀러를 한 달 동안 무료, 무제한 감상';
  const title3 = '공유하기';

  const snsShare1 = [
    { snsNm: 'kakaotalk', snsName: '카카오톡' },
    { snsNm: 'facebook', snsName: '페이스북' },
    { snsNm: 'link', snsName: '링크 복사' },
  ]

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
        <div className="sampleTitle">Popup (확인 팝업 : alert)</div>
        <div className="sampleCo">
          <Popup detail={detail1} firstBtnNm="확인" prevEvent={prevEvent} onEvent={action('1.alert')}></Popup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Popup (확인 팝업 : alertToday / 다시보지 않기)</div>
        <div className="sampleCo">
          <Popup title={title1} detail={detail1} firstBtnNm="확인" checkBtnNm="다시보지않기" prevEvent={prevEvent} onEvent={action('1.alert')}></Popup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Popup (선택 팝업 : confirm)</div>
        <div className="sampleCo">
          <Popup detail={detail1} firstBtnNm="예" secondBtnNm="아니요" prevEvent={prevEvent} onEvent={action('2.confirm')}></Popup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Popup (선택 팝업 : confirmToday / 다시보지 않기)</div>
        <div className="sampleCo">
          <Popup title={title1} detail={detail1} firstBtnNm="예" secondBtnNm="아니요" checkBtnNm="오늘하루안볼래요" prevEvent={prevEvent} onEvent={action('2.confirm')}></Popup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Popup (선택 팝업 : confirmBtnStyle)</div>
        <div className="sampleCo">
          <Popup title={title2} detail={detail2} firstBtnNm="북패스 자세히 보기" secondBtnNm="구매 계속하기" btnStyle="s" prevEvent={prevEvent} onEvent={action('2.confirm')}></Popup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Popup (선택 팝업 : confirmBtnStyleToday / 다시보지 않기)</div>
        <div className="sampleCo">
          <Popup title={title2} detail={detail2} firstBtnNm="북패스 자세히 보기" secondBtnNm="구매 계속하기" checkBtnNm="다시보지않기" btnStyle="s2" prevEvent={prevEvent} onEvent={action('2.confirm')}></Popup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Popup (mode : share)</div>
        <div className="sampleCo">
          <Popup mode="share" title={title3} snsShares={snsShare1} firstBtnNm="확인" prevEvent={prevEvent} onEvent={action('3.share')}></Popup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Popup (mode : appMove)</div>
        <div className="sampleCo">
          <Popup mode="appMove" firstBtnNm="unknown 앱으로 보기" secondBtnNm="모바일 웹으로 볼래요" btnStyle="s" prevEvent={prevEvent} onEvent={action('3.appMove')}></Popup>
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
