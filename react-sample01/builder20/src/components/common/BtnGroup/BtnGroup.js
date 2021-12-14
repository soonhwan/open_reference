import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { LinkRenderer } from 'components';
import styles from './BtnGroup.scss';
import utils from 'utils';

const BtnGroup = ({ mode, firstBtnNm, firstDisabledYn, secondBtnNm, prevEvent, onEvent }) => {
  const getSecondBtn = () => {
    const param = {
      mode: 'text',
      size: 'ST16',
      color: 'Dark',
      btnClass: 'btnLarge btnWhite btnBlock',
      onEvent: (event) => {
        utils.triggerEvent('click_BtnGroup_secondBtn', onEvent, prevEvent, null, null, event)
      }
    }

    if (!utils.isEmpty(secondBtnNm)) {
      return (
        <div className="BtnGroupBoxCell">
          <LinkRenderer {...param}>{secondBtnNm}</LinkRenderer>
        </div>
      )
    }
    return '';
  }

  const getFirstBtn = () => {
    const param = {
      mode: firstDisabledYn === 'Y' ? 'textno' : 'text',
      size: 'ST16',
      color: 'White',
      btnClass: firstDisabledYn === 'Y' ? 'btnLarge btnDark10 btnBlock' : 'btnLarge btnBlock',
      onEvent: (event) => {
        utils.triggerEvent('click_BtnGroup_firstBtn', onEvent, prevEvent, null, null, event)
      }
    }

    return (
      <div className="BtnGroupBoxCell">
        <LinkRenderer {...param}>{firstBtnNm}</LinkRenderer>
      </div>
    )
  }
  const getBtn = () => {
    if (mode === 'row') {
      return (
        <Fragment>
          {getFirstBtn()}
          {getSecondBtn()}
        </Fragment>
      )      
    } else {
      return (
        <Fragment>
          {getSecondBtn()}
          {getFirstBtn()}
        </Fragment>
      )
    }
  }

  return (
    <div className={'BtnGroup ' + mode}>
      <div className="BtnGroupInner">
        <div className="BtnGroupBox">
          {getBtn()}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(BtnGroup);