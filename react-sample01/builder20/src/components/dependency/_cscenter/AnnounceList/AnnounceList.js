import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer } from 'components';
import styles from './AnnounceList.scss';
import utils from 'utils';
import { useState } from 'hooks';

const AnnounceList = ({ mode, lists, listValue }) => {
  const [selectedValue, setSelectedValue] = useState(listValue);

  const getItem = lists.map((item, index) => {
    const param = {
      mode: 'texticon',
      btnClass: 'AnnounceListItemHeaderLink',
      size: 'B14B',
      color: 'Dark',
      icon: 'downBlack',
      iconsize: 24,
      onEvent: (eventName, state, event) => {
        event.preventDefault();
        if (selectedValue === item.value) {
          setSelectedValue('');
        } else {
          setSelectedValue(item.value);
        }
      }
    }
    return (
      <div className={'AnnounceListItem' + (selectedValue === item.value ? ' open' : '')} key={index}>
        <div className="AnnounceListItemInner">
          <div className="AnnounceListItemHeader">
            <LinkRenderer {...param}><b>{item.title}</b><em>{item.regDt}</em></LinkRenderer>
          </div>
          <div className="AnnounceListItemCo" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
        </div>
      </div>
    )
  })
  return (
    <div className="AnnounceList">
      <div className="AnnounceListInner">
        {getItem}
      </div>
    </div>
  )
}

export default withStyles(styles)(AnnounceList);