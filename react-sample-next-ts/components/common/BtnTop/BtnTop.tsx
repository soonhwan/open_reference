import React, { memo, useState, FC, useCallback } from 'react';
import { BtnTopWrap } from './BtnTopStyles';
import { Button } from "components";
import { BtnBnbTop } from 'styles/svg' 

const CLICK_BTNTOP = "click_BtnTop";

interface IProps {
  show?: boolean;
  onEvent?: any;
}

const BtnTop: FC<IProps> = ({ show = false, onEvent }) => {

  // EVENT HANDLER : scrollToTop
  const scrollToTop = useCallback(() => {
    onEvent(CLICK_BTNTOP)
  }, [onEvent]);

  return (
    <BtnTopWrap className={'btn-top' + (show ? ' is-show' : '')}>
      <Button label="페이지 맨위로" icon={<BtnBnbTop />} onClick={scrollToTop} />
    </BtnTopWrap>
  );
}

export default memo(BtnTop);