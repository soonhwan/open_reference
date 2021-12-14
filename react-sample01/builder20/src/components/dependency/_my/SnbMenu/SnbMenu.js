import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, LinkRenderer, Icon } from 'components';
import styles from './SnbMenu.scss';
import { useState } from 'hooks';

const SnbMenu = ({ mode, subMenu, subMenuValue, prevEvent, onEvent }) => {
  const [selectedValue, setSelectedValue] = useState(subMenuValue);

  const CHANGE_SORTING_UTIL = 'change_SubMenu';
  const triggerEvent = (event, option) => {
    let prevEventResult = true
    if (typeof prevEvent === 'function') {
      prevEventResult = prevEvent(CHANGE_SORTING_UTIL, selectedValue, option)
    }
    if (prevEventResult && option) {
      setSelectedValue(option.value);
      if (typeof onEvent === 'function') {
        onEvent(CHANGE_SORTING_UTIL, option, event)
      } 
    }
  }

  const getBody = () => {
    return subMenu.map((item, index) => {
      const param = {
        size: 'B12B',
        color: 'Medium'
      }
      return (
        <div className={'SnbMenuContent ' + item.type} key={index}>
          <div className="SnbMenuHeader">
            <TextRenderer {...param}>{item.title}</TextRenderer>
          </div>
          <ul className="SnbMenuNav">
            {getNav(item.navlists)}
          </ul>
        </div>
      );
    })
  }

  const getNav = (navlists) => {
    return navlists.map((item, index) => {
      const param = {
        mode: 'icontext',
        btnClass: 'SnbMenuNavLink',
        size: 'ST16B',
        color: item.value !== selectedValue ? 'Dark' : 'Point',
        icon: item.value !== selectedValue ? 'my' + item.type : 'my' + item.type + 'Sel',
        iconsize: 22,
        onEvent: (eventName, state, event) => {
          triggerEvent(event, item);
        }
      }
      return (
        <li className={'SnbMenuNavItem ' + item.type} key={index}>
          <LinkRenderer {...param}>{item.text} {item.appYn === 'Y' && <Icon icon="myapp" iconsize="24"></Icon>}</LinkRenderer>
        </li>
      )
    })
  }

  return (
    <div className={'SnbMenuWrap ' + mode}>
      <div className="SnbMenuInner">
        {getBody()}
      </div>
    </div>
  )
}

export default withStyles(styles)(SnbMenu);