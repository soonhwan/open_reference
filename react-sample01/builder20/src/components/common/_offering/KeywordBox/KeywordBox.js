import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { SubHeader, SecondaryBar } from 'components';
import styles from './KeywordBox.scss';
import { useState } from 'hooks';

const KeywordBox = (props) => {
  const headerParam = {
    prevEvent: props.prevEvent,
    onEvent: props.onEvent
  }
  const keywordParam = {
    subOptions: props.subOptions,
    subValue: props.subValue,
    prevEvent: props.prevEvent,
    onEvent: props.onEvent
  }
  return (
    <div className="KeywordBox">
      <div className="KeywordBoxInner">
        <SubHeader mode="offeringBasic" title={props.title} {...headerParam} />
        <SecondaryBar mode="keyword" {...keywordParam}></SecondaryBar>
      </div>
    </div>
  )
}

export default withStyles(styles)(KeywordBox);