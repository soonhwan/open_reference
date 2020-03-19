import { useState, useEffect, createContext, useCallback } from 'react';
import Router from 'next/router';
import animateScrollTo from 'animated-scroll-to';
import PropTypes from 'prop-types';
export const TabContext = createContext();

const TabMenu = ({children, type, defaultTab=0, action=false, mount=true, isScroll=false, liClicked=false, onClick, callBack, tabLink=[], mode="horizon", itemNum="item-num1", responsive=false, className, isFix=false, calH=58}) =>{
  const [tabValue, setTabValue] = useState(defaultTab);
  const [scrollY, setScrollY] = useState([]);
  const hoverType = action ? true : false;

  let tc = 'tabmenu';
  if (responsive) {
    tc += (' item-num' + children.length);
  }
  if (type === "type1") {
    tc += " tp1";
  } else if (type === "type2") {
    tc += " tp2";
  } else if (type === "type3") {
    tc += " tp3";
  } else if (type === "type4") {
    tc += " tp4";
  } else if (type === "type5") {
    tc += " tp5";
  } else if (type === "type6") {
    tc += " tp6";
  } else if (type === "type7") {
    tc += " tp7";
  } else if (type === "type8") {
    tc += " tp8";
  } else if (type === "popup") {
    tc += " popup";
  }
  if (mode === "vertical") tc += " vertical";
  if (isFix === true) tc += " is-tabmenu-fix";

  useEffect(() => {
    let getScrollY = [];
    if(isScroll) {
      children.map((v, i) => {
        getScrollY.push( document.querySelector(`#${v.props.id}`).getBoundingClientRect().top + window.scrollY );
      });
      setScrollY(getScrollY);
    }
  }, []);
  
  let tabArr = [];
  tabLink.map(v => tabArr.push(v.index));
  const handleAction = useCallback((e,idx) => {
    e.preventDefault();
    if (tabLink.length > 0) {
      if (tabArr.includes(idx)) {
        let goUrl = tabLink.filter(v => v.index === idx)[0].url;
        Router.push(goUrl)
        return false;
      }
    }
    setTabValue(idx);
    if (isScroll) {
      animateScrollTo(scrollY[idx]-calH, {
        speed: 300,
        easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 // easeInOutCubic
      });
    }
    if (callBack) callBack(e,idx)
  }, [scrollY]);

  return (
    <>
      <div className={className !== undefined ? `${tc} ${className}` : tc}>
        <ul className={type === 'type1' || type === 'type2' ? `ui-tab col-${children.length}` : 'ui-tab'}>
          {children.map((item, index) => {
            const {id, tabTitle} = item.props;
            return (
              <li
                key={index}
                className={
                  (mode !== "fix" ? index === tabValue : index === defaultTab)
                    ? "on tabTitle" + (index+1)
                    : "tabTitle" + (index+1)
                }
                onClick={liClicked ? (e) => handleAction(e,index) : null}>
                {
                  hoverType
                    ? (<a href={id ? "#"+id : "#"} onMouseEnter={(e) => {handleAction(e,index)}}>{tabTitle}</a>)
                    : (<a href={id ? "#"+id : "#"} onClick={liClicked=false ? '' : (e) => {handleAction(e,index)}}>{tabTitle}</a>)
                }
              </li>
            )
          })}
        </ul>
        <TabContext.Provider value={{tabValue, isScroll}}>
          { mount ? children[tabValue] : children }
        </TabContext.Provider>
        {type==="popup" && <button className="btn-close" onClick={onClick}></button>}
      </div>
    </>
  )
}

TabMenu.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  defaultTab: PropTypes.number,
  action: PropTypes.bool,
  mount: PropTypes.bool,
  isScroll: PropTypes.bool,
  liClicked: PropTypes.bool,
  onClick: PropTypes.func,
  callback: PropTypes.func,
  tabLink: PropTypes.array,
  mode: PropTypes.string,
  className: PropTypes.string,
  isFix: PropTypes.bool,
  calH: PropTypes.number,
}

export default TabMenu;