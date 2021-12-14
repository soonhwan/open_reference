import React, { Fragment, memo } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { TextRenderer, LinkRenderer } from 'components';
import styles from './Lnb.scss';
import { useState } from 'hooks';
import { logConfig } from '_constants'

const Lnb = (props) => {
  const getLnbUtil = ({ lnbUtil }) => {
    return (
      <div className="LnbUtil">
        {lnbUtil.map((util, index) => {
          const param = {
            mode: 'text',
            size: 'ST16',
            color: 'Dark'
          }
          return <LinkRenderer key={index} {...param}>{util.text}</LinkRenderer>
        })}
      </div>
    );
  }
  
  logConfig.render && console.log('%r Lnb')
  return (
    <div className="Lnb">
      <div className="LnbInner">
        <div className="LnbHeader">
          <TextRenderer size="ST16B" color="Dark" textClass="Ellipsis">{props.lnbTitle}</TextRenderer>
        </div>
        {props.lnbUtil && getLnbUtil(props)}
      </div>
    </div>
  );
}

export default withStyles(styles)(memo(Lnb));