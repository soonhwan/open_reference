import React from 'react';
import { action } from '@storybook/addon-actions';
import { RefundInfoBox } from 'components';

export const RefundInfoBoxEx = () => {
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 보유/환급캐쉬 정보</div>
        <RefundInfoBox mode="basic" />
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
export default RefundInfoBoxEx
