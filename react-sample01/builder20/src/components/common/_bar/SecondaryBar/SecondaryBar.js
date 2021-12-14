import React from 'react';
import { useState, useEffect } from 'hooks';
import withStyles from 'isomorphic-style-loader/withStyles';
import { LinkRenderer } from 'components';
import styles from './SecondaryBar.scss';

const SecondaryBar = ({ mode, subOptions, subValue, prevEvent, onEvent }) => {
  const [selectedValue, setSelectedValue] = useState(subValue);

  useEffect(() => {
    setSelectedValue(subValue);
  }, [subValue]);

  const CHANGE_MAIN_OPTION = 'change_SecondaryBar';

  const triggerEvent = (event, option) => {
    let prevEventResult = true
    if (typeof prevEvent === 'function') {
      prevEventResult = prevEvent(CHANGE_MAIN_OPTION, subOptions, option)
    }
    if (prevEventResult && option) {
      setSelectedValue(option.value);
      if (typeof onEvent === 'function') {
        onEvent(CHANGE_MAIN_OPTION, option, event)
      } 
    }
  }

  const getSlideItem = subOptions.map((item, index) => {
    const param = {
      mode: 'text',
      size: 'B14',
      color: 'Dark',
      num: index,
      btnClass: item.value !== selectedValue ? mode + 'link' : mode + 'link ' + mode + 'linkSel',
      onEvent: (eventName, state, event) => {
        triggerEvent(event, item);
      }
    }

    return (
      <li key={index}><LinkRenderer {...param}>{item.text}</LinkRenderer></li>
    );
  })


  return (
    <div className={'SecondaryBar ' + mode}>
      <div className="SecondaryBarWrap">
        <div className="SecondaryBarInner">
          <ul>
            {getSlideItem}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(SecondaryBar);