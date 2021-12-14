import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './CommentItemOld.scss';
import { IconSam } from 'components';
import utils from 'utils';

const cx = classNames.bind(styles);
const CommentItemOld = ({ comment, hasProduct, onEvent }) => {
  return (
    <Fragment>
      <CommentModule comment={comment} hasProduct={hasProduct} onEvent={onEvent}/>
      <CommentModuleReply comment={comment} />
    </Fragment>
  )
}

const CommentModule = (props) => {

  const { comment, hasProduct, onEvent } = props;
  const isBlock = comment.deleteYn === 'Y' || comment.badCommentYn === 'Y';
  const episodeName = comment.episodeName ? <span className="link-comment-module-episode">{comment.episodeName}</span> : '';

  let btnMenu = '';
  if (!isBlock && comment.adminNoticeYn === 'N' && (!hasProduct || (hasProduct && comment.myCommentYn === 'N'))) {
    btnMenu = 
      <a className="btn-comment-model-more js-btn-commentnav-open" onClick={(e) => handleMenuClick(e)}>
        <IconSam group="ebook" type="inline-comment-more">메뉴</IconSam>
      </a>
  }

  const getBadge = () => {
    if (comment.adminNoticeYn === 'Y') {
      return <i className="icon-type-ebook icon-inline-comment-logo"></i>;
    } else if (comment.authorYn === 'Y') {
      return <span className="comment-module-name-type">작가</span>;
    } else if (comment.authorYn === 'Y') {
      return <span className="comment-module-name-type">구매자</span>;
    } else {
      return '';
    }
  }

  const getCommentItem = (episodeName, isBlock) => {
    let commentItem;

    if (isBlock && comment.bolterYn === 'N') {
      // 삭제, 신고인 경우
      commentItem = 
        <Fragment>
          <span className="comment-module-desc">
            <span className="comment-module-delete" dangerouslySetInnerHTML={{ __html: comment.commentDscr }}></span>
          </span>
          { episodeName }
        </Fragment>;
    } else if (comment.bolterYn === 'Y') {
      // 탈퇴 회원인 경우 "알수 없는 사용자" 표기
      commentItem = 
        <Fragment>
          <span className="comment-module-desc">
            {isBlock && <span className="comment-module-delete" dangerouslySetInnerHTML={{ __html: comment.commentDscr }}></span>}
            {!isBlock && 
              <Fragment>
                <span className="comment-module-name dimmed">알수 없는 사용자</span>
                <span className="comment-module-text" dangerouslySetInnerHTML={{ __html: comment.commentDscr }}></span>
              </Fragment>}
          </span>
          { episodeName }
        </Fragment>;
    } else if (!isBlock && comment.bolterYn === 'N') {
      // 탈퇴 회원이 아니고, 삭제, 신고가 아닌 경우 뱃지 표시
      commentItem = 
        <Fragment>
          <span className="comment-module-name">
            {comment.nickName}
            {getBadge()}
          </span>
          <span className="comment-module-desc">
            {comment.adminNoticeYn === 'Y' && <span className="comment-module-badge notice">공지</span> } 
            {comment.adminRecomYn === 'Y' && <span className="comment-module-badge recommendation">추천</span> } 
            {comment.bestYn === 'Y' && <span className="comment-module-badge best">베스트</span> } 
            &nbsp;<span className="comment-module-text" dangerouslySetInnerHTML={{ __html: comment.commentDscr }}></span>
          </span>
          {comment.episodeName && <span className="link-comment-module-episode">{comment.episodeName}</span>}
        </Fragment>;
    }

    return commentItem;
  }

  // event handler 
  const handleMenuClick = (e) => {
    onEvent(e, 'handleMenuClick', comment)
  }
  const handleMoveReplyPage = (e) => {
    onEvent(e, 'handleMoveReplyPage', comment)
  }
  const handleLikeClick = (e) => {
    onEvent(e, 'handleLikeClick', comment)
  }
  
  // render
  return (
    <div className="comment-module-box">
      {getCommentItem(episodeName, isBlock)}    
      <span className="comment-module-info">
        <span className="comment-module-info-date">{comment.regDate}</span>
        <span className="comment-module-info-btn">
          <a className={`button-ty3 btn-comment-model-reply js-btn-comment-model-reply 
            ${((isBlock || comment.bolterYn === 'Y') && comment.replyCount < 1) ? 'dimmed' : ''}`} onClick={(e) => handleMoveReplyPage(e)}>
            <IconSam group="ebook" type="inline-comment-ico">댓글</IconSam>
            <span className="js-reply-count">{utils.setComma(comment.replyCount)}</span>
          </a>
          <a className={`button-ty3 btn-comment-model-like js-btn-comment-model-like 
            ${(isBlock || comment.bolterYn === 'Y') ? 'dimmed' : ''} 
            ${(comment.myRecommendYn === 'Y') ? 'selected' : ''}`} onClick={(e) => handleLikeClick(e)}>
            <IconSam group="ebook" type="inline-comment-like">좋아요</IconSam>
            <span className="js-like-count">{utils.setComma(comment.recommendCount)}</span>
          </a>
        </span>
      </span>
      <div className="comment-module-nav">
        {btnMenu}
      </div>
    </div>
  ) 
}  
const CommentModuleReply = ({ comment }) => {
  return (
    <div className="comment-module-reply-box">
    </div>
  ) 
}  


export default withStyles(styles)(CommentItemOld);

