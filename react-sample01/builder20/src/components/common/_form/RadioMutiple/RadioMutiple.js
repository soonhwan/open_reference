import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, Radio } from 'components';
import styles from './RadioMutiple.scss';
import utils from 'utils';
import { useState } from 'hooks';

const RadioMutiple = ({ mode, requiredYn, labelHiddenYn, checkItems, children, infoType, infoMessage, prevEvent, onEvent }) => {
  const tRequired = (requiredYn === 'Y') ? ' required' : '';

  const getLabel = () => {
    const labelParam = {
      className: 'formRadioMutipleLabel' + tRequired
    }

    const textParam = {
      size: 'B14B',
      color: 'Dark'
    }

    return (
      <div {...labelParam}>
        <TextRenderer {...textParam}>{children}</TextRenderer>
      </div>
    )
  }

  const getMutipleRadio = () => {
    const tRadioGroup = checkItems.map((item, i) => {
      const RadioCustomParam = { ...item };
      RadioCustomParam.prevEvent = prevEvent;
      RadioCustomParam.onEvent = onEvent;
      return (
        <div className="formRadioMutipleItem" key={i}>
          <Radio {...RadioCustomParam}>{item.text}</Radio>
        </div>
      )
    });

    return tRadioGroup;
  }

  const getInfo = () => {
    if (utils.isEmpty(infoType) !== true) {
      return (
        <div className={'formRadioMutipleInfo ' + infoType} dangerouslySetInnerHTML={{ __html: infoMessage }}></div>
      )
    }
    return '';
  }

  return (
    <div className={'formRadioMutiple ' + mode}>
      {labelHiddenYn === 'Y' ? '' : getLabel()}
      <div className="formRadioMutipleGroup">
        <div className="formRadioMutipleGroupInner">
          {getMutipleRadio()}
        </div>
        {getInfo()}
      </div>
    </div>
  )
}

export default withStyles(styles)(RadioMutiple);