import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { SubHeader, PrimaryBar, List } from 'components';
import styles from './RankingBox.scss';
import { useState } from 'hooks';

const RankingBox = (props) => {
  const headerParam = {
    prevEvent: props.prevEvent,
    onEvent: props.onEvent
  }
  const keywordParam = {
    itemList: props.subOptions,
    subValue: props.subValue,
    prevEvent: props.prevEvent,
    onEvent: props.onEvent
  }
  const listParam = {
    infoList: props.infoList,
    prevEvent: props.prevEvent,
    onEvent: props.onEvent
  }
  return (
    <div className="RankingBox">
      <div className="RankingBoxInner">
        <SubHeader mode="offeringLink" title={props.title} {...headerParam} />
        <PrimaryBar mode="rankingNav" {...keywordParam}></PrimaryBar>
        <List mode="list" itemRenderer="rankingOffering" {...listParam} />
      </div>
    </div>
  )
}

export default withStyles(styles)(RankingBox);