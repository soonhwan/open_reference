import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './CommentListOld.scss';
import { CommentItemOld } from 'components'
import utils from 'utils';

const cx = classNames.bind(styles);

const CommentListOld = ({ commentList, pageNm, onEvent }) => {

  // 상세 or 뷰어 페이지 여부
  const hasProduct = (pageNm) => {
    return pageNm === 'viewer' || pageNm === 'detail'
  }

  if (!commentList || commentList.length < 1) {
    return (
      <div className="comment-module">
        <div className="comment-module-wrap">
          <ul className="comment-module-list js-comment-list" data-comment-count="0" data-comment-total-count="0">
            <li className="comment-module-item no">
              <div className="comment-module-box">
                <span><img src="/resources/nbook10/images/nbooks/error/bg_comment_no_01.png" alt="이미지"/></span>
                <strong className="list-item-nodata-strong">
                    이 작품의 첫 번째 댓글을 남겨주세요.
                </strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  const commentListHtml = commentList.map((comment) => {
    const _id = utils.getAutoGenId()
    return (
      <li key={_id} className="comment-module-item">
        <CommentItemOld comment={comment} hasProduct={hasProduct} onEvent={onEvent} />
      </li>
    )
  });

  return (
    <div className="comment-module">
      <div className="comment-module-wrap">
        <ul className="comment-module-list js-comment-list" data-comment-count="0" data-comment-total-count="0">
          {commentListHtml}
        </ul>
      </div>
    </div>
  )
}


export default withStyles(styles)(CommentListOld);

