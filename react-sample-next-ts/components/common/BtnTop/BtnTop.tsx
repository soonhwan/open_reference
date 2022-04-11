import React, { memo, useState, FC, useCallback } from 'react';
import { BtnTopWrap } from './BtnTopStyles';
import { Button } from "components";
import { BtnBnbTop } from 'styles/svg' 

interface IProps {
  show?: boolean;
}

const BtnTop: FC<IProps> = ({ show }) => {

  // EVENT HANDLER : scrollToTop
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }, []);

  return (
    <BtnTopWrap className={'btn-top' + (show ? ' is-show' : '')}>
      <Button label="페이지 맨위로" icon={<BtnBnbTop />} onClick={scrollToTop} />
    </BtnTopWrap>
  );
}

export default memo(BtnTop);