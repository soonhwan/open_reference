import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import RodalPopup from '@lib/share/popup/RodalPopup';
import Magnifier from '@lib/share/items/Magnifier';
import ImgCover from '@lib/share/items/ImgCover';

const SlideGallery = ({car_gallery, quickView=false}) => {
  
  const rootSlider = useRef(null)
  const [popupNav1, setPopupNav1] = useState(null)
  const [popupNav2, setPopupNav2] = useState(null)
  const popupSlider1 = useRef(null)
  const popupSlider2 = useRef(null)
  useEffect(() => {
    setPopupNav1(popupSlider1.current)
    setPopupNav2(popupSlider2.current)
  }, [])

  const NextArrow = ({ onClick }) => {
    return (<button type="button" className="btn-next" onClick={onClick}><span className="hide">다음</span></button>)
  }
  const PrevArrow = ({ onClick }) => {
    return (<button type="button" className="btn-prev" onClick={onClick}><span className="hide">이전</span></button>)
  }

  let settings_root_slick = {
    dots: true,
    dotsClass: "slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: false,
    draggable: false,
    touchMove: false,
    customPaging: function(i) {
      const { sImg, sAlt } = car_gallery[i];
      return <a><ImgCover src={sImg} alt={sAlt} /></a>
    },
    beforeChange: (current, next) => {
      popupSlider1.current.slickGoTo(next)
      popupSlider2.current.slickGoTo(next)
    },
    onSwipe: function(e){
      
    }
  }

  let settings_popup_slick = {
    infinite: true,
    draggable: true,
    touchMove: true,
    beforeChange: (current, next) => {
      rootSlider.current.slickGoTo(next)
    }
  }

  // 팝업
  const [rodalShow, setRodalShow] = useState(false)
  const [rodalType, setRodalType] = useState('zoom')

  const rodalPopupHandler = (e, type) => {
    e.preventDefault();
    setRodalShow(true)
    setRodalType(type)
    document.getElementsByTagName('body')[0].style.overflow="hidden"
  }
  const modalCloseHandler = (flag) => {
    setRodalShow(flag)
    document.getElementsByTagName('body')[0].style.overflow="auto"
  }

  if (quickView) {
    return (
      <Slider ref={rootSlider}
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        fade={false}
        draggable={false}
        touchMove={false}
      >
        {car_gallery.map((v, i) => {
          return (
            <div key={i}><a href="" onClick={(e) => rodalPopupHandler(e, "fade")}><ImgCover src={v.bImg} alt={v.bAlt} /></a></div>
          )
        })}
      </Slider>
    )
  }

  return (
    <div className="car-img-area">
      <ul className="car-img-trick">{Array(20).fill().map((tr, i) => (<li key={i}></li>))}</ul>
      <Slider ref={rootSlider} {...settings_root_slick}>
        {car_gallery.map((v, i) => {
          return (
            <div key={i}><a href="" onClick={(e) => rodalPopupHandler(e, "fade")}><ImgCover src={v.bImg} alt={v.bAlt} /></a></div>
          )
        })}
      </Slider>
      <RodalPopup show={rodalShow} type={rodalType} maxWidth={1200} width={90} closedHandler={modalCloseHandler} mode="fullsize" measure='%'>
        <Slider
          ref={popupSlider1}
          asNavFor={popupNav2}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          slidesToShow={1}
          fade={true}
          adaptiveHeight={true}
          {...settings_popup_slick}
        >
          {car_gallery.map((v, i) => {
            return (
              <Magnifier key={i} imgUrl={v.bImg} alt={v.bAlt} />
            )
          })}
        </Slider>
        <Slider
          ref={popupSlider2}
          asNavFor={popupNav1}
          slidesToShow={car_gallery.length}
          swipeToSlide={true}
          focusOnSelect={true}          
          variableWidth={true}
          arrows={false}
          centerMode={false}
          className="slick-sthumb"
          {...settings_popup_slick}
        >
          {car_gallery.map((v, i) => {
            return <div key={i} style={{ width: 50 }}><ImgCover src={v.bImg} alt={v.bAlt} /></div>
          })}
        </Slider>
      </RodalPopup>
    </div>
  )
}

SlideGallery.propTypes = {
  car_gallery: PropTypes.array,
  quickView: PropTypes.bool,
}

export default SlideGallery;