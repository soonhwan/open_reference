import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, LinkRenderer } from 'components';
import styles from './MySubCouponPass.scss';
import utils from 'utils';

const linkParam = {
  mode: 'icontext', btnClass: 'MySubCouponPassLink', size: 'ST16B', color: 'Dark', icon: 'coupon', iconsize: 22
};
const subParam = { size: 'ST16B', color: 'Point' };
const subLinkParam = {
  btnClass: 'btnSmall btnWhite btnBlock', size: 'B12', color: 'Medium'
};

const MySubCouponPass = ({ couponOption, passOption, prevEvent, onEvent }) => {
  const getCoupon = () => {
    linkParam.icon = 'mycoupon';
    linkParam.onEvent = onEvent;
    linkParam.prevEvent = prevEvent;

    subLinkParam.onEvent = onEvent;
    subLinkParam.prevEvent = prevEvent;
    return (
      <div className="MySubCouponPassCell">
        <div className="MySubCouponPassItem">
          <LinkRenderer {...linkParam}>{couponOption.text} <TextRenderer {...subParam}>{utils.setComma(couponOption.num)}장</TextRenderer></LinkRenderer>
          <div className="MySubCouponPassItemSub">
            <LinkRenderer {...subLinkParam}>쿠폰등록</LinkRenderer>
          </div>
        </div>
      </div>
    );
  }
  const getPass = () => {
    linkParam.icon = 'mypass';
    linkParam.onEvent = onEvent;
    linkParam.prevEvent = prevEvent;

    subLinkParam.onEvent = onEvent;
    subLinkParam.prevEvent = prevEvent;

    const getSubscribeYn = () => {
      if (passOption.subscribeYn) {
        return '구독중';
      }
      return '첫 달 무료!';
    }

    return (
      <div className="MySubCouponPassCell">
        <div className="MySubCouponPassItem">
          <LinkRenderer {...linkParam}>{passOption.text} <TextRenderer {...subParam}>{getSubscribeYn()}</TextRenderer></LinkRenderer>
          <div className="MySubCouponPassItemSub">
            <LinkRenderer {...subLinkParam}>구독하기</LinkRenderer>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="MySubCouponPassWrap">
      <div className="MySubCouponPassInner">
        <div className="MySubCouponPassBody">
          { !utils.isEmpty(couponOption) && getCoupon() }
          { !utils.isEmpty(passOption) && getPass() }
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(MySubCouponPass);