import React, { memo, FC, useEffect, useState, useCallback } from "react";
import { Header, Footer, Actionbar, BtnTop, NavSkip, Button } from "components";
import { MainLayoutWrap } from "./MainLayoutStyles";
import { useScroll } from "hooks";

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

  const onClickBtn = useCallback((e: any) => {
    //e.preventDefault();
    console.log('onClickBtn', e);
  }, []);

  return (
    <MainLayoutWrap>
    {/* <MainLayoutWrap className={commonShow ? "common-hide" : ""}> */}
      <NavSkip />     
      <Header />
      {children}
      <Actionbar />
      <Footer id="#footer" />
      {/* {btnTopShow && <BtnTop />} */}
    </MainLayoutWrap>
  );
};

export default memo(MainLayout);


