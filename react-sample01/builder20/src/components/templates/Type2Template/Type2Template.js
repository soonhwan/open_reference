import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './Type2Template.scss'
import classNames from 'classnames/bind'
import { AppDownloadBanner, Gnb } from 'components'

const cx = classNames.bind(styles)

// 모든 페이지 기본 기능 추가
const Type2Template = ({ children }) => {
  return (
    <Fragment>
      <div className="header type2">
        <h2>header - type2</h2>
      </div>
      {children}
    </Fragment>
  )
}
export default withStyles(styles)(Type2Template)
