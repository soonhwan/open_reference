import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, LinkRenderer } from 'components';
import styles from './RoundInfoBox.scss';
import utils from 'utils';

const RoundInfoBox = ({ mode, title, desc, firstBtnNm, secondBtnNm, prevEvent, onEvent }) => {
  const getDesc = () => {
    const titleParam = {
      size: 'ST16B',
      color: 'Dark',
      textClass: 'TextBlock RoundInfoTextTitle',
      text: title
    }

    const descParam = {
      size: 'B14',
      color: 'Medium',
      textClass: 'TextBlock RoundInfoTextDesc',
      text: desc
    }

    return (
      <Fragment>
        {utils.isEmpty(title) || <TextRenderer {...titleParam}></TextRenderer>}
        <TextRenderer {...descParam}></TextRenderer>
      </Fragment>
    )
  }
  
  const getBtn = () => {
    const param = {
      mode: 'text',
      size: 'B12',
      color: 'Medium',
      btnClass: 'btnSmall btnLightTrans',
      onEvent: (event) => {
        utils.triggerEvent('click_RoundInfoBox', onEvent, prevEvent, null, null, event)
      }
    }

    if (mode === 'subscribe') {
      param.size = 'ST16';
      param.color = 'White';
      param.btnClass = 'btnLarge btnPoint';
    }

    return (
      <div className="RoundInfoBoxBtn">
        <LinkRenderer {...param}>{firstBtnNm}</LinkRenderer>
      </div>
    )
  }

  return (
    <div className={'RoundInfoBox ' + mode}>
      <div className="RoundInfoBoxInner">
        <div className="RoundInfoBoxBody">
          <div className="RoundInfoBoxText">
            {getDesc()}
          </div>
          {(utils.isEmpty(firstBtnNm) && utils.isEmpty(secondBtnNm)) ? '' : getBtn()}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(RoundInfoBox);