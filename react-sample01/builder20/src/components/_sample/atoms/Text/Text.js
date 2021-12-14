import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './Text.scss'

const Text = ({ variant, color, text }) => {
  const cvariant = variant || '';
  const ccolor = color || '';
  const param = {
    className: 'Text ' + cvariant + ' ' + ccolor
  }
  return (
    <span {...param}>
      <span>{text}</span>
    </span>
  );
}

export default withStyles(styles)(Text);