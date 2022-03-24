import React, { memo, useState, FC, useCallback } from "react";
import { MainPreOpenWrap } from "./MainPreOpenStyles";
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface IProps {
  data?: any;
}

const MainPreOpen: FC<IProps> = ({ data }) => {
  // ITEM RENDERER : getListRender
  const getListRender = useCallback(() => {
    return data?.map((v: any, i: any) => {
      return (
        <SwiperSlide key={i}>
          <a href={v.url}>
            <div className="img">
              <img src={v.img} alt={v.brand} />
            </div>
            <div className="text">
              <h3>{v.brand}</h3>
              <p>{v.title}</p>
            </div>
          </a>
        </SwiperSlide>
      );
    });
  }, [data]);

  return (
    <MainPreOpenWrap className="section special_brand_section">
      <h3 className="section_tit">PRE OPEN</h3>
      <div className="section_content">
        <Swiper
          modules={[A11y]}
          slidesPerView="auto"
          className="special_brand_list"
        >
          {getListRender()}
        </Swiper>
      </div>
    </MainPreOpenWrap>
  );
};

export default memo(MainPreOpen);
