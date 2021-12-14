import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, Select } from 'components';
import styles from './SelectMutiple.scss';
import utils from 'utils';
import { useState } from 'hooks';

const SelectMutiple = ({ requiredYn, selectItems, children, infoType, infoMessage }) => {
  const tRequired = (requiredYn === 'Y') ? ' required' : '';

  const getLabel = () => {
    const labelParam = {
      className: 'formSelectMutipleLabel' + tRequired
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

  const getMutipleSelect = () => {
    const tSelectGroup = selectItems.map((item, i) => {
      const selectCustomParam = { ...item };
      console.log(selectCustomParam);
      return (
        <div className="formSelectMutipleItem" key={i}>
          <Select {...selectCustomParam}>{item.text}</Select>
        </div>
      )
    });

    return tSelectGroup;
  }

  const getInfo = () => {
    if (utils.isEmpty(infoType) !== true) {
      return (
        <div className={'formSelectMutipleInfo ' + infoType} dangerouslySetInnerHTML={{ __html: infoMessage }}></div>
      )
    }
    return '';
  }

  return (
    <div className={'formSelectMutiple'}>
      {getLabel()}
      <div className="formSelectMutipleGroup">
        <div className="formSelectMutipleGroupInner">
          {getMutipleSelect()}
        </div>
        {getInfo()}
      </div>
    </div>
  )
}

export default withStyles(styles)(SelectMutiple);