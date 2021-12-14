import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer, Checkbox } from 'components';
import utils from 'utils';
import { useState } from 'hooks';
import styles from './CheckboxTerm.scss';

const CheckboxTerm = ({ mode, inputParam, subText, children, btnNm, prevEvent, onEvent }) => {
  const checkboxParam = {
    mode: 'basic',
    subText: subText,
    prevEvent: prevEvent,
    onEvent: onEvent
  }

  const getBtn = () => {
    const linkParam = {
      mode: 'text',
      size: 'B12B',
      color: 'Medium',
      onEvent: (event) => {
        utils.triggerEvent('click_CheckboxTerm', onEvent, prevEvent, null, null, event)
      }
    }
    return (
      <div className="CheckboxTermCell btn">
        <LinkRenderer {...linkParam}>{btnNm}</LinkRenderer>
      </div>
    )
  }

  return (
    <div className={'CheckboxTerm ' + mode }>
      <div className="CheckboxTermInner">
        <div className="CheckboxTermBody">
          <div className="CheckboxTermCell">
            <Checkbox {...inputParam} {...checkboxParam}>{children}</Checkbox>
          </div>
          {!utils.isEmpty(btnNm) && getBtn()}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(CheckboxTerm);