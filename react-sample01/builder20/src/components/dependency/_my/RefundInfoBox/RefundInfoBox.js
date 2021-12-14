import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { AccountBox, TextRenderer } from 'components';
import styles from './RefundInfoBox.scss';
import utils from 'utils';
import { useState } from 'hooks';

const RefundInfoBox = ({ mode, accountInfo }) => {
  const getBody = () => {
    const dtParam = {
      size: 'B14',
      color: 'Medium',
    }
    const ddParam = {
      size: 'B14B',
      color: 'Dark',
    }
    const errorParam = {
      size: 'B14B',
      color: 'Error',
    }
    return (
      <div className="RefundInfoBoxBody">
        <ul>
          <li><dl><dt><TextRenderer {...dtParam}>unknown 캐쉬</TextRenderer></dt><dd><TextRenderer {...ddParam}><TextRenderer {...errorParam}>미충족</TextRenderer> 2,000원</TextRenderer></dd></dl></li>
          <li><dl><dt><TextRenderer {...dtParam}>북스캐쉬</TextRenderer></dt><dd><TextRenderer {...ddParam}><TextRenderer {...errorParam}>미충족</TextRenderer> 0원</TextRenderer></dd></dl></li>
        </ul>
        <ul className="total">
          <li><dl><dt><TextRenderer {...ddParam}>총금액</TextRenderer></dt><dd><TextRenderer {...ddParam}>2,000원</TextRenderer></dd></dl></li>
        </ul>
      </div>
    )
  }

  return (
    <div className="RefundInfoBoxWrap">
      <div className="RefundInfoBoxInner">
        <div className="RefundInfoBoxCo">
          {getBody()}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(RefundInfoBox);