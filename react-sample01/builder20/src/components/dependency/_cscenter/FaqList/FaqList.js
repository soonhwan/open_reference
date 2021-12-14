import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer } from 'components';
import styles from './FaqList.scss';
import utils from 'utils';
import { useState } from 'hooks';

const FaqList = ({ mode, lists, listValue }) => {
  const [selectedValue, setSelectedValue] = useState(listValue);

  const getItem = lists.map((item, index) => {
    const param = {
      mode: 'texticon',
      btnClass: 'FaqListItemHeaderLink',
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
    const tNum = (index + 1) < 10 ? '0' + (index + 1) : (index + 1);
    return (
      <div className={'FaqListItem' + (selectedValue === item.value ? ' open' : '')} key={index}>
        <div className="FaqListItemInner">
          <div className="FaqListItemHeader">
            <LinkRenderer {...param}><em>{tNum}</em> <b>{item.title}</b></LinkRenderer>
          </div>
          <div className="FaqListItemCo" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
        </div>
      </div>
    )
  })
  return (
    <div className="FaqList">
      <div className="FaqListInner">
        {getItem}
      </div>
    </div>
  )
}

export default withStyles(styles)(FaqList);