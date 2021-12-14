import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import utils from 'utils';
import { useState, useDispatch } from 'hooks';
import { LinkRenderer } from 'components';
import styles from './Dropdown.scss';
import * as baseActions from 'store/modules/base';

const Dropdown = ({ initText, options, optionValue, prevEvent, onEvent }) => {
  const getSelectedText = (value) => {
    const result = options.filter((option, index) => {
      return option.value === value;
    })

    if (result.length > 0) {
      return result[0].text
    } else {
      return initText
    }
  }
  
  const dispatch = useDispatch()
  const [selectedText, setSelectedText] = useState(getSelectedText(optionValue))
  const [selectedValue, setSelectedValue] = useState(optionValue)

  const param = {
    mode: 'texticon',
    size: 'B14',
    color: 'Dark',
    btnClass: 'searchDatelink',
    icon: 'dropup',
    iconsize: 20,
    onEvent: (eventName, state, event) => {
      // 클릭 시 dropboxPopup 열기
      dispatch(baseActions.openPopup({
        mode: 'dropdown',
        title: initText,
        options: options,
        optionValue: selectedValue,
        prevEvent: prevEvent,
        onEvent: (eventName, state, event) => {
          // console.log('dropboxPopup -> change', eventName, state)
          setSelectedValue(state)
          setSelectedText(getSelectedText(state))
          dispatch(baseActions.closePopup())
          onEvent('change_Dropdown', state, event); // eventName, state, event
        }
      }))
    }
  }

  // TODO. class 변경 예정
  return (
    <div className="SearchDateBarHeader">
      <div className="SearchDateBarHeaderInner">
        <LinkRenderer {...param}>{selectedText}</LinkRenderer>
      </div>
    </div>
  )
}

export default withStyles(styles)(Dropdown);