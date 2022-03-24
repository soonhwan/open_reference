import React from 'react';
import Link from 'next/link';

import { GnbWrap } from './styles';

const Gnb = () => {

  return (
    <GnbWrap>
      <li><Link href="/about">회사소개</Link></li>      
      <li><Link href="/">코딩맵 &amp; 컴포넌트</Link></li>
    </GnbWrap>
  )
}

export default Gnb;