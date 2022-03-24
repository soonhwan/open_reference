import React, { memo, FC, useEffect, useState, useCallback } from "react";
import { Header, Footer, BottomNav, BtnTop } from "components";
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

  return (
    <MainLayoutWrap className={commonShow ? "common-hide" : ""}>
      <Header />
      {children}
      <Footer />
      <BottomNav />
      {btnTopShow && <BtnTop />}
    </MainLayoutWrap>
  );
};

export default memo(MainLayout);
