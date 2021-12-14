import React from 'react';
import { action } from '@storybook/addon-actions';
import { GnbContainer } from 'containers'

export const GnbEx = () => {
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">메인 Gnb</div>
        <div className="sampleCo">
          <GnbContainer mode="main" />
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">서브 Gnb</div>
        <div className="sampleCo">
          <GnbContainer mode="sub" />
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">검색 Gnb</div>
        <div className="sampleCo">
          <GnbContainer mode="search" />
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
export default GnbEx
