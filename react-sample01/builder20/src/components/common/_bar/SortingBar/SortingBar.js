import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, LinkRenderer, Checkbox } from 'components';
import styles from './SortingBar.scss';
import { useMemo, useCallback, useState, useEffect } from 'hooks';
import utils from 'utils';
import { logConfig } from '_constants'

const EVENT_CHANGE_SORTING_ITEM = 'change_SortingBar_item'
const EVENT_CHANGE_SORTING_COMPLETED = 'change_SortingBar_completed'

const SortingBar = ({ mode, title, itemList, selectedItemValue, itemValueKey, itemTextKey, options, optionValue, prevEvent, onEvent }) => {

  const _itemList = useMemo(() => utils.isEmptyList(itemList) ? [] : itemList, [itemList])
  const _itemValueKey = useMemo(() => utils.isEmpty(itemValueKey) ? 'value' : itemValueKey, [itemValueKey])
  const _itemTextKey = useMemo(() => utils.isEmpty(itemTextKey) ? 'text' : itemTextKey, [itemTextKey])

  const [_selectedItemValue, setSelectedItemValue] = useState(selectedItemValue);
  const [_selectedItem, setSelectedItem] = useState(utils.findItemByValue(_itemList, _selectedItemValue, _itemValueKey));
  useEffect(() => {
    // console.log('- SortingBar useEffect ', selectedItemValue, _selectedItem, _itemList, _itemValueKey)
    setSelectedItemValue(selectedItemValue)
    // selectedItemValue은 변경되었는데 (외부 전달) 내부 선택값이 변경되지 않은 경우 강제로 변경
    if (_selectedItem != null && _selectedItem[_itemValueKey] !== selectedItemValue) {
      setSelectedItem(utils.findItemByValue(_itemList, selectedItemValue, _itemValueKey))
    }
  }, [selectedItemValue, _selectedItem, _itemList, _itemValueKey])

  // dropbox value
  const [selectedValue, setSelectedValue] = useState(optionValue);

  const triggerEvent = useCallback((event, item) => {
    let prevEventResult = true
    if (typeof prevEvent === 'function') {
      prevEventResult = prevEvent(EVENT_CHANGE_SORTING_ITEM, _selectedItem, item)
    }
    if (prevEventResult && item) {
      setSelectedItem(item)
      setSelectedItemValue(item[_itemValueKey])
      if (typeof onEvent === 'function') {
        onEvent(EVENT_CHANGE_SORTING_ITEM, item, event)
      } 
    }
  }, [_selectedItem, _itemValueKey, prevEvent, onEvent])

  const clickDropdown = (eventName, state, event) => {
    if (typeof onEvent === 'function') {
      onEvent(eventName, state, event)
    } 
  }

  const clickSelect = (eventName, state, event) => {
    if (typeof onEvent === 'function') {
      onEvent(eventName, state, event)
    } 
  }

  const getHeaderBasic = () => {
    const tTitle = (typeof title === 'number') ? `총 ${title}권` : title;
    const param = {
      size: 'B14',
      color: 'Dark',
      textClass: 'Ellipsis'
    }

    return (
      <div className="SortingBarHeader">
        <div className="SortingBarHeaderInner">
          <TextRenderer {...param}>{tTitle}</TextRenderer>
        </div>
      </div>
    )
  }
  const getHeaderDropdown = () => {
    let tTitle;
    if (selectedValue) {
      tTitle = options.filter((option, index) => {
        return option.value === selectedValue;
      })[0].text;
    } else {
      tTitle = title;
    }

    const param = {
      mode: 'texticon',
      size: 'B14',
      color: 'Dark',
      btnClass: 'searchDatelink',
      icon: 'dropup',
      iconsize: 20,
      onEvent: (eventName, state, event) => {
        clickDropdown('click_SortingBar_DropDown');
      }
    }

    return (
      <div className="SortingBarHeader">
        <div className="SortingBarHeaderInner">
          <LinkRenderer {...param}>{tTitle}</LinkRenderer>
        </div>
      </div>
    )
  }

  const getHeaderSelected = () => {
    const param = {
      name: 'aaa',
      formClass: 'inlineBlock',
      checked: false,
      disabled: false,
      readOnly: false,
      onEvent: (eventName, state, event) => {
        clickSelect('change_SortingBar_Selected', state, event);
      }
    }

    return (
      <div className="SortingBarHeader">
        <div className="SortingBarHeaderInner SortingBarHeaderSelected">
          <Checkbox {...param}>{title}</Checkbox>
        </div>
      </div>
    );
  }

  const getHeaderNoTitle = () => {
    return (
      <div className="SortingBarHeader"></div>
    );
  }

  const getHeader = () => {
    if (mode === 'basic' || mode === 'completed') {
      return getHeaderBasic();
    } else if (mode === 'dropdown') {
      return getHeaderDropdown();
    } else if (mode === 'selected') {
      return getHeaderSelected();
    } else if (mode === 'notitle') {
      return getHeaderNoTitle();
    } else {
      return getHeaderBasic();
    }
  }
  const getCompleted = () => {
    if (mode === 'completed') {
      const param = {
        name: 'aaa',
        checked: false,
        disabled: false,
        readOnly: false,
        onEvent: (eventName, state, event) => {
          // eventNm, onEvent, prevEvent, value, oldValue, event
          utils.triggerEvent(EVENT_CHANGE_SORTING_COMPLETED, onEvent, prevEvent, state, !state, event)
        }
      }
      return (<div className="SortingBarCompleted">
        <Checkbox {...param}>완결</Checkbox>
      </div>);
    }
  }
  const getOption = () => {
    const tOption = itemList?.map((item, index) => {
      const param = {
        size: 'B12',
        color: item[_itemValueKey] !== _selectedItemValue ? 'Medium' : 'Dark',
        btnClass: item[_itemValueKey] !== _selectedItemValue ? 'sortlink' : 'sortlink sortlinkSel',
        onEvent: (eventName, state, event) => {
          triggerEvent(event, item);
        }
      }

      return (<li key={index}>
        <LinkRenderer {...param}>{item[_itemTextKey]}</LinkRenderer>
      </li>)
    });

    return tOption;
  }

  logConfig.render && console.log('%r SortingBar')
  return (
    <div className="SortingBar">
      <div className="SortingBarInner">
        {getHeader()}
        {getCompleted()}
        <div className="SortingBarOption">
          <ul>
            {getOption()}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(SortingBar);