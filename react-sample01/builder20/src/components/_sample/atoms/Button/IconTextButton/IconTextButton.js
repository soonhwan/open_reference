import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './IconTextButton.scss'
import { Icon } from 'components'

const IconTextButton = ({ variant, color, selected, text, icon, iconsize, iconlo, onEvent }) => {
  const cvariant = variant || '';
  const ccolor = color || '';
  const param = {
    className: 'IconTextButton IconSize' + iconsize + ' ' + cvariant + ' ' + ccolor + ' ' + selected
  }
  if (onEvent) {
    param.onClick = (e) => {
      e.preventDefault();
      onEvent('click_IconTextButton', null, e); // eventName, state, event
    }
  }

  const getTag = () => {
    if (iconlo === 'right') {
      return <Fragment><span>{text}</span><Icon icon={icon} iconsize={iconsize}></Icon></Fragment>;
    } else {
      return <Fragment><Icon icon={icon} iconsize={iconsize}></Icon><span>{text}</span></Fragment>;
    }
  }

  return (
    <a {...param}>
      {getTag()}
    </a>
  );
}

export default withStyles(styles)(IconTextButton);