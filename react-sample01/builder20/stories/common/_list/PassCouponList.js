import React from 'react';
import { action } from '@storybook/addon-actions';
import { PassCouponList } from 'components';

export const PassCouponListEx = () => {
  const option1 = [
    { text: '쿠폰명', useNm: '', useYn: '' },
    { text: '쿠폰명', useNm: '사용완료', useYn: 'Y' },
  ]

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. 북패스 쿠폰 리스트 (mode : basic)</div>
        <PassCouponList mode="basic" optionLists={option1} />
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


export default PassCouponListEx