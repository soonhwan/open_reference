import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { PurchaseButton, TextRenderer, Icon } from 'components';
import styles from './PurchaseBox.scss';
import utils from 'utils';

const PurchaseBox = (props) => {
  const getOption = () => {
    const tOption = props.purchaseOption.map((option, index) => {
      const param = {
        mode: props.mode,
        prevEvent: props.prevEvent,
        onEvent: props.onEvent
      }
      return (<li key={index}>
        <PurchaseButton {...param} {...option}></PurchaseButton>
      </li>)
    });

    return tOption;
  }

  const getDimedInfo = () => {
    const infoParam = {
      size: 'B12',
      color: 'Drak',
    }
    if (!utils.isEmpty(props.purchaseInfo)) {
      return (
        <div className="PurchaseBoxInfo">
          <div className="PurchaseBoxInfoInner">
            <Icon icon="infoBlack" iconsize="16"></Icon>
            <TextRenderer {...infoParam}>{props.purchaseInfo}</TextRenderer>
          </div>
        </div>
      )
    }
    return '';
  }

  return (
    <div className="PurchaseBox">
      <div className="PurchaseBoxWrap">
        <div className="PurchaseBoxInner">
          <div className="PurchaseBoxArea">
            {getDimedInfo()}
            <ul>
              {getOption()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(PurchaseBox);