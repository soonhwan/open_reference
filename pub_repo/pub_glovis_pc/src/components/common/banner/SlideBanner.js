
import { useState, useRef, useCallback } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import BannerItem from './BannerItem';
import ImgCover from '@lib/share/items/ImgCover';

const SlideBanner = ({car_list, touch=false, slideType="banner-multiple", screen=false, screenInfo=[], buttonType="arrow", children, pagination=false, dots=false, autoplay=false, hasMarkup=null, customArrow=false}) => {
  let settings = null;
  const [slideIndex, setSlideIndex] = useState(0);  
  const [playButton, setPlayButton] = useState(false);
  const [pauseButton, setPauseButton] = useState(true);
  const rootSlider = useRef(null);
  const imgSlider = useRef(null);
  const NextArrow = useCallback(({ onClick }) => {
    if (buttonType === 'arrow') {
      return (<button className="btn-arrow-next-mid" onClick={onClick}></button>)
    } else if (buttonType === 'circle') {
      return (<button className="btn-circle-next" onClick={onClick}></button>)
    }
  }, []);
  const PrevArrow = useCallback(({ onClick }) => {
    if (buttonType === 'arrow') {
      return (<button className="btn-arrow-prev-mid" onClick={onClick}></button>)
    } else if (buttonType === 'circle') {
      return (<button className="btn-circle-prev" onClick={onClick}></button>)  
    }
  }, []);
  
  const playSlick = useCallback(() => {
    rootSlider.current.slickPlay()
    setPlayButton(false)
    setPauseButton(true)
  }, []);
  const pauseSlick = useCallback(() => {
    rootSlider.current.slickPause()
    setPlayButton(true)
    setPauseButton(false)
  }, []);
  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

  settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    draggable: touch,
    touchMove: touch,
    initialSlide: 0,
    slidesToShow: slideType === "banner-multiple" ? 4 : 1,
    slidesToScroll: slideType === "banner-multiple" ? 4 : 1,
    autoplay: autoplay,
    className: dots ? 'w-dots' : null,
    appendDots: dots => (
      <div>
        <ul className="dots">{dots}</ul>
        {
          autoplay &&
          <>
            {playButton && <button className="btn-play" onClick={playSlick}>Play</button>}
            {pauseButton && <button className="btn-pause" onClick={pauseSlick}>Pause</button>}
          </>
        }
      </div>
    )
  }
  if (customArrow) {
    settings.prevArrow = <PrevArrow />;
    settings.nextArrow = <NextArrow />;
  }
  if (slideType === "banner-multiple") {
    return (
      <>
        <Slider ref={rootSlider} {...settings}>
          {car_list.map((v, i) => {
            if (hasMarkup !== null) {
              if(hasMarkup.includes(i)) {
                if(hasMarkup.length > 1){
                  return children[hasMarkup.indexOf(i)]
                } else {
                  return children
                }
              } else {
                return (
                  <BannerItem key={i} name={v.name} price={v.price} image={v.image} alt={v.alt} isButton={v.isButton} buttonName={v.buttonName} tags={v.tags} infos={v.infos} options={v.options} btnClick={handleBtnClick} btnId={v.id} />
                )
              }
            } else {
              return (
                <BannerItem key={i} name={v.name} price={v.price} image={v.image} alt={v.alt} isButton={v.isButton} buttonName={v.buttonName} tags={v.tags} infos={v.infos} options={v.options} btnClick={handleBtnClick} btnId={v.id} />
              )
            }
            
          })}
        </Slider>
      </>
    )
  } else if (slideType === "banner-single") {
    settings.beforeChange = (current, next) => {
      setSlideIndex(next);
      screen && imgSlider.current.slickGoTo(next)
    }
    return (
      <>
        {
          screen && (
            <div className="steps-img-wrap">
              <div className="steps-img">
                <Slider
                  ref={imgSlider}
                  arrows={false}
                  fade={true}
                >{screenInfo.map((v, i) => <ImgCover key={i} src={v.img} alt={v.alt} />)}</Slider>
                
              </div>
              <div className="steps-cover"><img src="/images/contents/step-mobile-bg.png" alt="" /></div>
            </div>
          )
        }
        <Slider ref={rootSlider} {...settings}>
          {children}
        </Slider>
        {pagination === true && <p className="pagination-num">{slideIndex+1} / {children.length}</p>}
      </>
    )    
  }
}

SlideBanner.propTypes = {
  children: PropTypes.node,
  car_list: PropTypes.array,
  touch: PropTypes.bool,
  type: PropTypes.string,
  dots: PropTypes.bool,
  autoplay: PropTypes.bool,
  hasMarkup: PropTypes.array,
  customArrow: PropTypes.bool,
  screen: PropTypes.bool,
  screenInfo: PropTypes.array,
}

export default SlideBanner