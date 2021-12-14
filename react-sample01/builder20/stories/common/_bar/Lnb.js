import React from 'react';
import { action } from '@storybook/addon-actions';
import { Lnb } from 'components';

export const LnbEx = () => {
  const lnbTitle1 = '오퍼링 타이틀';
  const lnbTitle2 = '좋아요';
  const lnbUtil2 = [
    { text: '편집', value: 'otp-1' }
  ]

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">2depth 메뉴 타이틀</div>
        <div className="sampleCo">
          <Lnb lnbTitle={lnbTitle1}></Lnb>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">2depth 메뉴 타이틀 + 편집</div>
        <div className="sampleCo">
          <Lnb lnbTitle={lnbTitle2} lnbUtil={lnbUtil2}></Lnb>
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

export default LnbEx
