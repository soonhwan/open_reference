import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './MemberIllInfo.scss';
import utils from 'utils';

const MemberIllInfo = ({ mode, thumb, title, summary, moreBtn }) => {
  const getThumb = () => {
    if (!utils.isEmpty(thumb)) {
      return (
        <div className="MemberIllInfoThumb">
          <img src={thumb} alt="" />
        </div>
      )
    }

    return '';
  }

  const getTitle = () => {
    if (!utils.isEmpty(title)) {
      return (
        <div className="MemberIllInfoTitle" dangerouslySetInnerHTML={{ __html: title }} />
      )
    }

    return '';
  }

  const getSummary = () => {
    if (!utils.isEmpty(summary)) {
      return (
        <div className="MemberIllInfoSummary" dangerouslySetInnerHTML={{ __html: summary }} />
      )
    }

    return '';
  }

  return (
    <div className={'MemberIllInfo ' + mode}>
      <div className="MemberIllInfoInner">
        <div className="MemberIllInfoBody">
          <div className="MemberIllInfoBodyInner">
            {getThumb()}
            {getTitle()}
            {getSummary()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(MemberIllInfo);