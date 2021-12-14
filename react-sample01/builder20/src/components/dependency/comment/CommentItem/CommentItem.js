import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer, TextRenderer, Icon } from 'components';
import styles from './CommentItem.scss';
import { useState } from 'hooks';
import utils from 'utils';

const CommentItem = ({ mode, comment, onReplyEvent, prevEvent, onEvent }) => {
  const [selectedLikeValue, setSelectedLikeValue] = useState(false);

  const isBlock = comment.deleteYn === 'Y' || comment.badCommentYn === 'Y';

  // 닉네임 뱃지
  const getNickNameBadge = () => {
    if (comment.adminNoticeYn === 'Y') {
      return <Icon icon="adminLogo" iconsize="16"></Icon>;
    } else if (comment.authorYn === 'Y') {
      return <span className="CommentItemTextBadge">작가</span>;
    } else if (comment.purchaseYn === 'Y') {
      return <span className="CommentItemTextBadge">구매자</span>;
    } else {
      return '';
    }
  }

  // 내용 뱃지
  const getDescBadge = () => {
    if (comment.adminNoticeYn === 'Y') {
      return <span className="CommentItemTextBadge notice">공지</span>;
    } else if (comment.adminRecomYn === 'Y') {
      return <span className="CommentItemTextBadge recommendation">추천</span>;
    } else if (comment.bestYn === 'Y') {
      return <span className="CommentItemTextBadge best">베스트</span>;
    } else {
      return '';
    }
  }

  const getCommentItem = () => {
    let commentItem = '';
    if (isBlock && comment.bolterYn === 'N') {
      // 삭제, 신고인 경우
      commentItem = 
        <Fragment>
          <div className="CommentItemDesc deleted">
            <span className="CommentItemDescText" dangerouslySetInnerHTML={{ __html: comment.commentDscr }}></span>
          </div>
          {comment.episodeName && <div className="CommentItemEpisode">{comment.episodeName}</div>}
        </Fragment>
    } else if (comment.bolterYn === 'Y') {
      // 탈퇴 회원인 경우 "알수 없는 사용자" 표기
      commentItem = 
        <Fragment>
          <div className="CommentItemNickName">알 수 없는 사용자</div>
          <div className="CommentItemDesc">
            <span className="CommentItemDescText" dangerouslySetInnerHTML={{ __html: comment.commentDscr }}></span>
          </div>
          {comment.episodeName && <div className="CommentItemEpisode">{comment.episodeName}</div>}
        </Fragment>
    } else if (!isBlock && comment.bolterYn === 'N') {
      // 탈퇴 회원이 아니고, 삭제, 신고가 아닌 경우 뱃지 표시
      commentItem = 
        <Fragment>
          <div className="CommentItemNickName">{getNickNameBadge()}{comment.nickName}</div>
          <div className="CommentItemDesc">
            {getDescBadge()}
            <span className="CommentItemDescText" dangerouslySetInnerHTML={{ __html: comment.commentDscr }}></span>
          </div>
          {comment.episodeName && <div className="CommentItemEpisode">{comment.episodeName}</div>}
        </Fragment>
    }
    return commentItem;
  }

  const getBottomBtn = () => {
    let commentItem = '';
    const replyParam = {
      mode: 'text',
      btnClass: 'btnSmall btnExtraL50',
      size: 'B12',
      color: 'Dark',
      onEvent: (event) => {
        onReplyEvent();
      }
    }
    const likeParam = {
      mode: 'icontext',
      btnClass: 'btnSmall btnExtraL50',
      size: 'B12',
      color: selectedLikeValue ? 'Point' : 'Dark',
      icon: selectedLikeValue ? 'commentLikeSel' : 'commentLike',
      iconsize: 14,
      onEvent: (event) => {
        setSelectedLikeValue(!selectedLikeValue)
        utils.triggerEvent('click_CommentItem_like', onEvent, prevEvent, null, null, event)
      }
    }

    if (isBlock && comment.bolterYn === 'N') {
      // 삭제, 신고인 경우
      if (comment.replyCount === 0) {
        replyParam.mode = 'textno';
        replyParam.color = 'Light';
      }

      likeParam.mode = 'icontextno';
      likeParam.color = 'Light';

      commentItem =
        <Fragment>
          {mode === 'reply' || <LinkRenderer {...replyParam}>답글 {comment.replyCount}</LinkRenderer>}
          <LinkRenderer {...likeParam}>{comment.recommendCount }</LinkRenderer>
        </Fragment>
    } else if (comment.bolterYn === 'Y') {
      // 탈퇴 회원인 경우 "알수 없는 사용자" 표기
      if (comment.replyCount === 0) {
        replyParam.mode = 'textno';
        replyParam.color = 'Light';
      }

      likeParam.mode = 'icontextno';
      likeParam.color = 'Light';

      commentItem =
        <Fragment>
          {mode === 'reply' || <LinkRenderer {...replyParam}>답글 {comment.replyCount}</LinkRenderer>}
          <LinkRenderer {...likeParam}>{comment.recommendCount }</LinkRenderer>
        </Fragment>
    } else if (!isBlock && comment.bolterYn === 'N') {
      commentItem =
        <Fragment>
          {mode === 'reply' || <LinkRenderer {...replyParam}>답글 {comment.replyCount}</LinkRenderer>}
          <LinkRenderer {...likeParam}>{comment.recommendCount }</LinkRenderer>
        </Fragment>
    }
    return commentItem;
  }

  const getBottomNav = () => {
    let commentItem = '';
    const defaultParam = {
      mode: 'text',
      size: 'B12',
      color: 'Medium',
    }

    const modiParam = {
      onEvent: (event) => {
        utils.triggerEvent('click_CommentItem_modi', onEvent, prevEvent, null, null, event)
      }
    }

    const delParam = {
      onEvent: (event) => {
        utils.triggerEvent('click_CommentItem_delete', onEvent, prevEvent, null, null, event)
      }
    }

    const reportParam = {
      onEvent: (event) => {
        utils.triggerEvent('click_CommentItem_report', onEvent, prevEvent, null, null, event)
      }
    }

    if (comment.adminNoticeYn === 'Y') {
      commentItem = '';
    } else if (comment.bolterYn === 'Y') {
      commentItem = 
        <Fragment>
          <LinkRenderer {...defaultParam} {...reportParam}>신고</LinkRenderer>
        </Fragment>
    } else if (!isBlock && comment.bolterYn === 'N') {
      if (comment.myCommentYn === 'Y') {
        // 내가 작성한 글
        commentItem = 
          <Fragment>
            <LinkRenderer {...defaultParam} {...modiParam}>수정</LinkRenderer>
            <LinkRenderer {...defaultParam} {...delParam}>삭제</LinkRenderer>
          </Fragment>
      } else {
        commentItem = 
          <Fragment>
            <LinkRenderer {...defaultParam} {...reportParam}>신고</LinkRenderer>
          </Fragment>
      }
    }
    return commentItem;
  }

  const getCommentFooter = () => {
    return (
      <div className="CommentItemBottom">
        <div className="CommentItemBottomCell date"><TextRenderer size="B12" color="Medium">{comment.regDate}</TextRenderer></div>
        <div className="CommentItemBottomCell nav">{getBottomNav()}</div>
        <div className="CommentItemBottomCell btn">{getBottomBtn()}</div>
      </div>
    )
  }

  return (
    <div className={'CommentItemWrap ' + mode}>
      <div className="CommentItemInner">
        <div className="CommentItemBox">
          {getCommentItem()}
          {getCommentFooter()}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(CommentItem);