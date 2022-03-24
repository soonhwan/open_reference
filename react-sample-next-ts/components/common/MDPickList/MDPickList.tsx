import Image from "next/image";
import React, { memo, useState, FC, useCallback, useEffect } from "react";
import { MDPickListWrap } from "./MDPickListStyles";
import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

const CHANGE_MDPICKLIST = "change_MDPickList";

interface IProps {
  data?: any;
  onEvent?: any;
}

const MDPickList: FC<IProps> = ({ data, onEvent }) => {

  // ITEM RENDERER : getItemListLi
  const getItemListLi = (v: any) => {
    return (
      <li>
        <a href={v.href || '#'}>
          <div className="img">
            <img src={v.img} alt={v.title} />
            {v.funding && <span className="mask_funding">FUNDING</span>}
            {v.preOrder && <span className="mask_pre_order">PRE-ORDER</span>}
          </div>
          <div className="text">
            <p className="title">{v.title}</p>
            <p className="price">
              <strong>{v.price}</strong>
              {v.dc && <em>{v.dc}</em>}
            </p>
          </div>
        </a>
      </li>
    )
  };

  // ITEM RENDERER : getItemList
  const getItemList = (value: any, itemList: any) => {
    return itemList?.map((v: any, i: any) => {
      console.log('getItemList ==> ', value, i);
      if(i >= 5 && i % 5 === 0){
        console.log('분기!')
      }
      return (
        <SwiperSlide key={i} data-value={value}>
          <ul className="thumbnail_list slide_item2">
            {getItemListLi(v)}
          </ul>
        </SwiperSlide>
      )
    });
  };

  
  // ITEM RENDERER : getListRender
  const getListRender = useCallback(() => {
    return data?.map((v: any, i: any) => {
      //console.log('getListRender ==> ', v.value, i);
      return getItemList(v.value, v.itemList);
    });
  }, [data]);

  return (
    <MDPickListWrap className="md_pick_product_swiper_wrap swiper_wrap">
      <Swiper
        modules={[A11y, Pagination]}
        loop={true}
        pagination={{ dynamicBullets: true }}
        className="active"
        id="md_swiper_container_all"
      >
        {getListRender()}
{/*
        <SwiperSlide>
          <ul className="thumbnail_list slide_item2">
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail21.jpg" alt="" />
                  <span className="mask_funding">FUNDING</span>
                </div>
                <div className="text">
                  <p className="title">faff</p>
                  <p className="price">
                    <strong>74,000</strong>
                    <em>5%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail22.jpg" alt="" />
                  <span className="mask_pre_order">PRE-ORDER</span>
                </div>
                <div className="text">
                  <p className="title">BETTERS&</p>
                  <p className="price">
                    <strong>33,915</strong>
                    <em>20%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail23.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail24.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail18.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail17.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul className="thumbnail_list slide_item2">
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail20.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">faff</p>
                  <p className="price">
                    <strong>74,000</strong>
                    <em>5%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail19.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">BETTERS&</p>
                  <p className="price">
                    <strong>33,915</strong>
                    <em>20%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail18.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail17.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail18.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail17.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul className="thumbnail_list slide_item2">
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail16.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">faff</p>
                  <p className="price">
                    <strong>74,000</strong>
                    <em>5%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail15.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">BETTERS&</p>
                  <p className="price">
                    <strong>33,915</strong>
                    <em>20%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail14.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail13.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail18.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail17.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul className="thumbnail_list slide_item2">
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail12.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">faff</p>
                  <p className="price">
                    <strong>74,000</strong>
                    <em>5%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail11.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">BETTERS&</p>
                  <p className="price">
                    <strong>33,915</strong>
                    <em>20%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail10.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail09.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail18.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail17.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul className="thumbnail_list slide_item2">
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail21.jpg" alt="" />
                  <span className="mask_funding">FUNDING</span>
                </div>
                <div className="text">
                  <p className="title">faff</p>
                  <p className="price">
                    <strong>74,000</strong>
                    <em>5%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail22.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">BETTERS&</p>
                  <p className="price">
                    <strong>33,915</strong>
                    <em>20%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail23.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail24.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail18.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail17.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul className="thumbnail_list slide_item2">
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail20.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">faff</p>
                  <p className="price">
                    <strong>74,000</strong>
                    <em>5%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail19.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">BETTERS&</p>
                  <p className="price">
                    <strong>33,915</strong>
                    <em>20%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail18.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail17.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail18.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail17.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul className="thumbnail_list slide_item2">
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail21.jpg" alt="" />
                  <span className="mask_funding">FUNDING</span>
                </div>
                <div className="text">
                  <p className="title">faff</p>
                  <p className="price">
                    <strong>74,000</strong>
                    <em>5%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail22.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">BETTERS&</p>
                  <p className="price">
                    <strong>33,915</strong>
                    <em>20%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail23.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail24.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail18.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail17.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul className="thumbnail_list slide_item2">
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail20.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">faff</p>
                  <p className="price">
                    <strong>74,000</strong>
                    <em>5%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail19.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">BETTERS&</p>
                  <p className="price">
                    <strong>33,915</strong>
                    <em>20%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail18.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail17.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail18.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">inusway</p>
                  <p className="price">
                    <strong>75,050</strong>
                    <em>15%</em>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">
                  <img src="/images/thumb/thumbnail17.jpg" alt="" />
                </div>
                <div className="text">
                  <p className="title">MUTEMUSE</p>
                  <p className="price">
                    <strong>248,000</strong>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </SwiperSlide>
*/}
      </Swiper>
    </MDPickListWrap>
  );
};

export default memo(MDPickList);
