import React, { createRef } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect, useRef, useReactRouter, useScrollHit, useDispatch, useSelector } from 'hooks';
import { Type1Template, DisplayTemplate, BooksHelmet, IconSam, CommentListOld } from 'components'
import styles from './comment.scss';
import * as baseActions from 'store/modules/base';
import * as commentActions from 'store/modules/comment';
import queryString from 'query-string';
import { logConfig } from '_constants'

const cx = classNames.bind(styles)


const CommentPage = (props) => {

// ----------------------------------------------------------------------------
// history, location, match
// ----------------------------------------------------------------------------
  const { history, location, match } = useReactRouter()
  const query = queryString.parse(location.search);

// ----------------------------------------------------------------------------
// variable, useEffect, dispatch, store
// ----------------------------------------------------------------------------
  const dispatch = useDispatch()
  const { comment } = useSelector(state => ({ comment: state.comment }))

  const channelId = match.params.channelId
  const [orderby, setOrderby] = useState(query.orderBy === 'recommend' ? 'recommend' : 'recent') 

  // 기본 조회 
  useEffect(() => {
    console.log('CommentPage useEffect => ', channelId, orderby)
    dispatch(commentActions.getCommentList(channelId, orderby)).then(() => {
      //   // console.log('------------------------------', comment);
    });
  }, [channelId, orderby, dispatch])


  // paging 조회
  const isHit = useScrollHit({ threshold: 100 }); // 하단으로부터 얼마나 떨어저 있을때 감지 할건지 체크
  const [commentListReference, setCommentListReference] = useState(() => createRef()) // ref 참고
  // const isHit = useScrollHit({ threshold: 1200, element: commentListReference });
  const isPendingPaging = useRef(false)
  const currentLength = comment.commentList.length
  const hasNext = currentLength < comment.commentTotalCount

  useLayoutEffect(() => {
    if (isHit && hasNext && !isPendingPaging.current) {
      console.log('isHit => ', isHit, channelId, currentLength, hasNext, orderby, isPendingPaging);
      // console.log('useEffect isHit => ------------------------- ');
      isPendingPaging.current = true;

      dispatch(commentActions.getCommentPaging(channelId, orderby, currentLength + 1, 20)).then(() => {
        isPendingPaging.current = false;
      });
    }
  }, [isHit, channelId, currentLength, hasNext, orderby, dispatch]); // isHit, comment 값 변경시 실행

// ----------------------------------------------------------------------------
// Event
// ----------------------------------------------------------------------------
  const handleCommentSort = (newOrderby) => {
    newOrderby = newOrderby === 'recommend' ? 'recommend' : 'recent'
    console.log(history)
    history.replace(history.location.pathname + '?orderBy=' + newOrderby)
    setOrderby(newOrderby)

    // dispatch(baseActions.setScreenMaskVisibility(true))
    dispatch(baseActions.openPopup({
      title: 'title',
      detail: 'detail',
      firstBtnNm: '예',
      // secondBtnNm: '아니오',
      checkBtnNm: '다시보지않기',
      onEvent: (eventName, state, event) => {
        console.log('CommentPage -> openPopup onEvent', eventName, state)
      }
    }))
  }

  const [aaaCount, setAaaCount] = useState(0) 
  const handleEvent = (event, eventName, params) => {
    console.log(eventName, params)
    if (eventName === 'handleMoveReplyPage') {
      history.push('/comment/' + params.commentSeq + '/reply')
    } else if (eventName === 'handleMenuClick') {
      setAaaCount(aaaCount + 1)
      dispatch(baseActions.addToast({
        // type: 'mid',
        type: 'bot',
        text: '제어창 오픈 => ' + aaaCount
      }))
    }
  }

// ----------------------------------------------------------------------------
// render
// ----------------------------------------------------------------------------
  logConfig.render && console.log('%r CommentPage', comment)
  return (
    <DisplayTemplate>
      <BooksHelmet>
        <title>unknown-댓글</title>
        <meta name="keywords" content="unknown-댓글"/>
        <meta name="description" content="unknown-댓글"/>
      </BooksHelmet>

      <div className={cx('commentsep')}>
        {/* 댓글 header */}
        <div className={cx('header', 'detail')}>
          <div className="header-co">
            <h2>
              <span className="header-title">
               {/* <IconSam group="ebook" type="header-prevco"></IconSam> */}
               <span>댓글</span>
              </span>
            </h2>
            <Link className={cx('btn-header', 'btn-header-mycomment')} to={'/comment/' + channelId + '/my'}>
              <span>내 댓글</span>
            </Link>
          </div>
        </div>

        {/* 댓글 본문 */}
        <div className="container" ref={commentListReference}>
          {/* 댓글 입력 */}

          {/* 상단 정렬 */}
          <section className="layout-list-sort-wrap">
            <div className="layout-list-sort-inner cboth">
              <div className="layout-list-sort-left">
                <ul className="layout-list-sort-text">
                  <li className="js-comment-total" data-comment-total={comment.commentList.length}>총 {comment.commentList.length}개 == {comment.commentTotalCount}</li>
                </ul>
              </div>
              <div className="layout-list-sort-right">
                <ul>
                  <li><a className={orderby === 'recent' ? 'selected' : ''} onClick={() => handleCommentSort('recent')}>최신순</a></li>
                  <li><a className={orderby === 'recommend' ? 'selected' : ''} onClick={() => handleCommentSort('recommend')}>추천순</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* 댓글 목록 */}
          <CommentListOld commentList={comment.commentList} pageNm="comment" onEvent={handleEvent} /> 
        </div>
      </div>
    </DisplayTemplate>
  )
}

export default withStyles(styles)(CommentPage)
