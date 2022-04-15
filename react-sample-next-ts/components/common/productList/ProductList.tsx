import React, { memo, useState, FC, useCallback, useEffect, useMemo } from 'react';
import { ProductListWrap } from './ProductListStyles';
import { Label, BtnLike, Thumbnail } from "components";
import { IconHeart, IconStar } from 'styles/svg'
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
    //console.log('onClicHeart => ', value);
  }, []);

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventNm, data, event) => {
    switch (eventNm) {
      case 'click_BtnLike': onClicHeart(data); break
    }
  }, [onClicHeart]);

  // ITEM RENDERER : getListRender  
  const getListRender = useCallback(() => {
    return _data?.map((v: any, i: number) => {
      return (
        <li key={i} className="pl-item">          
          <a href="#" className="pli-info">
            <Thumbnail mode={mode} src="/images/dummy/dummy06.jpg" alt="&nbsp;"  />
            <span className="info">
              <span className="title">{v.brandNameEn}</span>
              <span className="front">{v.itemNameFront}</span>
              <span className="detail">{v.itemName}</span>
              <span className="price">
                <strong>{utils.setComma(v.finalPrice)}</strong>
                <span>{utils.setComma(v.salePrice)}</span>
                <em>{v.finalDiscountRate}%</em>
              </span>
              <span className="stats">
                <span className="review"><IconStar /><em>4.8</em><span className="cnt">(9,999+)</span></span>
                <span className="like"><IconHeart /><span className="cnt">9,999+</span></span>
              </span>
              <span className="tag">
                <Label mode="tag" color="black">펀딩상품</Label>
                <Label mode="tag" color="orange">클리어런스</Label>
              </span>
              <span className="labels">
                <Label>오늘출발</Label>
                <Label>쿠폰</Label>
                <Label mode="tag" color="gray">SOLD OUT</Label>
              </span>
            </span>
          </a>
          <BtnLike active={false} onEvent={handleEvent}/>
          <span className="rank"><em>{i+1}</em></span>
        </li>
      )
    })
  }, [_data, handleEvent, mode])

  return (
    <ProductListWrap className={_className} id={id}>
      <ul className="list">
        {getListRender()}
      </ul>
    </ProductListWrap>
  );
}

export default memo(ProductList);