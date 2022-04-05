import React, { memo, useState, FC, useCallback } from 'react';
import { FooterWrap } from './FooterStyles';

interface IProps {
  className?: any;
}

const Footer: FC<IProps> = ({ className }) => {

  return (
    <FooterWrap id="footer">
      <ul className="footer_btn">
          <li><a href="../Member/Login">로그인</a></li>
          {/* <li><a href="../Member/Logout">로그아웃</a></li> */}
          <li><a href="../CustomerCenter">고객센터</a></li>
          <li><a href="www.wconcept.co.kr" target="_blank">PC 버전</a></li>
          <li><a href="#">APP다운</a></li>
      </ul>
      <div className="address">
          <p>상호명 : ㈜더블유컨셉코리아 | 대표자 : 이은철<br />
              서울특별시 강남구 테헤란로14길 16,5층 (역삼동 라인빌딩)<br />
              사업자등록번호 : 211-88-19183<br />
              통신판매업신고: 제2009호 - 서울강남-0847호 <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2118819183&apv_perm_no=" target="_blank" rel="noreferrer" className="link">사업장정보확인</a><br />
              개인정보보호책임자 : 허선희 | 호스팅서비스 : ㈜더블유컨셉코리아<br />
              고객센터 : <a className="tel" href="tel:1566-5027">1566-5027 (평일 09:00~18:00)</a>   <a className="tel" href="mailto:cs_help@wconcept.co.kr" target="_blank" rel="noreferrer">cs_help@wconcept.co.kr</a>
          </p>
          <ul className="btn_wrap">
              <li><a href="../Etc/Company">회사소개</a></li>
              <li><a href="../CustomerAgreement">이용약관</a></li>
              <li><a href="../CustomerPrivacy" className="bold">개인정보취급방침</a></li>
              <li><a href="../Etc/Marketting">제휴문의</a></li>
          </ul>
          <p>COPYRIGHT ⓒ 2020 ㈜더블유컨셉코리아 ALL RIGHTS RESERVED.</p>
      </div>
    </FooterWrap>
  );
}

export default memo(Footer);