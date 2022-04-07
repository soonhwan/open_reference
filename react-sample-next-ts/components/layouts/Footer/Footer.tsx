import React, { memo, useState, FC, useCallback } from 'react';
import Link from 'next/link';
import { FooterWrap } from './FooterStyles';

interface IProps {
  mode?: string;
}

const Footer: FC<IProps> = ({ mode }) => {
  // EVENT HANDLER : onClickAppDown
  const onClickAppDown = useCallback((e) => {
    e.preventDefault();
  }, []);

  // ITEM RENDERER : getNavUtil
  const getNavUtil = useCallback(() => {
    return (
      <ul className="nav-util">
        <li><Link href="/MyPage/History"><a>로그인</a></Link></li>
        {/* <li><Link href="../Member/Logout"><a>로그아웃</a></Link></li> */}
        <li><Link href="../CustomerCenter"><a>고객센터</a></Link></li>
        <li><a href="www.wconcept.co.kr" target="_blank" rel="noopener">PC 버전</a></li>
        <li><a href="#" onClick={onClickAppDown}>APP다운</a></li>
      </ul>
    )
  }, [onClickAppDown]);

  // ITEM RENDERER : getAddress
  const getAddress = () => {
    return (
      <div className="address">
        <p>
          상호명 : ㈜더블유컨셉코리아 | 대표자 : 이은철 <br />
          서울특별시 강남구 테헤란로14길 16,5층 (역삼동 라인빌딩) <br />
          사업자등록번호 : 211-88-19183 <br />
          통신판매업신고: 제2009호 - 서울강남-00847호 <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2118819183&apv_perm_no=" target="_blank" rel="noreferrer" className="link">사업장정보확인</a> <br />
          개인정보보호책임자 : 허선희 | 호스팅서비스 : ㈜더블유컨셉코리아 <br />
          고객센터 : <a className="tel" href="tel:1566-5027">1566-5027</a> | 운영시간 : 평일 09:00~18:00 (점심시간 : 12:30~13:30) | <a className="tel" href="mailto:cs_help@wconcept.co.kr" target="_blank" rel="noreferrer">cs_help@wconcept.co.kr</a>
        </p>
        <ul className="nav-terms">
          <li><Link href="../Etc/Company"><a>회사소개</a></Link></li>
          <li><Link href="../CustomerAgreement"><a>이용약관</a></Link></li>
          <li><Link href="../CustomerPrivacy"><a className="bold">개인정보취급방침</a></Link></li>
          <li><Link href="../Etc/Marketting"><a>제휴문의</a></Link></li>
        </ul>
        <p>COPYRIGHT ⓒ 2020 ㈜더블유컨셉코리아 ALL RIGHTS RESERVED.</p>
      </div>
    )
  }

  return (
    <FooterWrap id="footer">
      <div className="inner-footer">
        {getNavUtil()}
        {getAddress()}
      </div>
    </FooterWrap>
  );
}

export default memo(Footer);