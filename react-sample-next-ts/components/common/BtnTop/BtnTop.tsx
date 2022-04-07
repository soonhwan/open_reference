import React, { memo, useState, FC, useCallback } from 'react';
import { BtnTopWrap } from './BtnTopStyles';
import { Button } from "components";
import { BtnBnbTop } from 'styles/svg' 

interface IProps {
  mode?: string;
}

const BtnTop: FC<IProps> = ({ mode }) => {

  // EVENT HANDLER : scrollToTop
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }, []);

  return (
    <BtnTopWrap className="btn-top">
      <Button label="페이지 맨위로" icon={<BtnBnbTop />} onClick={scrollToTop} />
    </BtnTopWrap>
  );
}

export default memo(BtnTop);