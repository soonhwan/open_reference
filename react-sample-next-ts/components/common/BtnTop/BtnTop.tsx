import React, { memo, useState, FC, useCallback } from 'react';
import { BtnTopWrap } from './BtnTopStyles';

interface IProps {
  mode?: any;
  onEvent?: any;
}

const BtnTop: FC<IProps> = ({ mode }) => {

  // EVENT HANDLER : scrollToTop
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }, []);

  return (
    <BtnTopWrap>
      <button type="button" name="button" className="btn_top" onClick={scrollToTop}>
        <img src="//static.wconcept.co.kr/mobile/images/common/btn_page_top_white.png" className="img-responsive" alt="" />
      </button>
    </BtnTopWrap>
  );
}

export default memo(BtnTop);