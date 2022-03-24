import React, { memo, useState, FC, useCallback, useEffect } from 'react';
import { TopSellerCategoryDepth2Wrap } from './TopSellerCategoryDepth2Styles';
import { A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CLICK_CATEGORY = 'click_TopSellerCategoryDepth2';

interface IProps {
  data?: any;
  onEvent?: any;
  selectedItemValue?: any;
}

const TopSellerCategoryDepth2: FC<IProps> = ({ data, selectedItemValue, onEvent }) => {
  const [_selectedItemValue, setSelectedItemValue] = useState(selectedItemValue);

  useEffect(() => {
    setSelectedItemValue(selectedItemValue);
    console.log('useEffect TopSellerCategoryDepth2 ==> ', selectedItemValue);
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
              ><button>{v.categoryName}</button></SwiperSlide>
    })
  }, [data, _selectedItemValue])

  return (
    <TopSellerCategoryDepth2Wrap className="top_seller-category_depth2">
      <div className="topseller_swiper">
        <Swiper
          modules={[FreeMode, A11y]}
          spaceBetween={0}
          slidesPerView="auto"
          freeMode={true}
          className="round_tab swiper_align"
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
      </div>
    </TopSellerCategoryDepth2Wrap>
  );
}

export default memo(TopSellerCategoryDepth2);