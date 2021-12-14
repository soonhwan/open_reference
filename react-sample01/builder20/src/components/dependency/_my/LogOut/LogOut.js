import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer } from 'components';
import styles from './LogOut.scss';
import utils from 'utils';

const LogOut = ({ mode, prevEvent, onEvent }) => {
  const param = {
    mode: 'icontext',
    btnClass: 'btnMyLogOutLink',
    size: 'ST16',
    color: 'Medium',
    icon: 'mylogout',
    iconsize: 22,
    onEvent: (event) => {
      utils.triggerEvent('click_Logout', onEvent, prevEvent, null, null, event)
    }
  }
  return (
    <div className={'LogOutWrap ' + mode}>
      <div className="LogOutInner">
        <LinkRenderer {...param}>로그아웃</LinkRenderer>
      </div>
    </div>
  )
}

export default withStyles(styles)(LogOut);