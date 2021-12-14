import React, { Fragment, memo } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './MemberTemplate.scss';
import { logConfig } from '_constants'

const MemberTemplate = ({ children }) => {
  logConfig.render && console.log('%r MemberTemplate')
  return (
    <Fragment>
      <div id="wrap" className="member">
        <div id="container">
          {children}
        </div>
      </div>
    </Fragment>
  )
}

export default withStyles(styles)(memo(MemberTemplate));