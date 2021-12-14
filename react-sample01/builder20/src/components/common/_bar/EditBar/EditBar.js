import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer, Checkbox } from 'components';
import styles from './EditBar.scss';
import { useState } from 'hooks';

const EditBar = ({ mode, optionNum, prevEvent, onEvent }) => {

  const changeSelectAll = (eventName, state, event) => {
    if (typeof onEvent === 'function') {
      onEvent(eventName, state, event)
    } 
  }

  const changeSelectExpiration = (eventName, state, event) => {
    if (typeof onEvent === 'function') {
      onEvent(eventName, state, event)
    } 
  }

  const changeSelectDelete = (eventName, state, event) => {
    if (typeof onEvent === 'function') {
      onEvent(eventName, state, event)
    } 
  }

  const getSelectAll = () => {
    const param = {
      name: 'aaa',
      formClass: 'inlineBlock',
      checked: false,
      disabled: false,
      readOnly: false,
      onEvent: (eventName, state, event) => {
        changeSelectAll('change_EditBarSelectAll', state, event);
      }
    }
    return (<Checkbox {...param}>전체 선택</Checkbox>);
  }

  const getSelectExpiration = () => {
    if (mode === 'expiration') {
      const param = {
        name: 'bbb',
        formClass: 'inlineBlock',
        checked: false,
        disabled: false,
        readOnly: false,
        onEvent: (eventName, state, event) => {
          changeSelectExpiration('change_EditBarSelectExpiration', state, event);
        }
      }
      return (<Checkbox {...param}>기간만료 선택</Checkbox>);
    }
  }

  const getSelectDelete = () => {
    let tLabel;
    if (optionNum === 0) {
      tLabel = '삭제';
    } else {
      tLabel = `${optionNum}개 삭제`;
    }

    const param = {
      size: optionNum === 0 ? 'B12' : 'B12B',
      color: optionNum === 0 ? 'Medium' : 'Point',
      btnClass: optionNum === 0 ? 'editDellink editDellinkDim' : 'editDellink',
      onEvent: (eventName, state, event) => {
        changeSelectDelete('change_EditBarSelectDelete');
      }
    }

    return (<LinkRenderer {...param}>{tLabel}</LinkRenderer>)
  }

  return (
    <div className="EditBar">
      <div className="EditBarInner">
        <div className="EditBarHeader">
          <div className="EditBarHeaderInner">
            {getSelectAll()}
            {getSelectExpiration()}
          </div>
        </div>
        <div className="EditBarBtn">
          {getSelectDelete()}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(EditBar);