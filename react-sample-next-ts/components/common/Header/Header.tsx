import React, { memo, useState, FC, useCallback } from 'react';
import { HeaderWrap } from './HeaderStyles';

interface IProps {
  className?: any;
}

const Header: FC<IProps> = ({ className }) => {

  return (
    <HeaderWrap id="header">
      <button className="nav_opener"></button>
      <h1 className="symbol"><a href="/"><img src="//static.wconcept.co.kr/mobile/images/common/btn_gnb_logo_50.png" alt="W Concept" /></a></h1>
      <div className="sub-gnb">
        <button type="button" name="button" className="nav_search" title="search"><img src="//static.wconcept.co.kr/mobile/images/common/btn_gnb_search_50.png" alt="" /></button>
        <button type="button" name="button" className="sub-gnb_shoppingbag" title="장바구니 바로가기"><img src="//static.wconcept.co.kr/mobile/images/common/ico_gnb_bag_50.png" /><span>12</span></button>
      </div>
    </HeaderWrap>
  );
}

export default memo(Header);