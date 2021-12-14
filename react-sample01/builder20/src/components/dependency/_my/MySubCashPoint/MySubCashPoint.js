import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Icon, TextRenderer, LinkRenderer, CashPoint } from 'components';
import styles from './MySubCashPoint.scss';
import utils from 'utils';

const MySubCashPoint = ({ cashPointOptions, prevEvent, onEvent }) => {
  const getLink = (option) => {
    const param = {
      className: 'MySubCashPointItemLink',
      onClick: (event) => {
        utils.triggerEvent('click_MySubCashPoint', onEvent, prevEvent, null, null, event)
      }
    }

    const titleParam = { size: 'B12B', color: 'Medium' }
    const iconParam = { icon: 'right', iconsize: 16 }
    const cashPointParam = { mode: option.type, price: utils.setComma(option.price), size: 'ENG26B', iconsize: 24 }

    return (
      <a {...param}>
        <div className="MySubCashPointItemLinkInfo">
          <TextRenderer {...titleParam}>{option.text}</TextRenderer>
          <Icon {...iconParam}></Icon>
        </div>
        <CashPoint {...cashPointParam}></CashPoint>
      </a>
    )
  }
  const getChargeLink = () => {
    const param = {
      mode: 'text',
      btnClass: 'btnSmall btnPoint10 btnBlock',
      size: 'B12',
      color: 'Point',
      prevEvent: prevEvent,
      onEvent: onEvent,
    }
    return (
      <div className="MySubCashPointItemChargeLink">
        <LinkRenderer {...param}>캐쉬충전</LinkRenderer>
      </div>
    )
  }
  const getOptions = () => {
    const tOption = cashPointOptions.map((option, index) => {
      return (
        <div className="MySubCashPointItem" key={index}>
          <div className="MySubCashPointItemInner">
            {getLink(option)}
            { option.type === 'cash' && getChargeLink()}
          </div>
        </div>
      )
    });

    return tOption;
  }
  return (
    <div className="MySubCashPointWrap">
      <div className="MySubCashPointInner">
        {getOptions()}
      </div>
    </div>
  )
}

export default withStyles(styles)(MySubCashPoint);