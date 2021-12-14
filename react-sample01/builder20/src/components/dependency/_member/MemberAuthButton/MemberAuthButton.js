import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer } from 'components';
import styles from './MemberAuthButton.scss';
import utils from 'utils';

const MemberAuthButton = ({ mode, btnLists, prevEvent, onEvent }) => {
  const getBtnList = () => {
    const tSns = btnLists.map((btnList, index) => {
      const param = {
        className: 'MemberAuthButtonItemLink',
        onClick: (event) => {
          utils.triggerEvent('click_MemberAuthButton', onEvent, prevEvent, null, null, event)
        }
      }

      const titleParam = {
        size: 'B14',
        color: 'Dark'
      }
      const descParam = {
        size: 'C10',
        color: 'Medium'
      }

      if (mode === 'idpass') {
        param.size = 'B12';
      }

      return (
        <div className="MemberAuthButtonItem" key={index}>
          <a {...param}>
            <TextRenderer {...titleParam}>{btnList.title}</TextRenderer>
            <TextRenderer {...descParam}>{btnList.desc}</TextRenderer>
          </a>
        </div>
      );
    })

    return (
      <div className="MemberAuthButtonBtn">
        {tSns}
      </div>
    );
  }

  return (
    <div className={'MemberAuthButton ' + mode}>
      <div className="MemberAuthButtonInner">
        <div className="MemberAuthButtonBody">
          <div className="MemberAuthButtonBodyInner">
          {getBtnList()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(MemberAuthButton);