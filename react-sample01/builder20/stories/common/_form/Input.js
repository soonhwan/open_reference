import React from 'react';
import { action } from '@storybook/addon-actions';
import { Input } from 'components';

export const InputEx = () => {
  const inputParam1 = {
    type: 'text',
    value: '',
    placeholder: '내용을 입력해주세요',
  }

  const inputParam2 = {
    type: 'text',
    value: '',
    requiredYn: 'Y',
    placeholder: '내용을 입력해주세요',
  }

  const inputParam3 = {
    type: 'text',
    value: '하루',
    requiredYn: 'Y',
    placeholder: '내용을 입력해주세요',
  }

  const inputParam4 = {
    type: 'text',
    value: '하루',
    disabled: 'Y',
    placeholder: '내용을 입력해주세요',
  }

  const inputParam5 = {
    type: 'text',
    value: '',
    requiredYn: 'Y',
    placeholder: '내용을 입력해주세요',
    infoType: 'info',
    infoMessage: '- 등록 전 보유하신 캐쉬 또는 쿠폰의 유효기간을 확인해주세요.<br />- unknown 캐쉬 번호는 unknown 앱에서 등록 가능합니다.'
  }

  const inputParam6 = {
    type: 'text',
    value: '',
    placeholder: '내용을 입력해주세요',
    infoType: 'error',
    infoMessage: '에러 메시지'
  }

  const inputParam7 = {
    type: 'text',
    value: '',
    placeholder: '내용을 입력해주세요',
    infoType: 'success',
    infoMessage: '완료 메시지'
  }

  const inputParam8 = {
    type: 'password',
    value: '',
    placeholder: '새 비밀번호',
    infoType: 'required',
    infoMessage: [
      { checkYn: 'Y', text: '영문대소문자, 숫자, 특수문자 조합 (6~20자)' },
      { checkYn: '', text: '사용가능 특수문자 : !@#$%^&*()-_+=|[]{}’”;:/?.>,<' },
      { checkYn: '', text: '3자 이상 연속된 영문, 숫자, 특수문자 조합 제외' },
      { checkYn: '', text: '아이디에 포함된 문자, 숫자와 연속 3자 이상 동일한 조합 제외' }
    ]
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. Input (text)</div>
        <div className="sampleCo">
          <Input mode="basic" {...inputParam1}>이름</Input>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. Input (text : 필수 표시)</div>
        <div className="sampleCo">
          <Input mode="basic" {...inputParam2}>이름</Input>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">3. Input (text : value 값)</div>
        <div className="sampleCo">
          <Input mode="basic" {...inputParam3}>이름</Input>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">4. Input (text : disabled)</div>
        <div className="sampleCo">
          <Input mode="basic" {...inputParam4}>이름</Input>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">5. Input (text : 안내 메시지)</div>
        <div className="sampleCo">
          <Input mode="basic" {...inputParam5}>쿠폰 번호</Input>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Input (text : 에러 메시지)</div>
        <div className="sampleCo">
          <Input mode="basic" {...inputParam6}>아이디</Input>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Input (text : 성공 메시지)</div>
        <div className="sampleCo">
          <Input mode="basic" {...inputParam7}>아이디</Input>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">6. Input (label hidden)</div>
        <div className="sampleCo">
          <Input mode="basic" {...inputParam1} labelHiddenYn="Y">이름</Input>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Input (text : 유효성 체크)</div>
        <div className="sampleCo">
          <Input mode="basic" {...inputParam8} labelHiddenYn="Y">새 비밀번호</Input>
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


export default InputEx
