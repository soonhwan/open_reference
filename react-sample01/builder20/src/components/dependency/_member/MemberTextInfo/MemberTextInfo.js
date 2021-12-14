import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, Icon } from 'components';
import styles from './MemberTextInfo.scss';
import utils from 'utils';

const MemberTextInfo = ({ mode, accountInfo, summary }) => {
  const getAccount = () => {
    if (!utils.isEmpty(accountInfo)) {
      const param = {
        size: 'B14',
        color: 'Dark'
      }
      const iconParam = {
        icon: 'sns' + accountInfo.sns,
        iconsize: 16
      }
    
      return (
        <div className={'MemberTextInfoAccount' + (!utils.isEmpty(accountInfo.sns) ? '' : ' no')}>
          <span>
            {!utils.isEmpty(accountInfo.sns) && <Icon {...iconParam}></Icon>}
            <TextRenderer {...param}>{accountInfo.name}</TextRenderer>
          </span>
        </div>
      )
    }

    return '';
  }
  const getSummary = () => {
    if (!utils.isEmpty(summary)) {
      return (
        <div className="MemberTextInfoSummary" dangerouslySetInnerHTML={{ __html: summary }} />
      )
    }

    return '';
  }

  return (
    <div className={'MemberTextInfo ' + mode}>
      <div className="MemberTextInfoInner">
        <div className="MemberTextInfoBody">
          <div className="MemberTextInfoBodyInner">
            {getAccount()}
            {getSummary()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(MemberTextInfo);