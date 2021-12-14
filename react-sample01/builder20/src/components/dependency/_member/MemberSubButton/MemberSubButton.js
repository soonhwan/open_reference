import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer } from 'components';
import styles from './MemberSubButton.scss';
import utils from 'utils';

const MemberSubButton = ({ mode, btnLists, summary, prevEvent, onEvent }) => {
  const getBtnList = () => {
    const tSns = btnLists.map((btnList, index) => {
      const param = {
        mode: 'text',
        size: 'B14',
        color: 'Medium',
        onEvent: (event) => {
          utils.triggerEvent('click_MemberSubButton', onEvent, prevEvent, null, null, event)
        }
      }

      if (mode === 'idpass') {
        param.size = 'B12';
      }

      return (
        <div className="MemberSubButtonItem" key={index}>
          <LinkRenderer {...param}>{btnList.text}</LinkRenderer>
        </div>
      );
    })

    return (
      <div className="MemberSubButtonBtn">
        {tSns}
      </div>
    );
  }

  const getSummary = () => {
    if (!utils.isEmpty(summary)) {
      return (
        <div className="MemberSubButtonSummary" dangerouslySetInnerHTML={{ __html: summary }} />
      )
    }

    return '';
  }

  return (
    <div className={'MemberSubButton ' + mode}>
      <div className="MemberSubButtonInner">
        <div className="MemberSubButtonBody">
          <div className="MemberSubButtonBodyInner">
            {getSummary()}
            {getBtnList()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(MemberSubButton);