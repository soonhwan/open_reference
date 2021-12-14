import React from 'react';
import { action } from '@storybook/addon-actions';
import { Textarea } from 'components';

export const TextareaEx = () => {
  const textareaParam1 = {
    type: 'text',
    value: '',
    placeholder: '내용을 입력해주세요',
  }

  const textareaParam2 = {
    type: 'text',
    value: '',
    requiredYn: 'Y',
    placeholder: '내용을 입력해주세요',
  }

  const textareaParam3 = {
    type: 'text',
    value: '하루',
    requiredYn: 'Y',
    placeholder: '내용을 입력해주세요',
  }

  const textareaParam4 = {
    type: 'text',
    value: '',
    requiredYn: 'Y',
    placeholder: '내용을 입력해주세요',
    infoType: 'info',
    infoMessage: '- 등록 전 보유하신 캐쉬 또는 쿠폰의 유효기간을 확인해주세요.<br />- unknown 캐쉬 번호는 unknown 앱에서 등록 가능합니다.'
  }

  const textareaParam5 = {
    type: 'text',
    value: '',
    placeholder: '내용을 입력해주세요',
    infoType: 'error',
    infoMessage: '에러 메시지'
  }

  const textareaParam6 = {
    type: 'text',
    value: '',
    placeholder: '내용을 입력해주세요',
    infoType: 'success',
    infoMessage: '완료 메시지'
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. Textarea (text)</div>
        <div className="sampleCo">
          <Textarea mode="basic" {...textareaParam1}>기타 문의</Textarea>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">2. Textarea (text : 필수 표시)</div>
        <div className="sampleCo">
          <Textarea mode="basic" {...textareaParam2}>기타 문의</Textarea>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">3. Textarea (text : value 값)</div>
        <div className="sampleCo">
          <Textarea mode="basic" {...textareaParam3}>기타 문의</Textarea>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">4. Textarea (text : 안내 메시지)</div>
        <div className="sampleCo">
          <Textarea mode="basic" {...textareaParam4}>기타 문의</Textarea>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle"> - Textarea (text : 에러 메시지)</div>
        <div className="sampleCo">
          <Textarea mode="basic" {...textareaParam5}>기타 문의</Textarea>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle"> - Textarea (text : 성공 메시지)</div>
        <div className="sampleCo">
          <Textarea mode="basic" {...textareaParam6}>기타 문의</Textarea>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">5. Textarea (label hidden)</div>
        <div className="sampleCo">
          <Textarea mode="basic" {...textareaParam1} labelHiddenYn="Y">기타 문의</Textarea>
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


export default TextareaEx
