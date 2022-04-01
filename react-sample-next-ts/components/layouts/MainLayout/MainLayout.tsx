import React, { memo, FC, useEffect, useState, useCallback } from "react";
import { Header, Footer, BottomNav, BtnTop, NavSkip, Icon, Button } from "components";
import { MainLayoutWrap } from "./MainLayoutStyles";
import { useScroll } from "hooks";
import Link from 'next/link';

/* import IconSearch from "styles/svg/ico_search.svg";
import IconLogo50 from "styles/svg/ico_gnb_logo_W_50.svg"; */

import { IconSearch, IconLogo50 } from 'styles/icons'

interface IProps {
  children?: any;
}

const MainLayout: FC<IProps> = ({ children }) => {
  const { scrollDirection, scrollY, scrollBottom } = useScroll();
  const [commonShow, setCommonShow] = useState<boolean>(false);
  const [btnTopShow, setBtnTopShow] = useState<boolean>(false);

  useEffect(() => {
    //console.log('useScroll ===> ', scrollDirection, scrollY, scrollBottom);
    if(scrollDirection === 'up'){
      if(scrollBottom === true) {
        setCommonShow(false)
      } else {
        setCommonShow(true)
      }
    } else {
      setCommonShow(false)
    }

    if(scrollY > 300){
      setBtnTopShow(true)
    } else {
      setBtnTopShow(false)
    }

  }, [scrollDirection, scrollY, scrollBottom])

  const onClickBtn = (e: any) => {
    console.log('onClickBtn', e.terget);
  }

  return (
    <MainLayoutWrap className={commonShow ? "common-hide" : ""}>
      <NavSkip />  

      
      <Button href="/" className="btn-st1" label="로고" onClick={onClickBtn}><IconLogo50 /></Button>
      <Button className="btn-st1" label="검색하기" onClick={onClickBtn}><IconSearch /></Button>

      {/* <Button className="btn-st1" label="검색하기" onClick={onClickBtn}><Icon type="search"></Icon></Button>
      <Button className="btn-st2" onClick={onClickBtn}><Icon type="ddderrr">검색하기</Icon></Button> 
      <Button href="#" className="btn-st1" onClick={onClickBtn}><Icon type="search">검색하기</Icon></Button>
      <Button href="/" target="_blank" rel="noopener noreferrer" className="btn-st1" onClick={onClickBtn}><Icon type="search">검색하기</Icon></Button>
      <Button href="#footer" className="btn-st2" onClick={onClickBtn}><Icon type="search">검색하기</Icon></Button>
      
      <br />

      <Link href="/best" passHref><Button>c best</Button></Link> 
      <Link href="/main" passHref><Button>c main</Button></Link>

      <br />
      <Link href="/best"><a>best</a></Link> 
      <Link href="/main"><a>main</a></Link> */}
      
      
      <Header />
      {children}
      <Footer id="#footer" />
      <BottomNav />
      {btnTopShow && <BtnTop />}
    </MainLayoutWrap>
  );
};

export default memo(MainLayout);
