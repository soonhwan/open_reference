import React, { memo, useState, FC, useCallback, useMemo, useEffect } from 'react';
import { CategoryBarWrap } from './CategoryBarStyles';
import { A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import utils from "utils";

const CLICK_CATEGORYBAR = "click_CategoryBar";
const CLICK_CATEGORYBAR_BTN = "click_CategoryBar_btn";

interface IProps {
  id: string;
  mode: string;
  data?: any;
  selectedValue: string;
  className: string;
  onEvent: any;
}

const CategoryBar: FC<IProps> = ({ id, mode, data, className, selectedValue, onEvent }) => {
  const [_selectedValue, setSelectedValue] = useState(selectedValue);

  useEffect(() => {
    setSelectedValue(selectedValue);
    //console.log("useEffect CategoryTab ==> ", selectedValue);
  }, [selectedValue]);

  const _className = useMemo(() => {
    return utils.setClassNameBind([
      'category-bar', 
      mode ? mode : '',
      className ? className : '',
    ])
  }, [mode, className])

  // EVENT HANDLER : onClickSwiper
  const onClickSwiper = useCallback((swiper) => {
    if (swiper.clickedSlide !== undefined) {
      const param = {
        value: swiper.clickedSlide.getAttribute("data-value"),
        id: id || undefined,
      }
      //console.log('onClickSwiper => ', param);
      onEvent(CLICK_CATEGORYBAR, param);
    }
  }, [id, onEvent]);

  // ITEM RENDERER : getSlideCont  
  const getSlideCont = useCallback((v: any) => {
    if(mode == 'header-nav'){
      return v.text
    } else if(mode == 'category-nav'){
      return (
        <>
          <span className="vis"><img src={v.img} alt={v.text} /></span>
          <span className="txt">{v.text}</span>
        </>
      )
    }
  }, [mode])

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
          <button className="btn">
            {getSlideCont(v)}
          </button>
        </SwiperSlide>
      )
    })
  }, [data, _selectedValue, getSlideCont])

  return (
    <CategoryBarWrap className={_className} mode={mode} id={id}>
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
    </CategoryBarWrap>
  );
}

export default memo(CategoryBar);