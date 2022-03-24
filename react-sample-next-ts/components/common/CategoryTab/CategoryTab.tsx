import React, { memo, useState, FC, useCallback, useEffect } from "react";
import { CategoryTabWrap } from "./CategoryTabStyles";
import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CLICK_CATEGORY = "click_CategoryTab";

interface IProps {
  data?: any;
  onEvent?: any;
  selectedItemValue?: any;
}

const CategoryTab: FC<IProps> = ({ data, selectedItemValue, onEvent }) => {
  const [_selectedItemValue, setSelectedItemValue] = useState(selectedItemValue);

  useEffect(() => {
    setSelectedItemValue(selectedItemValue);
    console.log("useEffect CategoryTab ==> ", selectedItemValue);
  }, [selectedItemValue]);

  // EVENT HANDLER : onClickSwiper
  const onClickSwiper = useCallback((swiper) => {
    if (swiper.clickedSlide !== undefined) {
      const v = swiper.clickedSlide.getAttribute("data-value");
      //console.log('onClickSwiper => ', v);
      onEvent(CLICK_CATEGORY, v);
    }
  }, [onEvent]);

  // ITEM RENDERER : getListRender
  const getListRender = useCallback(() => {
    return data?.map((v: any, i: any) => {
      return (
        <SwiperSlide
          key={i}
          className={v.value === _selectedItemValue ? "active" : ""}
          data-value={v.value}
        >
          {v.categoryName}
        </SwiperSlide>
      );
    });
  }, [data, _selectedItemValue]);

  return (
    <CategoryTabWrap>
      <Swiper
        modules={[A11y]}
        slidesPerView="auto"
        className="category_tab"
        onInit={(swiper) => {
          swiper.slideTo(
            data.findIndex((v: any) => v["value"] === selectedItemValue)
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
    </CategoryTabWrap>
  );
};

export default memo(CategoryTab);
