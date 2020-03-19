import React, { useState, useRef, useEffect, useCallback } from 'react';
import Rodal from 'rodal';
import PropTypes from 'prop-types';

const RodalPopup = ({children, show, title, type, mode='normal', width, maxWidth, measure, size, closedHandler, isMask=true, isButton=true, duration=300, className, marginLeft, marginTop}) => {
  const [popupTop, setPopupTop] = useState(0);
  const [popupHeight, setPopupHeight] = useState(0);
  const popupEl = useRef(null);
  const toggleShow = (flag) => {
    closedHandler(flag)
  };
  const closePopup = useCallback((e) => {
    e.preventDefault();
    document.getElementsByTagName('html')[0].style.overflow = "auto"
    // document.getElementsByTagName('html')[0].style.marginRight = 0
    toggleShow(false);    
  }, []);
  
  const popupStyles = {
    maxWidth: maxWidth,
    width: measure !== '%' ? width+'px': width+'%',
    height: 'auto'
  }
  if (marginLeft !== undefined) popupStyles.marginLeft = marginLeft + 'px';
  if (marginTop !== undefined) popupStyles.marginTop = marginTop + 'px';

  useEffect(() => {
    setPopupTop(document.documentElement.scrollTop);
    setPopupHeight(window.innerHeight);
  }, [])

  let customStyles = {}
  if (mode === 'normal') {
    if (size === 'large') {
      customStyles = { ...popupStyles, width: '1200px' };
    } else if (size === 'medium') {
      customStyles = { ...popupStyles, width: '792px' };
    } else if (size === 'small') {
      customStyles = { ...popupStyles, width: '588px' };
    } else if (size === 'xs') {
      customStyles = { ...popupStyles, width: '500px' };
    } else {
      customStyles = { ...popupStyles }
    }
  } else if (mode === 'fullsize' || mode === 'tabmenu') {
    customStyles = {
      ...popupStyles,
      padding: '44px 0',
      backgroundColor: 'transparent',
      boxShadow: 'none'
    }
  } else if (mode === 'no-padding') {
    customStyles = { ...popupStyles }
  }
  // customStyles.width = measure !== '%' ? width+'px': width+'%';
  let classPopupWrapper = (size === 'large') ? `popup-wrapper ${size}` : `popup-wrapper`;
  if (className !== undefined) classPopupWrapper += ` ${className}`;

  return (
    <Rodal className={classPopupWrapper} visible={show} animation={type} width={100} height={100} duration={duration} measure={'%'} onClose={() => toggleShow(false)} showCloseButton={false} showMask={isMask}>
      {isMask === true && <div className="popup-dimm" onClick={closePopup}></div>}
      <div className="popup-wrap" style={customStyles} ref={popupEl}>
        <div className={size !== undefined ? `popup-${mode}-${size}` : `popup-${mode}`}>
          {
            (mode === 'normal' && title !== undefined) && (
              <div className="popup-tit-sec">
                {title !== undefined && <h3 className="popup-title">{title}</h3>}
              </div>
            )
          }
          {
            mode !== 'tabmenu' && isButton === true
              ? <a href="#" className="popup-close" onClick={closePopup}></a> : null
          }
          {
            mode === 'fullsize' || mode === 'tabmenu'
            ? <>{children}</>
            : <div className="popup-con-sec">{children}</div>
          }
        </div>
      </div>
    </Rodal>
  ) 
}

RodalPopup.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
  mode: PropTypes.string,
  width: PropTypes.number,
  maxWidth: PropTypes.number,
  duration: PropTypes.number,
  measure: PropTypes.string,
  size: PropTypes.string,
  closedHandler: PropTypes.func,
  isMask: PropTypes.bool,
  className: PropTypes.string,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number,
}

export default RodalPopup