import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LinkRenderer } from 'components';
// import swiperStyles from 'swiper/swiper.scss';
import swiperStyles from 'styles/libs/swiper/swiper.scss';
// import swiperNavigationStyles from 'swiper/components/navigation/navigation.scss';
import swiperNavigationStyles from 'styles/libs/swiper/navigation.scss';
import swiperPaginationStyles from 'styles/libs/swiper/pagination.scss';
import styles from './BannerSwiper.scss';
import utils from 'utils';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const BannerSwiper = ({ mode, bannerLists, prevEvent, onEvent }) => {
  const getSlideItem = bannerLists.map((item, index) => {
    const param = {
      className: 'BannerSwiperItemLink',
      onClick: (event) => {
        utils.triggerEvent('click_BannerSwiper_Link', onEvent, prevEvent, null, null, event)
      }
    }
    
    const bannerParam = {
      className: 'BannerSwiperItemPic',
      src: item.bannerUrl,
      alt: item.title
    }

    return (
      <SwiperSlide key={index}>
        <div className="BannerSwiperItem">
          <a {...param}>
            <img {...bannerParam} />
          </a>
        </div>
      </SwiperSlide>
    );
  })

  const getSlideUtil = () => {
    return (
      <Fragment>
        <div className="CoreButtonPrev">이전</div>
        <div className="CoreButtonNext">다음</div>
      </Fragment>
    );
  }

  const param = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    longSwipesRatio: 5,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.CoreButtonPrev',
      nextEl: '.CoreButtonNext',
      disabledClass: 'disabled'
    },
  }

  return (
    <div className={'BannerSwiper ' + mode}>
      <div className="BannerSwiperWrap">
        <div className="BannerSwiperInner">
          <Swiper {...param}>
            {getSlideItem}
            {getSlideUtil()}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles, swiperStyles, swiperNavigationStyles, swiperPaginationStyles)(BannerSwiper);


