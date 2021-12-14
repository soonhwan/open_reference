import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { CommentItem, LinkRenderer, TextareaGroup, ListNoResults } from 'components';
import styles from './CommentList.scss';
import { useState } from 'hooks';
import utils from 'utils';

const CommentListItemBasic = ({ comment, prevEvent, onEvent }) => {
  const [selectedReplyValue, setSelectedReplyValue] = useState(false);

  let commentReplyListHtml = '';
  let commentReplyMoreBtn = '';
  const moreParam = {
    mode: 'text',
    size: 'B14',
    color: 'Dark',
  }
  const textareaParam = {
    type: 'text',
    value: '',
    placeholder: '댓글을 입력해주세요.\n개인정보가 포함되지 않도록 주의해 주세요'
  }

  const onReplyEvent = () => {
    setSelectedReplyValue(!selectedReplyValue);
    utils.triggerEvent('click_CommentItem_reply', onEvent, prevEvent, null, null, event)
  }

  if (comment.replyList.length > 0) {
    commentReplyListHtml = comment.replyList.map((item, i) => {
      return (
        <Fragment key={i}>
          <CommentItem mode="reply" comment={item} prevEvent={prevEvent} onEvent={onEvent}></CommentItem>
        </Fragment>
      )
    })
    commentReplyMoreBtn = <div className="CommentListReplyMore">
      <div className="CommentListReplyMoreInner">
        <LinkRenderer {...moreParam}>더보기</LinkRenderer>
      </div>
    </div>
  }

  return (
    <div className={'CommentListBox' + (selectedReplyValue ? ' open' : ' close')}>
      <CommentItem mode="basic" comment={comment} onReplyEvent={onReplyEvent} prevEvent={prevEvent} onEvent={onEvent}></CommentItem>
      <div className="CommentListReply">
        {commentReplyListHtml}
        {commentReplyMoreBtn}
        <TextareaGroup mode="replycomment" inputParam={textareaParam} maxLength="600">댓글을 입력해주세요.</TextareaGroup>
      </div>
    </div>
  )
}

const CommentListBasic = ({ mode, commentListData, prevEvent, onEvent }) => {
  const getCommentList = () => {
    const commentListHtml = commentListData.map((comment, index) => {
      const param = {
        comment: comment,
        prevEvent: prevEvent,
        onEvent: onEvent
      }
      return <CommentListItemBasic {...param} key={index}></CommentListItemBasic>;
    })

    return commentListHtml;
  }

  const getCommentFirst = () => {
    const param = {
      mode: 'basic',
      thumb: '/static/images/thumb/list_no_results_01.png',
      title: '이 작품의 첫번째 댓글을 남겨주세요',
    }
    return (
      <ListNoResults {...param}></ListNoResults>
    )
  }

  return (
    <div className={'CommentListWrap ' + mode}>
      <div className="CommentListInner">
        {(commentListData.length > 0) ? getCommentList() : getCommentFirst()}
      </div>
    </div>
  )
}

const CommentListWrap = {
  basic: CommentListBasic
}

const CommentList = (props) => {
  const getTag = (props) => {
    let Renderer;
    if (props.mode === 'basic') {
      Renderer = CommentListWrap.basic
    } else {
      Renderer = CommentListWrap.basic
    }

    return <Renderer {...props}></Renderer>
  }

  return (
    <Fragment>
      {getTag(props)}
    </Fragment>
  )
}

export default withStyles(styles)(CommentList);