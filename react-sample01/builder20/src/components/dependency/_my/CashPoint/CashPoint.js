import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, Icon } from 'components';
import styles from './CashPoint.scss';
import utils from 'utils';
import { useState } from 'hooks';

const CashPoint = ({ mode, price, size, iconsize }) => {
  const textParam = {
    size: size,
    color: (mode === 'cash') ? 'Point' : 'Dark',
  }
  const iconParam = {
    icon: mode,
    iconsize: iconsize
  }
  return (
    <div className={'CashPointText ' + mode}>
      <TextRenderer {...textParam}>{price}</TextRenderer>
      <Icon {...iconParam}></Icon>
    </div>
  )
}

export default withStyles(styles)(CashPoint);