import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Gnb from './Gnb';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '@src/actions/types';     

const Header = () => {
  const { isLogin, isSection } = useSelector(state => state.common);
  const dispatch = useDispatch();
  
  const handleLogOut = useCallback((e) => {
    e.preventDefault();
    dispatch({ type: LOGOUT_SUCCESS });
  }, []);
  const handleLogIn = useCallback((e) => {
    e.preventDefault();
    dispatch({ type: LOGIN_SUCCESS });
  }, []);
  
  return (
    <header id="header-sec">
      <div className="inner">
        <h1><Link href="/main"><a>헤더</a></Link></h1>
        <Gnb isSection={isSection} />
        <ul className="utilmenu">
          <li className={isSection === "autoAuction" ? "txt on" : "txt"}><Link href="/autoAuction/auctionHome"><a>오토옥션</a></Link></li>
          <li className={isSection === "pricingSystem" ? "txt on" : "txt"}><Link href="/pricingSystem/pricing01"><a>프라이싱시스템</a></Link></li>{/* 딜러 회원일 경우만 */}
          {
            isLogin === true ?
            <>
              <li className="ico logout"><a href="#" onClick={handleLogOut}>로그아웃</a></li>
              <li className="ico mypage"><Link href="/mypage"><a>마이페이지</a></Link></li> 
            </>
            :
            <>
              <li className="ico login"><a href="#" onClick={handleLogIn}>로그인</a></li>
              <li className="ico signup"><Link href="/signup"><a>회원가입</a></Link></li>
            </>
          }
          <li className="ico menu"><a href="#">메뉴</a></li>
        </ul>
      </div>
    </header>
  )
}

export default  Header