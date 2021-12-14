import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { AccountBox, MySubCashPoint, MySubCouponPass, SnbMenu, LogOut, Icon, TextRenderer } from 'components';
import styles from './MySnb.scss';
import utils from 'utils';

const MySnb = ({ accountInfo, notiYn, adultYn, cashPointOptions, couponOption, passOption, subMenu, subMenuValue, prevEvent, onEvent }) => {
  const getHeader = () => {
    return (
      <div className="MySnbHeader">
        <Icon icon="myhome" iconsize="20" /><TextRenderer size="ST16B" color="Dark">나의 unknown</TextRenderer>
      </div>
    )
  }
  return (
    <div className="MySnbWrap">
      <div className="MySnbInner">
        {getHeader()}
        <AccountBox mode="mysnb" accountInfo={accountInfo} notiYn={notiYn} adultYn={adultYn} prevEvent={prevEvent} onEvent={onEvent} />
        <MySubCashPoint mode="basic" cashPointOptions={cashPointOptions} prevEvent={prevEvent} onEvent={onEvent} />
        <MySubCouponPass mode="basic" couponOption={couponOption} passOption={passOption} prevEvent={prevEvent} onEvent={onEvent} />
        <SnbMenu mode="my" subMenu={subMenu} subMenuValue={subMenuValue} prevEvent={prevEvent} onEvent={onEvent} />
        <LogOut mode="my" prevEvent={prevEvent} onEvent={onEvent} />
      </div>
    </div>
  )
}

export default withStyles(styles)(MySnb);