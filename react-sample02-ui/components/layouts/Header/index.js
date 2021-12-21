import React from 'react';
import Link from 'next/link';
import { HeaderWrap } from './styles';
import { Gnb, Util } from 'components';

const Header = () => {
  return (
    <HeaderWrap className="header-wrap">
      <h1><Link href="/main">LOGO(main)</Link></h1>
      <Gnb />
      <Util />
    </HeaderWrap>
  )
}

export default Header;