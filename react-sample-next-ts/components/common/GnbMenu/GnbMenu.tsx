import React, { memo, useState, FC, useCallback } from 'react';
import { GnbMenuWrap } from './GnbMenuStyles';
import { A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const list = [
  { text: 'ORIGINAL', link: null, dot: true },
  { text: 'BEST', link: null, active: true },
  { text: 'SALE', link: null },
  { text: 'APPAREL', link: null },
  { text: 'BAG', link: null },
  { text: 'SHOWINDOW', link: null },
];

interface IProps {
  className?: any;
}

const GnbMenu: FC<IProps> = ({ className }) => {

  // ITEM RENDERER : getListRender  
  const getListRender = useCallback(() => {
    return list?.map((v: any, i: any) => {
      return <SwiperSlide key={i} className={v.active ? 'active' : ''}><a href={v.link || '#'} className={v.dot ? 'dot' : ''}>{v.text}</a></SwiperSlide>
    })
  }, [list])

  return (
    <GnbMenuWrap>
      <Swiper
        modules={[FreeMode, A11y]}
        spaceBetween={0}
        slidesPerView="auto"
        freeMode={true}
        className="gnb_menu"
      >
        {getListRender()}
      </Swiper>
    </GnbMenuWrap>
  );
}

export default memo(GnbMenu);