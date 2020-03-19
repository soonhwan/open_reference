import { useState, useEffect, useContext, useRef } from 'react'
import { MenuContext } from './MenuItem'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

const MenuCont = ({children}) =>{
  const menuContHeight = useRef(null)
  const {menuValue} = useContext(MenuContext)
  const [menuH, setMenuH] = useState(0)
  const [display, setDisplay] = useState(false)
  
  useEffect(()=>{
    let shortTimer, longTimer = null;
    if(menuValue){
      setDisplay(true)
      shortTimer = setTimeout(() =>{
        setMenuH(menuContHeight.current.scrollHeight)
        longTimer = setTimeout(() =>{
          setMenuH()
        },300)
      }, 10)
    }
    else{
      if(menuContHeight.current){
        setMenuH(menuContHeight.current.scrollHeight)
      }
      shortTimer = setTimeout(() =>{
        setMenuH(0)
        longTimer = setTimeout(() => {
          setDisplay(false)
        }, 300)
      },20)
    }
    return () => {
      clearTimeout(shortTimer)
      clearTimeout(longTimer)
    }
  }, [menuValue])
  
  const menuClass = classNames(
    {"active": display}
  )
    
  return (
    <dd ref={menuContHeight} className={menuClass} style={{height:menuH}}>{children}</dd>
  )
}

MenuCont.propTypes = {
  children: PropTypes.node
}

export default MenuCont;
