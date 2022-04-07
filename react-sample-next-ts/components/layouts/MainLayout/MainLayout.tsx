import React, { memo, FC, useEffect, useState, useCallback } from "react";
import { Header, Footer, Actionbar, GnbMenu } from "components";
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
    <MainLayoutWrap>
      <div className={commonShow ? "common-hide" : ""}>
        <Header mode="main" />
        <GnbMenu />
        {children}
        <Actionbar mode="main" gender="men" />
        <Footer />
      </div>
    </MainLayoutWrap>
  );
};

export default memo(MainLayout);


