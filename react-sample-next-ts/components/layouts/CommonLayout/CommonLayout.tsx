import React, { memo, FC, useEffect, useState, useCallback } from "react";
import { Header, Footer, Actionbar, CategoryBar } from "components";
import { CommonLayoutWrap } from "./CommonLayoutStyles";
import { useScroll } from "hooks";
import utils from "utils";

const IS_BROWSER = utils.IS_BROWSER

interface IProps {
  children?: any;
  headerMode: string;
  actionbarMode: string;
  genderType: string;
}

const CommonLayout: FC<IProps> = ({ children, headerMode, actionbarMode, genderType }) => {
  const { scrollDirection, scrollY, scrollBottom } = useScroll();
  const [btnHistoryShow, setBtnHistoryShow] = useState<boolean>(false);
  const [btnTopShow, setBtnTopShow] = useState<boolean>(false);
  const [isFixHeader, setIsFixHeader] = useState<boolean>(false);
  const [isScrollDir, setIsScrollDir] = useState<string>('');
  const [isScrollBottom, setIsScrollBottom] = useState<string>('');
  const [className, setClassName] = useState<string>('');

  useEffect(() => {
    const $windowtH = window.innerHeight;
    const $hedaerH = document.getElementById('header').getBoundingClientRect();
    const $footerH = document.getElementById('footer').getBoundingClientRect();
    
    //console.log('useScroll ===> ', scrollDirection, scrollY, scrollBottom);
    
    //탑버튼, 히스토리버튼 노출 
    if(scrollY > $windowtH*0.6){
      setBtnTopShow(true)
      setBtnHistoryShow(true)
    } else {
      setBtnTopShow(false)
      setBtnHistoryShow(false)
    }
    
    //헤더 fix 모드
    if($hedaerH.height < scrollY) {
      setIsFixHeader(true)
    } else if($hedaerH.height/5 > scrollY) {
      setIsFixHeader(false)
    }
    
    //스크롤 up, down 방향
    if(scrollDirection === 'scrollUp') {
      setIsScrollDir(scrollDirection)
    } else if(scrollDirection === 'scrollDown') {
      setIsScrollDir(scrollDirection)
    }

    //스크롤 맨하단
    if(scrollBottom-$footerH.height/3 < 0) {
      setIsScrollBottom('scrollBottom')
    } else {
      setIsScrollBottom('')
    }
    
    //className bind
    setClassName(utils.setClassNameBind([
      isFixHeader ? 'is-fix-header' : '', 
      isScrollDir ? 'is-' + isScrollDir : '',
      isScrollBottom ? 'is-' + isScrollBottom : '',
    ]))

  }, [scrollDirection, scrollY, scrollBottom, isFixHeader, isScrollDir, isScrollBottom])

  // EVENT HANDLER : BtnTop 클릭
  const onClickBtnTop = useCallback(() => {
    //console.log('onClickBtnTop')
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }, []);

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventNm, data, event) => {
    switch (eventNm) {
      case 'click_Actionbar_btnTop': onClickBtnTop(); break
    }
  }, [onClickBtnTop]);

  return (
    <CommonLayoutWrap className={className}>
      <Header mode={headerMode} />
      {/* <div className="scroll-track">
        {`scrollDirection => ${scrollDirection}`}<br />
        {`scrollY => ${scrollY}`}<br />
        {`scrollBottom => ${scrollBottom-100 < 0 ? true : false}`}
      </div> */}
      {children}
      <Actionbar 
        mode={actionbarMode} 
        gender={genderType} 
        btnHistoryShow={btnHistoryShow} 
        btnTopShow={btnTopShow} 
        onEvent={handleEvent}
      />
      <Footer />
    </CommonLayoutWrap>
  );
};

export default memo(CommonLayout);


