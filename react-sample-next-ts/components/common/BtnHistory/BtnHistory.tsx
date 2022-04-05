import React, { memo, useState, FC, useCallback } from 'react';
import { BtnHistoryWrap } from './BtnHistoryStyles';
import { Button } from "components";
import { BtnBnbHistory } from 'styles/svg' 
import Link from 'next/link';

interface IProps {
  mode?: any;
  onEvent?: any;
}

const BtnHistory: FC<IProps> = ({ mode }) => {
  return (
    <BtnHistoryWrap className="btn-history">
      <Link href="/MyPage/History" passHref><Button label="history" icon={<BtnBnbHistory />} /></Link>      
    </BtnHistoryWrap>
  );
}

export default memo(BtnHistory);