import React from 'react';
import { action } from '@storybook/addon-actions';
import { DimPopup } from 'components';

export const DimPopupEx = () => {
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">DimPopup</div>
        <div className="sampleCo">
          <DimPopup></DimPopup>
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


export default DimPopupEx
