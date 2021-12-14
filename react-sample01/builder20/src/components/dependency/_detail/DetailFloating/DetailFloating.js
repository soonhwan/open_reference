import React, { Fragment } from 'react'
import { useEffect } from 'hooks';
import withStyles from 'isomorphic-style-loader/withStyles'
import { PurchaseBox, TextRenderer, SecondaryBar } from 'components';
import styles from './DetailFloating.scss';
import utils from 'utils';

const DetailFloating = (props) => {
  const getTitle = () => {
    const param = {
      size: 'ST18B',
      color: 'Dark',
      textClass: 'LineEll2'
    }
    return (
      <div className="DetailFloatingBoxCell DetailFloatingHeader">
        <TextRenderer {...param}>{props.productItem.prodNm}</TextRenderer>
      </div>
    )
  }

  const getPurchase = () => {
    if (!utils.isEmpty(props.purchaseOption)) {
      const param = {
        mode: props.mode,
        purchaseOption: props.purchaseOption,
        purchaseInfo: props.purchaseInfo,
        prevEvent: props.prevEvent,
        onEvent: props.onEvent
      }
      return (
        <div className="DetailFloatingBoxCell DetailFloatingPurchase">
          <PurchaseBox {...param} />
        </div>
      )
    }
    return '';
  }

  const getSecondaryBar = () => {
    const param = {
      mode: 'detailTab',
      subOptions: props.subOptions,
      subValue: props.subValue,
      prevEvent: props.prevEvent,
      onEvent: props.onEvent
    }
    return (
      <div className="DetailFloatingNav">
        <SecondaryBar {...param}></SecondaryBar>
      </div>
    )
  }

  return (
    <div className="DetailFloatingWrap">
      <div className="DetailFloatingInner">
        <div className="DetailFloatingBox">
          {getTitle()}
          {getPurchase()}
        </div>
        {getSecondaryBar()}
      </div>
    </div>
  )
}

export default withStyles(styles)(DetailFloating);