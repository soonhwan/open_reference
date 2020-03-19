import { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const MenuContext = createContext()

const MenuItem = ({children, buttons=false}) =>{
  const [menuValue, setMenuValue] = useState(false)

  if (buttons === false) {
    return (
      <li>
        <dl>
          <MenuContext.Provider value={{menuValue, setMenuValue}}>
            {children}
          </MenuContext.Provider>
        </dl>
      </li>
    )
  } else {
    return (
      <li className='btns'>{children}</li>
    )
  }
  
}

MenuItem.propTypes = {
  children: PropTypes.node
}

export default MenuItem;