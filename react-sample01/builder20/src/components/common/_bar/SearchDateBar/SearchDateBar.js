import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { PurchaseSearch, LinkRenderer } from 'components';
import styles from './SearchDateBar.scss';
import { useState } from 'hooks';

const SearchDateBar = ({ mode, title, options, optionValue, prevEvent, onEvent }) => {
  const [selectedValue, setSelectedValue] = useState(optionValue);

  const clickDropdown = (eventName, state, event) => {
    if (typeof onEvent === 'function') {
      onEvent(eventName, state, event)
    } 
  }

  const getHeader = () => {
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
        clickDropdown('click_SearchDateBarDropdown');
      }
    }

    return (
      <div className="SearchDateBarHeader">
        <div className="SearchDateBarHeaderInner">
          <LinkRenderer {...param}>{tTitle}</LinkRenderer>
        </div>
      </div>
    )
  }

  const getPurchaseSearch = () => {
    const param = {
      name: 'aaa',
      placeholder: '구매목록 내 작품명, 작가',
      disabled: false,
      readOnly: false
    }
    return (<div className="SearchDateBarValue">
      <PurchaseSearch {...param}></PurchaseSearch>
    </div>)
  }

  return (
    <div className="SearchDateBar">
      <div className="SearchDateBarInner">
        {getHeader()}
        {getPurchaseSearch()}
      </div>
    </div>
  )
}

export default withStyles(styles)(SearchDateBar);