import React, { memo, useState, FC, useCallback, useEffect } from 'react';
import { TopSellerCategoryWrap } from './TopSellerCategoryStyles';
import { A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CLICK_CATEGORY = 'click_TopSellerCategory';

interface IProps {
  data?: any;
  onEvent?: any;
  selectedItemValue?: any;
}

const TopSellerCategory: FC<IProps> = ({ data, selectedItemValue, onEvent }) => {
  const [_selectedItemValue, setSelectedItemValue] = useState(selectedItemValue);

  useEffect(() => {
    setSelectedItemValue(selectedItemValue);
    //console.log('useEffect selectedItemValue ==> ', selectedItemValue);
  }, [selectedItemValue]);

  // EVENT HANDLER : onClickSwiper
  const onClickSwiper = useCallback((swiper) => {
    const v = swiper.clickedSlide.getAttribute('data-value');
    //console.log('onClickSwiper => ', v);
    onEvent(CLICK_CATEGORY, v);
  }, [onEvent]);
  
  // ITEM RENDERER : getListRender  
  const getListRender = useCallback(() => {
    return data?.map((v: any, i: any) => {
      return <SwiperSlide 
                key={i} 
                className={v.value === _selectedItemValue ? 'active' : ''}
                data-value={v.value}
              ><button>{v.mediumName}</button></SwiperSlide>
    })
  }, [data, _selectedItemValue])

  return (
    <TopSellerCategoryWrap className="top_seller-category">
      <Swiper
        modules={[FreeMode, A11y]}
        spaceBetween={0}
        slidesPerView="auto"
        freeMode={true}
        className="top_seller-category_depth1 round_tab swiper_align"
        onInit={(swiper) => {
          swiper.slideTo(data.findIndex((v: any) => v['value'] === selectedItemValue));
        }}
        onClick={(swiper) => {
          onClickSwiper(swiper);     
          //console.log('swiper.activeIndex => ', swiper.clickedIndex);
          swiper.slideTo(swiper.clickedIndex);
        }}
      >
        {getListRender()}
      </Swiper>
    </TopSellerCategoryWrap>
  );
}

export default memo(TopSellerCategory);