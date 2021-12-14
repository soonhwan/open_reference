import React from 'react';
import { action } from '@storybook/addon-actions';
import { LnbSub } from 'components';

export const LnbSubEx = () => {
  const title = '서브 텍스트 타이틀';
  const summary = '서브 텍스트를 노출합니다. 두줄까지 써보세요';

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 서브 타이틀 + 설명</div>
        <LnbSub title={title} summary={summary} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 설명</div>
        <LnbSub summary={summary} />
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

export default LnbSubEx
