import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer } from 'components';
import styles from './MemberLoginList.scss';
import utils from 'utils';

const MemberLoginList = ({ mode, snsLists, prevEvent, onEvent }) => {
  const getSnsLogin = () => {
    const tSns = snsLists.map((snsList, index) => {
      const param = {
        mode: 'icontext',
        size: 'ST16',
        btnClass: 'btnLarge btnWhite btnBlock',
        color: 'Dark',
        icon: 'sns' + snsList.sns,
        iconsize: 22,
        onEvent: (event) => {
          utils.triggerEvent('click_MemberLoginList', onEvent, prevEvent, null, null, event)
        }
      }
      return (
        <div className="MemberLoginListItem" key={index}>
          <LinkRenderer {...param}>{snsList.text}</LinkRenderer>
        </div>
      );
    })

    return tSns;
  }

  return (
    <div className={'MemberLoginList ' + mode}>
      <div className="MemberLoginListInner">
        <div className="MemberLoginListBody">
          <div className="MemberLoginListBodyInner">
            {getSnsLogin()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(MemberLoginList);