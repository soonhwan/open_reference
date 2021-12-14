import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './Icon.scss'

const Icon = ({ icon, iconsize, text }) => {
  const ctext = text || '';
  const tIconSize = iconsize ? iconsize : '';
  const param = {
    className: 'icon icon' + tIconSize + ' ' + (icon + tIconSize)
  }
  return (
    <i {...param}>{ctext}</i>
  );
}

export default withStyles(styles)(Icon);