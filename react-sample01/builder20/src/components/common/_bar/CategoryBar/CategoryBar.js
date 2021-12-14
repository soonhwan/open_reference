import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { LinkRenderer } from 'components';
import styles from './CategoryBar.scss';
import { useState } from 'hooks';

// mainValue를 받아서 class 분기를 하기 때문에 GNB 종속
const CategoryBar = ({ mainValue, categoryOptions, categoryValue, prevEvent, onEvent }) => {

  const CHANGE_CATEGORY_OPTION = 'change_CategoryBar';

  const triggerEvent = (event, value) => {
    let prevEventResult = true
    if (typeof prevEvent === 'function') {
      prevEventResult = prevEvent(CHANGE_CATEGORY_OPTION, categoryValue, value)
    }
    if (prevEventResult) {
      if (typeof onEvent === 'function') {
        onEvent(CHANGE_CATEGORY_OPTION, value, event)
      } 
    }
  }

  return (
    <div className="CategoryBar">
      <div className={'CategoryBarInner ' + mainValue}>
        {categoryOptions.map((categoryOption, index) => {
          const param = {
            mode: 'text',
            btnClass: categoryOption.value === categoryValue ? 'linkCategory linkCategorySel' : 'linkCategory',
            size: categoryOption.value === categoryValue ? 'B14B' : 'B14',
            color: categoryOption.value === categoryValue ? 'Dark' : 'Dark',
            onEvent: (eventName, state, event) => {
              triggerEvent(event, categoryOption.value);
            }
          }
          return <LinkRenderer key={index} {...param}>{categoryOption.text}</LinkRenderer>
        })}
      </div>
    </div>
  );
}

export default withStyles(styles)(CategoryBar);

