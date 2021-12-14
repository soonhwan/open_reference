import React, { Fragment, memo } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LinkRenderer } from 'components';
// import swiperStyles from 'swiper/swiper.scss';
import swiperStyles from 'styles/libs/swiper/swiper.scss';
// import swiperNavigationStyles from 'swiper/components/navigation/navigation.scss';
import swiperNavigationStyles from 'styles/libs/swiper/navigation.scss';
import styles from './PrimaryBar.scss';
import { useMemo, useCallback, useState, useEffect } from 'hooks';
import utils from 'utils';
import { logConfig } from '_constants'

SwiperCore.use([Navigation]);

const EVENT_CHANGE_ITEM = 'change_PrimaryBar';

const PrimaryBar = ({ mode, itemList, selectedItemValue, itemValueKey, itemTextKey, prevEvent, onEvent }) => {

  const _itemList = useMemo(() => utils.isEmptyList(itemList) ? [] : itemList, [itemList])
  const _itemValueKey = useMemo(() => utils.isEmpty(itemValueKey) ? 'value' : itemValueKey, [itemValueKey])
  const _itemTextKey = useMemo(() => utils.isEmpty(itemTextKey) ? 'text' : itemTextKey, [itemTextKey])

  const [_selectedItemValue, setSelectedItemValue] = useState(selectedItemValue);
  const [_selectedItem, setSelectedItem] = useState(utils.findItemByValue(_itemList, _selectedItemValue, _itemValueKey));
  useEffect(() => {
    // console.log('- PrimaryBar useEffect ', selectedItemValue, _selectedItem, _itemList, _itemValueKey)
    setSelectedItemValue(selectedItemValue)
    // selectedItemValue은 변경되었는데 (외부 전달) 내부 선택값이 변경되지 않은 경우 강제로 변경
    if (_selectedItem != null && _selectedItem[_itemValueKey] !== selectedItemValue) {
      setSelectedItem(utils.findItemByValue(_itemList, selectedItemValue, _itemValueKey))
    }
  }, [selectedItemValue, _selectedItem, _itemList, _itemValueKey])

  const triggerEvent = useCallback((event, item) => {
    let prevEventResult = true
    if (typeof prevEvent === 'function') {
      prevEventResult = prevEvent(EVENT_CHANGE_ITEM, _selectedItem, item)
    }
    if (prevEventResult && item) {
      setSelectedItem(item)
      setSelectedItemValue(item[_itemValueKey])
      if (typeof onEvent === 'function') {
        onEvent(EVENT_CHANGE_ITEM, item, event)
      } 
    }
  }, [_selectedItem, _itemValueKey, prevEvent, onEvent])

  const [getSwiper, setGetSwiper] = useState();

  let currentStepNum, moveStepNum;

  const getSwiperMove = (swiper) => {
    const currentLeft = swiper.translate;
    const maxLeft = swiper.size - swiper.virtualSize;
    
    swiper.el.querySelector('.CoreDimLeft').style.display = 'block';
    swiper.el.querySelector('.CoreDimRight').style.display = 'block';

    if (currentLeft >= 0) {
      swiper.el.querySelector('.CoreDimLeft').style.display = 'none';
      swiper.el.querySelector('.CoreDimLeft').setAttribute('class', 'CoreDimLeft disabled')
    } else if (currentLeft < 0) {
      swiper.el.querySelector('.CoreDimLeft').style.display = 'block';
      swiper.el.querySelector('.CoreDimLeft').setAttribute('class', 'CoreDimLeft')
    }

    if (currentLeft <= maxLeft) {
      swiper.el.querySelector('.CoreDimRight').style.display = 'none';
      swiper.el.querySelector('.CoreDimRight').setAttribute('class', 'CoreDimRight disabled')
    } else {
      swiper.el.querySelector('.CoreDimRight').style.display = 'block';
      swiper.el.querySelector('.CoreDimRight').setAttribute('class', 'CoreDimRight')
    }
  }
  const getSwiperStepMove = (s) => {
    if (s >= 932 && s < 2000) {
      moveStepNum = 4;
    } else if (s >= 620 && s < 972) {
      moveStepNum = 2;
    } else if (s >= 340 && s < 620) {
      moveStepNum = 1;
    } else if (s < 340) {
      moveStepNum = 1;
    }
  }

  const getSlideUtil = () => {
    const prevParam = {
      onClick: () => {
        getSwiper.slideTo(getSwiper.activeIndex - 3, 400);
      }
    }
    const nextParam = {
      onClick: () => {
        getSwiper.slideTo(getSwiper.activeIndex + 3, 400);
      }
    }
    return (
      <Fragment>
        <div className="CoreDimLeft"></div>
        <div className="CoreDimRight"></div>
        <div className="CoreButtonPrev" {...prevParam}>이전</div>
        <div className="CoreButtonNext" {...nextParam}>다음</div>
      </Fragment>
    );
  }

  const getSwiperDom = () => {
    if (_itemList.length < 1) {
      return null
    }

    const getSlideItem = _itemList?.map((item, index) => {
      
      const param = {
        mode: 'text',
        size: 'B14',
        color: 'Dark',
        num: index,
        btnClass: item[_itemValueKey] !== _selectedItemValue ? mode + 'link' : mode + 'link ' + mode + 'linkSel',
        onEvent: (eventName, state, event) => {
          triggerEvent(event, item);
          // eventNm, onEvent, prevEvent, value, oldValue, event
          // utils.triggerEvent(EVENT_CHANGE_ITEM, onEvent, prevEvent, item[_itemValueKey], mainValue, event)
          if (mode === 'core') {
            currentStepNum = index;
            getSwiperStepMove(getSwiper.size);
            getSwiper.slideTo(currentStepNum - moveStepNum, 400);
          }
        }
      }

      if (item[_itemValueKey] === _selectedItemValue) {
        currentStepNum = index;
      } else {
        currentStepNum = -1
      }

      return (
        <SwiperSlide key={index}>
          <LinkRenderer {...param}>{item[_itemTextKey]}</LinkRenderer>
        </SwiperSlide>
      );
    })

    const param = {
      slidesPerView: 'auto',
      spaceBetween: 0,
      longSwipesRatio: 5,
      freeMode: true,
      navigation: {
        prevEl: '.CoreButtonPrev',
        nextEl: '.CoreButtonNext',
        disabledClass: 'disabled'
      },
      onInit: (swiper) => {
        setGetSwiper(swiper);
        getSwiperMove(swiper);
        getSwiperStepMove(swiper.size);
        swiper.slideTo(currentStepNum - moveStepNum, 0)
      },
      onTransitionEnd: (swiper) => {
        setGetSwiper(swiper);
        getSwiperMove(swiper);
        getSwiperStepMove(swiper.size);
      },
      onTouchMove: (swiper) => {
        setGetSwiper(swiper);
        getSwiperMove(swiper);
      },
      onTouchStart: (swiper) => {
        setGetSwiper(swiper);
        if (swiper.virtualSize <= swiper.width) {
          swiper.params.resistanceRatio = 0.000000000000000001;
        } else {
          swiper.params.resistanceRatio = 0.85;
        }
      },
    }

    return (
      <Swiper {...param}>
        {getSlideItem}
        {getSlideUtil()}
      </Swiper>
    )
  }

  logConfig.render && console.log('%r PrimaryBar')
  return (
    <div className={'PrimaryBar ' + mode}>
      <div className="PrimaryBarWrap">
        <div className="PrimaryBarInner">
          {getSwiperDom()}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles, swiperStyles, swiperNavigationStyles)(memo(PrimaryBar));


