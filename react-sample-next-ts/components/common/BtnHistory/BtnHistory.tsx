import React, { memo, useState, FC, useCallback } from 'react';
import Link from 'next/link';
import { BtnHistoryWrap } from './BtnHistoryStyles';
import { Button } from "components";
import { BtnBnbHistory } from 'styles/svg' 

interface IProps {
  mode?: string;
}

const BtnHistory: FC<IProps> = ({ mode }) => {
  return (
    <BtnHistoryWrap className="btn-history">
      <Link href="/MyPage/History" passHref><Button label="history" icon={<BtnBnbHistory />} /></Link>      
    </BtnHistoryWrap>
  );
}

export default memo(BtnHistory);