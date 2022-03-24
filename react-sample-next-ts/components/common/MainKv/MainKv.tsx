import React, { memo, useState, FC, useCallback } from "react";
import { MainKvWrap } from "./MainKvStyles";
import { A11y, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

interface IProps {
  data?: any;
}

const MainKv: FC<IProps> = ({ data }) => {
  
  // ITEM RENDERER : getListRender
  const getListRender = useCallback(() => {
    return data?.map((v: any, i: any) => {
      return (
        <SwiperSlide
          key={i}
        >
          <a href="#">
            <img src={v.img} alt="" />
            <div className="kv_text_box">
              <h4 className="kv_sub_title">{v.subTitle}</h4>
              <h3 className="kv_title">{v.title}</h3>
              <div className="kv_desc">{v.desc}</div>
            </div>
          </a>
        </SwiperSlide>
      );
    });
  }, [data]);

  return (
    <MainKvWrap className="section main_kv main_kv_men iPhoneXapp">
      <Swiper
        modules={[A11y, Pagination]}
        spaceBetween={0}
        loop={true}
        pagination={{ type: 'fraction' }}
        autoplay={{ delay: 5000,  disableOnInteraction: false }}
      >
        {getListRender()}
      </Swiper>
    </MainKvWrap>
  );
};

export default memo(MainKv);
