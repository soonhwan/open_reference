import React from 'react'
import classNames from 'classnames/bind'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './IconSam.scss'

const cx = classNames.bind(styles)
// ES6 destructuring
const IconSam = ({ group, type, children }) => {
  return (
    <i
      className={cx('icon-type', `icon-${group}`, `icon-${type}`)}>
      {children}
    </i>
  )
}

export default withStyles(styles)(IconSam);
