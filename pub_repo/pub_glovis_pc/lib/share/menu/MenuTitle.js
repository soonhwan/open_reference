import { useState, useCallback, useContext, useEffect, useRef } from 'react'
import { MenuContext } from './MenuItem'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

const MenuTitle = ({children, toggle=true, menuActive=false}) =>{
  const {menuValue, setMenuValue} = useContext(MenuContext)
  const handleClick = useCallback((e) =>{
    e.preventDefault();
    setMenuValue(!menuValue)
  },[menuValue])

  const titleOn = classNames(
    {"down": !menuValue},
    {"up": menuValue}
  )
  const m_tit = useRef(null)
  useEffect(() =>{
    if(menuActive){
      m_tit.current.click();
    }
  },[])
  return (
    <dt>
      {toggle?
        <a href="#" ref={m_tit} className={titleOn} onClick={handleClick}>
          {children}
        </a>
      :
      <div>
        {children}
      </div>
      }
    </dt>
  )
}

MenuTitle.propTypes = {
  children: PropTypes.node,
  toggle: PropTypes.bool,
  menuActive: PropTypes.bool
}

export default MenuTitle;