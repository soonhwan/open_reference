import React from 'react';
import Link from 'next/link';
import { FooterWrap } from './styles';

const Footer = () => {
  return (
    <FooterWrap>
      <h2><Link href="/main"><a>NEXT PROJECT</a></Link></h2>
      <p>ⓒ 2020 PUBLISHING BY SUNG</p>
    </FooterWrap>
  )
}

export default Footer;