import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './DisplayTemplate.scss'
import classNames from 'classnames/bind'
import { AppDownloadBanner, Gnbs } from 'components'

const cx = classNames.bind(styles)

// 모든 페이지 기본 기능 추가 + 테스트 두번째
const DisplayTemplate = ({ children }) => {
  return (
    <Fragment>
      <AppDownloadBanner />
      <Gnbs />
      {children}
    </Fragment>
  )
}
export default withStyles(styles)(DisplayTemplate)
