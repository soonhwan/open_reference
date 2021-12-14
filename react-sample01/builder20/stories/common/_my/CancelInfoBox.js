import React from 'react';
import { action } from '@storybook/addon-actions';
import { CancelInfoBox } from 'components';

export const CancelInfoBoxEx = () => {
  const accountInfo1 = {
    sns: 'facebook', /* facebook, google, naver, apple, tworld, mdn */
    name: 'abcd@gmail.com'
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 해지 정보</div>
        <CancelInfoBox mode="basic" accountInfo={accountInfo1} />
      </div>
      <style>{`
          .storybook-container { background: #ffffff !important; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
            margin-bottom: 10px;
          }
      `}</style>
    </div>
  );
}
export default CancelInfoBoxEx
