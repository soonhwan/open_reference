import React from 'react';
import { action } from '@storybook/addon-actions';
import { useDispatch } from 'hooks';
import * as baseActions from 'store/modules/base';

export const PopupEx = () => {
  const dispatch = useDispatch()

  const openPopup = (num) => {
    let popupInfo;
    if (num == 1) {
      popupInfo = {
        title: '타이틀',
        detail: '팝업 세부 내용들~~',
        firstBtnNm: '예',
        // secondBtnNm: '아니오',
        checkBtnNm: '다시보지않기',
        onEvent: (eventName, state, event) => {
          console.log('storybook -> openPopup onEvent', eventName, state)
        }
      }
    } else if (num == 2) {
      popupInfo = {
        // title: 'title',
        detail: 'detail',
        firstBtnNm: '예',
        secondBtnNm: '아니오',
        // checkBtnNm: '다시보지않기',
        onEvent: (eventName, state, event) => {
          console.log('storybook -> openPopup onEvent', eventName, state)
        }
      }
    }
    dispatch(baseActions.openPopup(popupInfo))
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">Popup (확인 팝업 : alert)</div>
        <div className="sampleCo">
          <ul>
            <li> - <a onClick={() => openPopup(1)}>1번 팝업 열기</a></li>
            <li> - <a onClick={() => openPopup(2)}>2번 팝업 열기</a></li>
          </ul>
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


export default PopupEx
