import React from 'react'
import classNames from 'classnames/bind'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './Gnbs.scss'
import { Link } from 'react-router-dom';
import { IconSam } from 'components'

const cx = classNames.bind(styles)

const Gnbs = () => {
  return (
    <div className={cx('gnb')}>
      <div className="gnb-co">
        <h1>
          <Link to="/main" className="gnb-logo">One Books</Link>
        </h1>
        <a className="btn-gnb btn-gnb-side js-navi-btn alarm">
          <IconSam group="ebook" type="gnb-side">주요메뉴</IconSam>
        </a>
        <Link to="/search" className={cx('btn-gnb', 'btn-gnb-search')}>
          <IconSam group="ebook" type="gnb-search">검색</IconSam>
        </Link>
        <Link to="/myLibrary" className={cx('btn-gnb btn-gnb-library')}>
          <IconSam group="ebook" type="gnb-library">내서재</IconSam>
        </Link>
      </div>
    </div>
  )
}

export default withStyles(styles)(Gnbs);



