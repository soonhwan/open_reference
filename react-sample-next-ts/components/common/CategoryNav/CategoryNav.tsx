import React, { memo, useState, FC, useCallback, useMemo, useEffect } from 'react';
import { CategoryNavWrap } from './CategoryNavStyles';
import { A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import utils from "utils";

const CLICK_CATEGORYNAV = "click_CategoryNav";
const CLICK_CATEGORYNAV_BTN = "click_CategoryNav_btn";

interface IProps {
  mode: string;
  data?: any;
  selectedValue: string;
  onEvent: any;
}

const CategoryNav: FC<IProps> = ({ mode, data, selectedValue, onEvent }) => {
  const [_selectedValue, setselectedValue] = useState(selectedValue);

  useEffect(() => {
    setselectedValue(selectedValue);
    console.log("useEffect CategoryTab ==> ", selectedValue);
  }, [selectedValue]);

  const _className = useMemo(() => {
    return utils.setClassNameBind([
      'category-nav', 
      mode ? mode + '-st': '',
    ])
  }, [mode])

  // EVENT HANDLER : onClickSwiper
  const onClickSwiper = useCallback((swiper) => {
    if (swiper.clickedSlide !== undefined) {
      const v = swiper.clickedSlide.getAttribute("data-value");
      //console.log('onClickSwiper => ', v);
      onEvent(CLICK_CATEGORYNAV, v);
    }
  }, [onEvent]);

  // ITEM RENDERER : getListRender  
  const getListRender = useCallback(() => {
    return data?.map((v: any, i: number) => {
      const _className = utils.setClassNameBind([
        v.value === _selectedValue ? 'active' : '',
        v.dot ? 'dot' : '',
      ])
      
      return (
        <SwiperSlide 
          key={i} 
          className={_className}
          data-value={v.value}
        >
          <button className="btn">{v.text}</button>
        </SwiperSlide>
      )
    })
  }, [data, _selectedValue])

  return (
    <CategoryNavWrap className={_className}>
      <Swiper
        modules={[FreeMode, A11y]}
        spaceBetween={0}
        slidesPerView="auto"
        freeMode={true}
        className="list"
        onInit={(swiper) => {
          swiper.slideTo(
            data.findIndex((v: any) => v['value'] === selectedValue)
          );
        }}
        onClick={(swiper) => {
          onClickSwiper(swiper);
          //console.log('swiper.activeIndex => ', swiper.clickedIndex);
          swiper.slideTo(swiper.clickedIndex);
        }}
      >
        {getListRender()}
      </Swiper>
    </CategoryNavWrap>
  );
}

export default memo(CategoryNav);