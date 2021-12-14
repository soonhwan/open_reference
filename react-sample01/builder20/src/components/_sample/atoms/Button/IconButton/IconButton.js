import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './IconButton.scss'

const IconButton = ({ variant, icon, children, onEvent }) => {
  const cvariant = variant || ''
  const param = {}
  if (onEvent) {
    param.onClick = (e) => {
      e.preventDefault()
      onEvent('click_IconButton', null, e) // eventName, state, event
    }
  }
  return (
    <a className={'IconButton ' + cvariant} {...param}>
      {/* <Icons icon={icon}>{children}</Icons> */}
    </a>
  );
}

export default withStyles(styles)(IconButton);