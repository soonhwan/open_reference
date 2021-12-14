import React from 'react';
import { action } from '@storybook/addon-actions';
import { BannerBox } from 'components';

export const BannerBoxEx = () => {
  const title1 = '3시간 마다 1회씩 무료';
  const url1 = '/static/images/temp/banner_720x250_02.png';
  const color1 = '9268c5';
  const title2 = '금주의 추천작, 매일 캐쉬백 30%';
  const url2 = '/static/images/temp/banner_1072x160_01.png';
  const color2 = 'd0e3d9';
  const title3 = '작가의 꿈을 펼처라!';
  const url3 = '/static/images/temp/banner_720x250_01.png';
  const color3 = '98d1d3';

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. bType (mode: bType)</div>
        <BannerBox mode="bType" title={title1} bannerUrl={url1} bannerColor={color1} prevEvent={prevEvent} onEvent={action('1.bType')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - bTypeLanding (mode: bTypeLanding)</div>
        <BannerBox mode="bTypeLanding" title={title3} bannerUrl={url3} bannerColor={color3} prevEvent={prevEvent} onEvent={action('1.bTypeLanding')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. cType</div>
        <BannerBox mode="cType" title={title2} bannerUrl={url2} bannerColor={color2} prevEvent={prevEvent} onEvent={action('2.cType')} />
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
export default BannerBoxEx
