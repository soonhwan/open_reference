import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer } from 'components';
import styles from './DetailEventList.scss';
import utils from 'utils';
import PropTypes from 'prop-types';

const CLICK_DETAILEVENTLIST_TIMEDEAL = 'click_DetailEventList_timedeal';
const CLICK_DETAILEVENTLIST_EVENT = 'click_DetailEventList_event';
const CLICK_DETAILEVENTLIST_COUPON = 'click_DetailEventList_coupon';

const DetailEventList = (props) => {
  // 타임딜 생성
  const getDetailTimeDeal = () => {
    let timeDealTxt = '';
    let timeDealType = 0;
    if (props.timeDealTitle) {
      timeDealTxt = props.timeDealTitle;
      timeDealType = 1;
    } else if (props.couponEventTitle) {
      timeDealTxt = props.couponEventTitle;
      timeDealType = 2;
    } else if (props.timeDealTitle || props.couponEventTitle) {
      timeDealTxt = props.timeDealTitle;
      timeDealType = 1;
    }
    const param = {
      mode: 'icontext',
      btnClass: 'btnDetailEventTimeDeal',
      size: 'B14',
      color: 'Point',
      textClass: 'Ellipsis',
      icon: 'timeDealColor',
      iconsize: 20,
      prevEvent: props.prevEvent,
      onEvent: (eventName, state, event) => {
        props.onEvent(CLICK_DETAILEVENTLIST_TIMEDEAL, timeDealType, event)
      }
    }
    return (
      <div className="DetailEventListItem DetailEventListTimeDeal">
        <LinkRenderer {...param}>{props.timeDealTitle || props.couponEventTitle}</LinkRenderer>
      </div>
    )
  }

  // 이벤트 생성
  const getDetailEvent = () => {
    const param = {
      mode: 'icontext',
      btnClass: 'btnDetailEventEvent',
      size: 'B14',
      color: 'Dark',
      textClass: 'Ellipsis',
      icon: 'eventColor',
      iconsize: 20,
      prevEvent: props.prevEvent,
      onEvent: (eventName, state, event) => {
        props.onEvent(CLICK_DETAILEVENTLIST_EVENT, state, event)
      }
    }
    return (
      <div className="DetailEventListItem DetailEventListEvent">
        <LinkRenderer {...param}>현재 진행하고 있는 이벤트를 확인하세요</LinkRenderer>
      </div>
    )
  }

  // 쿠폰 생성
  const getDetailCoupon = () => {
    const param = {
      mode: 'icontext',
      btnClass: 'btnDetailEventCoupon',
      size: 'B14',
      color: 'Dark',
      textClass: 'Ellipsis',
      icon: 'couponColor',
      iconsize: 20,
      prevEvent: props.prevEvent,
      onEvent: (eventName, state, event) => {
        props.onEvent(CLICK_DETAILEVENTLIST_COUPON, state, event)
      }
    }
    return (
      <div className="DetailEventListItem DetailEventListCoupon">
        <LinkRenderer {...param}>추가로 할인되는 쿠폰을 확인하세요</LinkRenderer>
      </div>
    )
  }

  return (
    <div className="DetailEventListWrap">
      <div className="DetailEventListInner">
        <div className="DetailEventListBox">
          {(props.timeDealTitle || props.couponEventTitle) && getDetailTimeDeal()}
          {props.promotionYn && getDetailEvent()}
          {props.couponYn && getDetailCoupon()}
        </div>
      </div>
    </div>
  )
}

DetailEventList.propTypes = {
  promotionYn: PropTypes.bool.isRequired,
  couponYn: PropTypes.bool.isRequired,
  timeDealTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  couponEventTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}

DetailEventList.defaultProps = {
  promotionYn: false,
  couponYn: false,
}

export default withStyles(styles)(DetailEventList);