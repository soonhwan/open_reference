import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './AppDownloadBanner.scss'
import classNames from 'classnames/bind'
import { Button, IconSam } from 'components'
import iconImg from './osb_download_text_01.gif'

const cx = classNames.bind(styles)

const AppDownloadBanner = ({
  onDownloadButtonClick,
  onCloseButtonClick
}) => {
  return (
    <div className={cx('app-download-banner')}>
      <div className={cx('co')}>
        <p className={cx('txt')}>
          <img src={iconImg} alt="unknown 앱 다운로드" className={cx('app-download-banner-img')}/>
        </p>
        <a className={cx('btn')}>
          <IconSam group="gift" type="app-btn-down">다운로드</IconSam>
        </a>
        <a className={cx('close')}>
          <IconSam group="gift" type="app-btn-close">app 다운로드 배너 닫기</IconSam>
        </a>
      </div>
    </div>
  )
}

export default withStyles(styles)(AppDownloadBanner)
