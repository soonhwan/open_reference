import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer } from 'components';
import styles from './LnbSub.scss';
import { useState } from 'hooks';

const LnbSub = ({ title, summary }) => {
  const getTitle = () => {
    if (title) {
      const param = {
        size: 'B14',
        color: 'Dark'
      }
      return (
        <div className="LnbSubHeader">
          <TextRenderer {...param}>{title}</TextRenderer>
        </div>
      );
    }
  }

  const getSummary = () => {
    const param = {
      size: 'B14',
      color: 'Medium'
    }
    return (
      <div className="LnbSubSummary">
        <TextRenderer {...param}>{summary}</TextRenderer>
      </div>
    );
  }

  return (
    <div className="LnbSub">
      <div className="LnbSubInner">
        {getTitle()}
        {getSummary()}
      </div>
    </div>
  )
}

export default withStyles(styles)(LnbSub);