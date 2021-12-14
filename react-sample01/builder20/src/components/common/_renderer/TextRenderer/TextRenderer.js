import React, { Fragment, memo } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './TextRenderer.scss'
import utils from 'utils';

const TextRenderer = ({ size, color, textClass, text, children }) => {
  const tSize = size ? ' t' + size : '';
  const tColor = color ? ' t' + color : '';
  const tTextClass = textClass ? ' t' + textClass : '';
  const param = {
    className: 'textSt' + tSize + tColor + tTextClass
  }

  let tTag = '';
  if (utils.isEmpty(text)) {
    tTag = <span {...param}>{children}</span>
  } else {
    tTag = <span {...param} dangerouslySetInnerHTML={{ __html: text }}></span>
  }


  return (
    <Fragment>
      {tTag}
    </Fragment>
  )
}

export default withStyles(styles)(memo(TextRenderer));