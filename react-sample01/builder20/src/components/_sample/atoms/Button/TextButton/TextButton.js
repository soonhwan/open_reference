import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './TextButton.scss'

const TextButton = ({ variant, color, selected, text, onEvent }) => {
  const cvariant = variant || '';
  const ccolor = color || '';
  const param = {
    className: 'TextButton ' + cvariant + ' ' + ccolor + ' ' + selected
  }
  if (onEvent) {
    param.onClick = (e) => {
      e.preventDefault();
      onEvent('click_TextButton', null, e); // eventName, state, event
    }
  }
  return (
    <a {...param}>
      <span>{text}</span>
    </a>
  );
}

export default withStyles(styles)(TextButton);