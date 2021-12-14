import React, { Fragment, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'hooks';
import styles from './App.scss';
import { Menu } from 'components'
import RouterListener from './components/RouterListener';
import PrivateRoute from './components/PrivateRoute';
import * as userActions from 'store/modules/user';
import { logConfig } from '_constants'

import { 
  ScreenMaskContainer,
  PopupContainer,
  ToastContainer,

} from 'containers';



import pageList from 'routes'
logConfig.pageList && console.log('======  Loading - PageList  ==========')
logConfig.pageList && console.log(pageList)

const NotFound = () => {
  return (
    <div>
      <h2>
        Not found
      </h2>
    </div>
  );
};

const App = (props) => {
  const dispatch = useDispatch()
  const { authKey } = useSelector(state => ({ authKey: state.base.authKey }))

  useEffect(() => {
    console.log('!! App --> useEffect !!', authKey, dispatch)
      dispatch(userActions.getUserInfo())
  }, [authKey, dispatch])
  
  logConfig.render && console.log('%r App')
  return (
    <div className="App">
      <Menu />

      {/* 모든 페이지가 등록되어 있어야함 */}
      <Switch>

        {/* 구. sample start */}
        <Route exact path="/" component={pageList.MainPage} />
        <Route exact path="/main" component={pageList.MainPage} />
        <Route exact path="/bookpass" component={pageList.MainPage} />
        <Route exact path="/sub" component={pageList.SubPage} />
        <Route exact path="/home" component={pageList.HomePage} />
        <Route exact path="/type/1" component={pageList.Type1Page} />
        <Route exact path="/type/2" component={pageList.Type2Page} />
        <Route exact path="/sample/1" component={pageList.SamplePage1} />
        <Route exact path="/comment" component={pageList.CommentPage} />
        <Route exact path="/comment/:channelId" component={pageList.CommentPage} />
        <PrivateRoute exact path="/admin" component={pageList.HomePage} />

        { /* 
          java server router 
          - 브라우저에서 요청하는 주소가 java 서버, node 서버에도 동일하게 존재해야 한다.
        */ }
        <Route exact path="/render/comment" component={pageList.CommentPage} />
        <Route exact path="/render/comment/:channelId" component={pageList.CommentPage} />
        {/* 구. sample end */}

        {/* OSB2.5 start */}
        {/* 전시 */}
        <Route exact path="/display/card/:cardId" component={pageList.DisplayCardPage} />
        <Route exact path="/display/category/:topMenuId" component={pageList.DisplayCategoryPage} />
        <Route exact path="/display/category/:topMenuId/:menuId" component={pageList.DisplayCategoryPage} />
        <Route exact path="/display/challenge/:topMenuId" component={pageList.DisplayChallengePage} />
        <Route exact path="/display/daily" component={pageList.DisplayDailyPage} />
        <Route exact path="/display/event/:panelId" component={pageList.DisplayEventPage} />
        <Route exact path="/display/keyword/:tagId" component={pageList.DisplayKeywordPage} />
        <Route exact path="/display/product/:listId" component={pageList.DisplayProductPage} />
        <Route exact path="/display/rank/:topMenuId" component={pageList.DisplayRankPage} />
        <Route exact path="/display/rank/:topMenuId/:menuId" component={pageList.DisplayRankPage} />
        <Route exact path="/display/recent" component={pageList.DisplayRecentPage} />
        <Route exact path="/display/tag/:tagId" component={pageList.DisplayTagPage} />

        {/* 회원 */}
        <Route exact path="/auth/adultCert" component={pageList.MemberAdultCertPage} />
        <Route exact path="/auth/agentAgree" component={pageList.MemberAgentAgreePage} />
        <Route exact path="/member/login/b2b/booksndata" component={pageList.MemberB2BLoginBooksndataPage} />
        <Route exact path="/member/login/b2b/booksndata/confirm" component={pageList.MemberB2BLoginConfirmBooksndataPage} />
        <Route exact path="/member/phoneAuth/b2b/booksndata" component={pageList.MemberB2BPhoneAuthBooksndataPage} />
        <Route exact path="/member/findId" component={pageList.MemberFindIdPage} />
        <Route exact path="/member/join" component={pageList.MemberJoinPage} />
        <Route exact path="/member/login" component={pageList.MemberLoginPage} />
        <Route exact path="/member/policyAdd" component={pageList.MemberPolicyAddPage} />
        <Route exact path="/member/policy" component={pageList.MemberPolicyPage} />
        <Route exact path="/member/tstore/resetPassword" component={pageList.MemberResetPasswordPage} />
        <Route exact path="/member/tstore/login" component={pageList.MemberTstoreLoginPage} />

        {/* 마이 */}

        {/* 뷰어 */}
        <Route exact path="/preview/ebook/:episodeId" component={pageList.ViewerPreviewEbookPage} />
        <Route exact path="/preview/comic/:episodeId" component={pageList.ViewerPreviewComicPage} />
        <Route exact path="/viewer/comic/:episodeId" component={pageList.ViewerComicPage} />
        <Route exact path="/viewer/webnovel/:episodeId" component={pageList.ViewerWebnovelPage} />
        <Route exact path="/viewer/webtoon/:episodeId" component={pageList.ViewerWebtoonPage} />

        {/* 기타 */}
        <Route exact path="/detail/:channelId" component={pageList.DetailPage} />
        
        <Route exact path="/search" component={pageList.SearchPage} />
        <Route exact path="/search/bookpass" component={pageList.SearchPage} />

        <Route exact path="/my/coupon" component={pageList.MyCouponPage} />        

        {/* NotFound */}
        <Route component={NotFound} />
      </Switch>

      {/* common component <RouterListener />*/}
      

      {/* toast, layerPopup, etc <UserListener /> */}
      <PopupContainer/>
      <ToastContainer/>
      <ScreenMaskContainer/>


    </div>
  )
}

export default withStyles(styles)(memo(App))
