import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer } from 'components';
import styles from './IllInfoBox.scss';
import utils from 'utils';

const IllInfoBox = ({ mode, thumb, title, summary, moreBtn, prevEvent, onEvent }) => {
  const getThumb = () => {
    if (!utils.isEmpty(thumb)) {
      return (
        <div className="IllInfoBoxThumb">
          <img src={thumb} alt="" />
        </div>
      )
    }

    return '';
  }

  const getTitle = () => {
    if (!utils.isEmpty(title)) {
      return (
        <div className="IllInfoBoxTitle" dangerouslySetInnerHTML={{ __html: title }} />
      )
    }

    return '';
  }

  const getSummary = () => {
    if (!utils.isEmpty(summary)) {
      return (
        <div className="IllInfoBoxSummary" dangerouslySetInnerHTML={{ __html: summary }} />
      )
    }

    return '';
  }

  const getBtn = () => {
    if (!utils.isEmpty(moreBtn)) {
      const param = {
        mode: 'text',
        btnClass: 'btnLarge btnBlock',
        size: 'ST16',
        color: 'White',
        onEvent: (event) => {
          utils.triggerEvent('click_IllInfoBox', onEvent, prevEvent, null, null, event)
        }
      }

      return (
        <div className="IllInfoBoxMoreBtn">
          <LinkRenderer {...param}>{moreBtn}</LinkRenderer>
        </div>
      )
    }

    return '';
  }

  return (
    <div className={'IllInfoBox ' + mode}>
      <div className="IllInfoBoxInner">
        <div className="IllInfoBoxBody">
          <div className="IllInfoBoxBodyInner">
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

export default withStyles(styles)(IllInfoBox);