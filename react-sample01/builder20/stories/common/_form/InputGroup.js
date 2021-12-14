import React from 'react';
import { action } from '@storybook/addon-actions';
import { InputGroup } from 'components';

export const InputGroupEx = () => {
  const inputParam1 = {
    type: 'text',
    value: '',
    placeholder: '18자리로 된 쿠폰번호를 입력해주세요',
  }
  const inputBtn1 = {
    mode: 'text',
    btnClass: 'btnSmall',
    size: 'B12',
    color: 'White',
    text: '저장하기'
  }

  const inputParam2 = {
    type: 'text',
    value: '',
    disabled: 'Y',
    placeholder: '18자리로 된 쿠폰번호를 입력해주세요'
  }
  const inputBtn2 = {
    mode: 'text',
    btnClass: 'btnSmall',
    size: 'B12',
    color: 'White',
    text: '저장하기'
  }

  const inputParam3 = {
    type: 'text',
    value: '',
    placeholder: '18자리로 된 쿠폰번호를 입력해주세요',
    infoType: 'info',
    infoMessage: '- 등록 전 보유하신 캐쉬 또는 쿠폰의 유효기간을 확인해주세요.<br />- unknown 캐쉬 번호는 unknown 앱에서 등록 가능합니다.'
  }
  const inputBtn3 = {
    mode: 'text',
    btnClass: 'btnSmall',
    size: 'B12',
    color: 'White',
    text: '저장하기',
  }

  const inputParam4 = {
    type: 'text',
    value: '',
    placeholder: '18자리로 된 쿠폰번호를 입력해주세요',
    infoType: 'error',
    infoMessage: '에러 메시지'
  }

  const inputParam41 = {
    type: 'text',
    value: '',
    placeholder: '18자리로 된 쿠폰번호를 입력해주세요',
    infoType: 'success',
    infoMessage: '완료 메시지'
  }

  const inputParam5 = {
    inputItems: [
      { type: 'tel', value: '010', placeholder: '010', text: '첫번째 전화번호' },
      { type: 'tel', value: '', placeholder: '', text: '두번째 전화번호' },
      { type: 'tel', value: '', placeholder: '', text: '세번째 전화번호' }
    ]
  }
  const inputParam51 = {
    inputItems: [
      { type: 'tel', value: '010', placeholder: '010', text: '첫번째 전화번호' },
      { type: 'tel', value: '', placeholder: '', text: '두번째 전화번호' },
      { type: 'tel', value: '', placeholder: '', text: '세번째 전화번호' }
    ],
    infoType: 'info',
    infoMessage: '- 등록 전 보유하신 캐쉬 또는 쿠폰의 유효기간을 확인해주세요.<br />- unknown 캐쉬 번호는 unknown 앱에서 등록 가능합니다.'
  }
  const inputParam52 = {
    inputItems: [
      { type: 'tel', value: '010', placeholder: '010', text: '첫번째 전화번호' },
      { type: 'tel', value: '', placeholder: '', text: '두번째 전화번호' },
      { type: 'tel', value: '', placeholder: '', text: '세번째 전화번호' }
    ],
    infoType: 'error',
    infoMessage: '에러 메시지'
  }

  const inputParam6 = {
    type: 'text',
    value: '',
    placeholder: '인증번호',
    infoType: 'info',
    infoMessage: '인증번호를 못 받으신 경우 등록된 휴대폰 번호나 이메일 주소가 정확한지 확인 해 보세요. 간혹 스팸 처리되는 경우가 있으니 스팸메일함도 확인해 보세요.'
  }

  const authTime6 = '03:00';

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. Input Group (mode : basic)</div>
        <div className="sampleCo">
          <InputGroup mode="basic" inputParam={inputParam1} inputBtn={inputBtn1}>쿠폰 번호</InputGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. Input Group (mode : basic) : disabled</div>
        <div className="sampleCo">
          <InputGroup mode="basic" inputParam={inputParam2} inputBtn={inputBtn2}>쿠폰 번호</InputGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">3. Input Group (mode : basic) : 안내 메시지</div>
        <div className="sampleCo">
          <InputGroup mode="basic" inputParam={inputParam3} inputBtn={inputBtn3}>쿠폰 번호</InputGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Input Group (mode : basic) : 에러 메시지</div>
        <div className="sampleCo">
          <InputGroup mode="basic" inputParam={inputParam4} inputBtn={inputBtn3}>쿠폰 번호</InputGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Input Group (mode : basic) : 성공 메시지</div>
        <div className="sampleCo">
          <InputGroup mode="basic" inputParam={inputParam41} inputBtn={inputBtn3}>쿠폰 번호</InputGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">4. Input Group 인증시간 (mode : authTime)</div>
        <div className="sampleCo">
          <InputGroup mode="authTime" inputParam={inputParam6} authTime={authTime6}>인증 시간</InputGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">5. Input Group 전화번호 (mode : telGroup)</div>
        <div className="sampleCo">
          <InputGroup mode="telGroup" inputParam={inputParam5}>환급결과 안내를 위해 휴대전화번호를 입력해 주세요.</InputGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Input Group 전화번호 (mode : telGroup) : 안내 메시지</div>
        <div className="sampleCo">
          <InputGroup mode="telGroup" inputParam={inputParam51}>환급결과 안내를 위해 휴대전화번호를 입력해 주세요.</InputGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Input Group 전화번호 (mode : telGroup) : 에러 메시지</div>
        <div className="sampleCo">
          <InputGroup mode="telGroup" inputParam={inputParam52}>환급결과 안내를 위해 휴대전화번호를 입력해 주세요.</InputGroup>
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


export default InputGroupEx
