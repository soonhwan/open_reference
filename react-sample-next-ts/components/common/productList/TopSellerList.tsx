import React, { memo, useState, FC, useCallback, useEffect } from 'react';
import { TopSellerListWrap } from './TopSellerListStyles';

interface IProps {
  data?: any;
}

const TopSellerList: FC<IProps> = ({ data }) => {
  const list = data;

  // ITEM RENDERER : getListRender  
  const getListRender = useCallback(() => {
    return list?.map((v: any, i: any) => {
      return (
        <li key={i}>
          <button type="button" name="button" className="heart"></button>
          <a href="#">
            <div className="img">
              <img src="//image.wconcept.co.kr/productimg/image/img1/44/301013644.jpg?RS=300" alt="" />
              {/* <span className="mask_funding">FUNDING</span>
              <span className="mask_pre_order">PRE-ORDER</span> */}
              <span className="rank"><em>{i+1}</em></span>
            </div>
            <div className="text">
              <p className="title">{v.brandNameEn}</p>
              <p className="front">{v.itemNameFront}</p>
              <p className="detail">{v.itemName}</p>
              <p className="price">
                <strong>{v.finalPrice}</strong>
                <span>{v.salePrice}</span>
                <em>{v.finalDiscountRate}%</em>
              </p>
              <div className="labels">
                <span className="reservation">예약</span>
                <span className="coupon">쿠폰</span>
                <span className="exclusive">단독</span>
                <span className="limit">한정</span>
                <span className="lb-set">세트</span>
              </div>
              <div className="review_box">
                <div className="graph">
                    <span className="inner" style={{'width':(v.reviewScore/5*100)+'%'}}>97%</span>
                </div>
                <div className="review_count">{v.reviewCnt}</div>
              </div>
              {/* <div className="react">
                <div className="review_count">
                  <span><em>{v.reviewScore}</em>({v.reviewCnt})</span>
                </div>
                <div className="like_count">
                  <span>9,999+</span>
                </div>
              </div> */}
            </div>
          </a>
        </li>
      )
    })
  }, [list])

  

  return (
    <TopSellerListWrap className="top_seller_list">
      <div className="list">
        <ul id="topSellerList" className="thumbnail_list list2">
          {getListRender()}
        </ul>
      </div>
    </TopSellerListWrap>
  );
}

export default memo(TopSellerList);