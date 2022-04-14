import React, { memo, useState, FC, useCallback, useEffect, useMemo } from 'react';
import { ProductListWrap } from './ProductListStyles';
import { Button, BtnHeart } from "components";
import { IconHeartOff } from 'styles/svg'
import utils from 'utils';

interface IProps {
  id: string;
  mode: string;
  className: string;
  data?: any;
  onEvent: any;
}

const ProductList: FC<IProps> = ({ id, data, mode, className, onEvent }) => {
  const [_data, setData] = useState(data);

  useEffect(() => {
    setData(data);
  }, [data]);

  const _className = useMemo(() => {
    return utils.classNameBind([
      'prodect-list', 
      mode ? mode : '',
      className ? className : '',
    ])
  }, [mode, className])

  // EVENT HANDLER : 찜 하기 클릭
  const onClicHeart = useCallback((value) => {
    console.log('onClicHeart => ', value);
  }, []);

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventNm, data, event) => {
    switch (eventNm) {
      case 'click_BtnHeart': onClicHeart(data); break
    }
  }, [onClicHeart]);

  // ITEM RENDERER : getListRender  
  const getListRender = useCallback(() => {
    return _data?.map((v: any, i: number) => {
      return (
        <li key={i} className="item">          
          <a href="#" className="area-click">
            <span className="thumb"><img src="/images/dummy/dummy06.jpg" alt="" /></span>
            {/* <div className="img">
              
              <span className="mask_funding">FUNDING</span>
              <span className="mask_pre_order">PRE-ORDER</span>
              <span className="rank"><em>{i+1}</em></span>
            </div> */}
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
              <div className="react">
                <div className="review_count">
                  <span><em>{v.reviewScore}</em>({v.reviewCnt})</span>
                </div>
                <div className="like_count">
                  <span>9,999+</span>
                </div>
              </div>
            </div>
          </a>
          <BtnHeart active={false} onEvent={handleEvent}/>
          <span className="rank"><em>1</em></span>
        </li>
      )
    })
  }, [_data, handleEvent])

  return (
    <ProductListWrap className={_className} id={id}>
      <ul className="list">
        {getListRender()}
      </ul>
    </ProductListWrap>
  );
}

export default memo(ProductList);