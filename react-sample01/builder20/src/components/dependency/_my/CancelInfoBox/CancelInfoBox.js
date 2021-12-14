import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { AccountBox, TextRenderer } from 'components';
import styles from './CancelInfoBox.scss';
import utils from 'utils';
import { useState } from 'hooks';

const CancelInfoBox = ({ mode, accountInfo }) => {
  const getHeader = () => {
    const param = {
      size: 'B14B',
      color: 'Dark',
      textClass: 'CancelInfoBoxTitle'
    }

    return (
      <div className="CancelInfoBoxHeader">
        <TextRenderer {...param}>현재 사용중인 아이디</TextRenderer>
        <AccountBox mode="cancel" accountInfo={accountInfo} />
      </div>
    )
  }

  const getBody = () => {
    const dtParam = {
      size: 'B14',
      color: 'Medium',
    }
    const ddParam = {
      size: 'B14B',
      color: 'Point',
    }
    return (
      <div className="CancelInfoBoxBody">
        <ul>
          <li><dl><dt><TextRenderer {...dtParam}>연결된 휴대기기 수</TextRenderer></dt><dd><TextRenderer {...ddParam}>4대</TextRenderer></dd></dl></li>
          <li><dl><dt><TextRenderer {...dtParam}>보유 쿠폰</TextRenderer></dt><dd><TextRenderer {...ddParam}>5장</TextRenderer></dd></dl></li>
        </ul>
        <ul>
          <li><dl><dt><TextRenderer {...dtParam}>보유 unknown 캐쉬</TextRenderer></dt><dd><TextRenderer {...ddParam}>2,000 P</TextRenderer></dd></dl></li>
          <li><dl><dt><TextRenderer {...dtParam}>보유 게임 캐쉬</TextRenderer></dt><dd><TextRenderer {...ddParam}>20,000 P</TextRenderer></dd></dl></li>
        </ul>
        <ul>
          <li><dl><dt><TextRenderer {...dtParam}>보유 북스캐쉬</TextRenderer></dt><dd><TextRenderer {...ddParam}>1,000 ©</TextRenderer></dd></dl></li>
          <li><dl><dt><TextRenderer {...dtParam}>보유 북스포인트</TextRenderer></dt><dd><TextRenderer {...ddParam}>0 ℗</TextRenderer></dd></dl></li>
        </ul>
      </div>
    )
  }

  return (
    <div className="CancelInfoBoxWrap">
      <div className="CancelInfoBoxInner">
        <div className="CancelInfoBoxCo">
          {getHeader()}
          {getBody()}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(CancelInfoBox);