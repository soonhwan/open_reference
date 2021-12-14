import React, { Fragment, memo } from 'react';
import { shallowEqual, useState, useEffect, useReactRouter, useSelector } from 'hooks';
import classNames from 'classnames/bind'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './Menu.scss';
import { NavLink } from 'react-router-dom';
import { IconSam } from 'components';
import { logConfig } from '_constants'

const cx = classNames.bind(styles)

function Menu(props) {
  const { history, location, match } = useReactRouter()
  const { referrer, user } = useSelector(state => ({ referrer: state.base.referrer, user: state.user }), shallowEqual)


  const handleClickBack = () => {
    //console.log('123', props);
    console.log('-----------------------------------------------')
    console.log(window.document.referrer)
    console.log(window.history)

    if (history) {
      console.log('--------------------props.history---------------------------')
      history.goBack()
    }
  }

  logConfig.render && console.log('%r Menu(sample)')
  return (
    <div className="Menu">
      <div className="Menu-left" onClick={() => handleClickBack()}>
        <IconSam group="ebook" type="header-prevco">뒤로가기</IconSam>
      </div>
      <div className="Menu-right">
        <div>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/main" exact>Main</NavLink>
          <NavLink to="/sub" exact>Sub</NavLink>
          <NavLink to="/type/1">type-1</NavLink>
          <NavLink to="/type/2">type-2</NavLink>
          <NavLink to="/sample/1">sample-1</NavLink>
          <NavLink exact to="/comment">comment</NavLink>
          <NavLink exact to="/comment/H040078838">comment-1</NavLink>
          <NavLink exact to="/comment/H040048067">comment-2</NavLink>
        </div>

        <div>
          <NavLink exact to="/display/category/fantasy">판타지 전체</NavLink>
          <NavLink exact to="/display/category/fantasy/DP13042">판타지-판타지</NavLink>
        </div>

        <div>
          <NavLink exact to="/search">검색</NavLink>
          <NavLink exact to="/search/bookpass">검색-북패스</NavLink>
        </div>

        <div>
          <NavLink exact to="/my/coupon">내 쿠폰 목록</NavLink>
        </div>
        
      </div>
      <div className="Menu-Bottom">
        referrer : "{referrer}" ::: isLogin: "{user.isLogin ? 'Y' : 'N'}" ::: reqPlatform: "{user.reqPlatform}"
      </div>
    </div>
  )
}

export default withStyles(styles)(memo(Menu));
