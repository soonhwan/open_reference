import React, { memo } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer } from 'components';
import styles from './ListNoResults.scss';
import utils from 'utils';

const ListNoResults = ({ mode, thumb, title, summary, moreBtn, prevEvent, onEvent }) => {
  const getThumb = () => {
    if (!utils.isEmpty(thumb)) {
      return (
        <div className="ListNoResultsThumb">
          <img src={thumb} alt="" />
        </div>
      )
    }

    return '';
  }

  const getTitle = () => {
    if (!utils.isEmpty(title)) {
      return (
        <div className="ListNoResultsTitle" dangerouslySetInnerHTML={{ __html: title }} />
      )
    }

    return '';
  }

  const getSummary = () => {
    if (!utils.isEmpty(summary)) {
      return (
        <div className="ListNoResultsSummary" dangerouslySetInnerHTML={{ __html: summary }} />
      )
    }

    return '';
  }

  const getBtn = () => {
    if (!utils.isEmpty(moreBtn)) {
      const param = {
        mode: 'text',
        btnClass: 'btnLarge btnWhite btnBlock',
        size: 'ST16',
        color: 'Drak',
        onEvent: (event) => {
          utils.triggerEvent('click_ListNoResults_TotalSearch', onEvent, prevEvent, null, null, event)
        }
      }

      return (
        <div className="ListNoResultsMoreBtn">
          <LinkRenderer {...param}>{moreBtn}</LinkRenderer>
        </div>
      )
    }

    return '';
  }

  return (
    <div className="ListNoResults">
      <div className="ListNoResultsInner">
        <div className="ListNoResultsBox">
          <div className="ListNoResultsBoxInner">
            {getThumb()}
            {getTitle()}
            {getSummary()}
          </div>
        </div>
      </div>
      {getBtn()}
    </div>
  )
}

export default withStyles(styles)(memo(ListNoResults));