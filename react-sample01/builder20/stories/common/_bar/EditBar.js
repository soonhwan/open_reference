import React from 'react';
import { action } from '@storybook/addon-actions';
import { EditBar } from 'components';

export const EditBarEx = () => {
  const optionNum1 = 0;
  const optionNum2 = 10;

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 기본형</div>
        <EditBar mode="basic" optionNum={optionNum1} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 기본형 + 기간만료 선택</div>
        <EditBar mode="expiration" optionNum={optionNum2} onEvent={action('2.expiration')} />
      </div>
      <style>{`
          .storybook-container { background: #ffffff !important; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
      `}</style>
    </div>
  );
}
export default EditBarEx
