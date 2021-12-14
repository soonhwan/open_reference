import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SubHeader, ItemRenderer, LinkRenderer } from 'components';
import swiperStyles from 'styles/libs/swiper/swiper.scss';
import swiperNavigationStyles from 'styles/libs/swiper/navigation.scss';
import styles from './Card.scss';
import { useState } from 'hooks';

SwiperCore.use([Navigation]);

const Card = ({ mode, title, itemRenderer, infoList, prevEvent, onEvent }) => {
  const [getSwiper, setGetSwiper] = useState();

  const moveStepNum = 4;

  const getSubHeader = () => {
    if (mode === 'detail3n') {
      return (
        <SubHeader mode="offeringBasic" title={title} prevEvent={prevEvent} onEvent={onEvent} />
      )
    }

    return (
      <SubHeader mode="offeringLink" title={title} prevEvent={prevEvent} onEvent={onEvent} />
    )
  }

  const getSwiperTitleOpacity = (swiper) => {
    const elHeader = swiper.el.parentNode.querySelector('.SubHeader');

    //const userSet = setInterval(function() {
      // console.log(swiper.translate);
      const numTranslate = Math.abs(swiper.translate);
      if (swiper.translate >= 0) {
        elHeader.style.opacity = 1;
      } else if (numTranslate < 112) {
        elHeader.style.opacity = 1 - numTranslate / 112;
      } else {
        elHeader.style.opacity = 0;
      }
    //},200);
  }

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

  const getSlideItem = infoList.map((infoItem, i) => {
    const param = {
      mode: mode,
      itemRenderer: itemRenderer,
      infoItem: infoItem,
      rankingNum: i + 1,
      prevEvent: prevEvent,
      onEvent: onEvent
    }

    return (
      <SwiperSlide key={i}>
        <ItemRenderer {...param}></ItemRenderer>
      </SwiperSlide>
    )
  })

  const getSlideMore = () => {
    const param = {
      mode: 'icontext',
      btnClass: 'CardMoreBtn',
      size: 'B14',
      color: 'Medium',
      icon: 'cardMore',
      iconsize: 32,
      prevEvent: prevEvent,
      onEvent: onEvent
    }
    return (
      <SwiperSlide className="swiper-slide-last-more">
        <div className="CardBoxLastMore">
          <div className="CardBoxLastMoreInner">
            <LinkRenderer {...param}>더보기</LinkRenderer>
          </div>
        </div>
      </SwiperSlide>
    )
  }

  const getSlideUtil = () => {
    const prevParam = {
      onClick: () => {
        getSwiper.slideTo(getSwiper.activeIndex - moveStepNum, 400);
      }
    }
    const nextParam = {
      onClick: () => {
        getSwiper.slideTo(getSwiper.activeIndex + moveStepNum, 400);
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

  const param = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      prevEl: '.CoreButtonPrev',
      nextEl: '.CoreButtonNext',
      disabledClass: 'disabled'
    },
    onInit: (swiper) => {
      setGetSwiper(swiper);
      getSwiperMove(swiper);
      //swiper.slideTo(currentStepNum - moveStepNum, 0)
    },
    onTransitionEnd: (swiper) => {
      setGetSwiper(swiper);
      getSwiperMove(swiper);
      if (mode === '2n') {
        getSwiperTitleOpacity(swiper);
      }
    },
    onTouchMove: (swiper) => {
      setGetSwiper(swiper);
      getSwiperMove(swiper);
      if (mode === '2n') {
        getSwiperTitleOpacity(swiper);
      }
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
    <div className={'CardBox type' + mode}>
      <div className="CardBoxWrap">
        <div className="CardBoxInner">
          {getSubHeader()}
          <Swiper {...param}>
            {getSlideItem}
            {(mode === 'detail3n') ? '' : getSlideMore()}
            {getSlideUtil()}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles, swiperStyles, swiperNavigationStyles)(Card);