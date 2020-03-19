import { useContext } from 'react'
import { TabContext } from './TabMenu'

const TabCont = ({children, id, index, onClick}) =>{
  const { tabValue, isScroll } = useContext(TabContext)
  const tabOn = (index === tabValue);
  if (onClick) onClick();
  return (
    <>
      {
        !isScroll 
          ? <div className={ tabOn ? "ui-panel active" : "ui-panel non-active"} id={id}>{children}</div>
          : <div className="ui-panel active" id={id}>{children}</div>
      }
    </>
  )
}

export default TabCont;