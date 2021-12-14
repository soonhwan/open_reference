import React from 'react';
import { action } from '@storybook/addon-actions';
import { TextareaGroup } from 'components';

export const TextareaGroupEx = () => {
  const textareaParam1 = {
    type: 'text',
    value: '',
    placeholder: '내용을 입력해주세요'
  }

  const textareaParam2 = {
    type: 'text',
    value: '',
    placeholder: '내용을 입력해주세요',
    infoType: 'info',
    infoMessage: '- 등록 전 보유하신 캐쉬 또는 쿠폰의 유효기간을 확인해주세요.<br />- unknown 캐쉬 번호는 unknown 앱에서 등록 가능합니다.'
  }

  const textareaParam3 = {
    type: 'text',
    value: '',
    placeholder: '내용을 입력해주세요',
    infoType: 'error',
    infoMessage: '에러 메시지'
  }

  const textareaParam4 = {
    type: 'text',
    value: '',
    placeholder: '내용을 입력해주세요',
    infoType: 'success',
    infoMessage: '완료 메시지'
  }

  const textareaParam5 = {
    type: 'text',
    value: '',
    placeholder: '댓글을 입력해주세요.\n개인정보가 포함되지 않도록 주의해 주세요'
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. Textarea Group (mode : basic)</div>
        <div className="sampleCo">
          <TextareaGroup mode="basic" inputParam={textareaParam1} maxLength="300">기타 문의</TextareaGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. Textarea Group (mode : basic) (text : 안내 메시지)</div>
        <div className="sampleCo">
          <TextareaGroup mode="basic" inputParam={textareaParam2} maxLength="300">기타 문의</TextareaGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Textarea Group (mode : basic) (text : 에러 메시지)</div>
        <div className="sampleCo">
          <TextareaGroup mode="basic" inputParam={textareaParam3} maxLength="300">기타 문의</TextareaGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Textarea Group (mode : basic) (text : 완료 메시지)</div>
        <div className="sampleCo">
          <TextareaGroup mode="basic" inputParam={textareaParam4} maxLength="300">기타 문의</TextareaGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">3. Textarea Group (mode : comment) 댓글</div>
        <div className="sampleCo">
          <TextareaGroup mode="comment" inputParam={textareaParam5} maxLength="600">댓글을 입력해주세요.</TextareaGroup>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Textarea Group (mode : replycomment) 대댓글</div>
        <div className="sampleCo">
          <TextareaGroup mode="replycomment" inputParam={textareaParam5} maxLength="600">댓글을 입력해주세요.</TextareaGroup>
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


export default TextareaGroupEx
