import React from 'react';
import { action } from '@storybook/addon-actions';
import { CommentList } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const CommentListEx = () => {
  const commentListData1 = [{
    commentSeq: '300100199',
    commentDscr: '한달 동안 이벤트 진행합니다.',
    commentType: 'product',
    adminRecomYn: 'N',
    adminNoticeYn: 'Y',
    bestYn: 'N',
    deleteYn: 'N',
    badCommentYn: 'N',
    myCommentYn: 'N',
    myRecommendYn: 'N',
    replyCount: 5,
    recommendCount: 1,
    episodeName: null,
    regDate: '2018.08.06',
    nickName: 'unknown',
    authorYn: 'N',
    purchaseYn: 'N',
    bolterYn: 'N',
    eventId: null,
    channelId: 'H103825097',
    episodeId: '',
    replyListTotalCount: 0,
    replyList: [{
      commentSeq: '300100027',
      commentDscr: '댓글 테스트 - 1 1',
      commentType: 'product',
      adminRecomYn: 'Y',
      adminNoticeYn: 'N',
      bestYn: 'N',
      deleteYn: 'N',
      badCommentYn: 'N',
      myCommentYn: 'Y',
      myRecommendYn: 'N',
      replyCount: 18,
      recommendCount: 1,
      episodeName: null,
      regDate: '2018.07.17',
      nickName: 'jh2**@naver.com',
      authorYn: 'Y',
      purchaseYn: 'Y',
      bolterYn: 'N',
      eventId: null,
      channelId: 'H103825097',
      episodeId: '',
    }, {
      commentSeq: '304000962',
      commentDscr: '해당 댓글은 작성자에 의해 삭제 되었습니다.',
      commentType: 'product',
      adminRecomYn: 'N',
      adminNoticeYn: 'N',
      bestYn: 'N',
      deleteYn: 'Y',
      badCommentYn: 'N',
      myCommentYn: 'Y',
      myRecommendYn: 'N',
      replyCount: 0,
      recommendCount: 0,
      episodeName: null,
      regDate: '2019.04.18',
      nickName: '',
      authorYn: 'N',
      purchaseYn: 'Y',
      bolterYn: 'N',
      eventId: null,
      channelId: 'H103825097',
      episodeId: '',
    }, {
      commentSeq: '304000374',
      commentDscr: '안녕하세욥',
      commentType: 'product',
      adminRecomYn: 'N',
      adminNoticeYn: 'N',
      bestYn: 'N',
      deleteYn: 'N',
      badCommentYn: 'N',
      myCommentYn: 'N',
      myRecommendYn: 'N',
      replyCount: 0,
      recommendCount: 0,
      episodeName: '1회-제목-cho',
      regDate: '2019.02.25',
      nickName: '유징어어',
      authorYn: 'N',
      purchaseYn: 'N',
      bolterYn: 'Y',
      eventId: null,
      channelId: 'H103825097',
      episodeId: 'H103825098',
    }]
  }, {
    commentSeq: '300100027',
    commentDscr: '댓글 테스트 - 1 1',
    commentType: 'product',
    adminRecomYn: 'Y',
    adminNoticeYn: 'N',
    bestYn: 'N',
    deleteYn: 'N',
    badCommentYn: 'N',
    myCommentYn: 'Y',
    myRecommendYn: 'N',
    replyCount: 18,
    recommendCount: 1,
    episodeName: null,
    regDate: '2018.07.17',
    nickName: 'jh2**@naver.com',
    authorYn: 'Y',
    purchaseYn: 'Y',
    bolterYn: 'N',
    eventId: null,
    channelId: 'H103825097',
    episodeId: '',
    replyListTotalCount: 0,
    replyList: []
  }, {
    commentSeq: '304000961',
    commentDscr: '119 -123',
    commentType: 'product',
    adminRecomYn: 'N',
    adminNoticeYn: 'N',
    bestYn: 'Y',
    deleteYn: 'N',
    badCommentYn: 'N',
    myCommentYn: 'N',
    myRecommendYn: 'N',
    replyCount: 6,
    recommendCount: 0,
    episodeName: null,
    regDate: '2019.04.18',
    nickName: 'jh2**@naver.com',
    authorYn: 'N',
    purchaseYn: 'Y',
    bolterYn: 'N',
    eventId: null,
    channelId: 'H103825097',
    episodeId: '',
    replyListTotalCount: 0,
    replyList: []
  }, {
    commentSeq: '304000962',
    commentDscr: '해당 댓글은 작성자에 의해 삭제 되었습니다.',
    commentType: 'product',
    adminRecomYn: 'N',
    adminNoticeYn: 'N',
    bestYn: 'N',
    deleteYn: 'Y',
    badCommentYn: 'N',
    myCommentYn: 'Y',
    myRecommendYn: 'N',
    replyCount: 0,
    recommendCount: 0,
    episodeName: null,
    regDate: '2019.04.18',
    nickName: '',
    authorYn: 'N',
    purchaseYn: 'Y',
    bolterYn: 'N',
    eventId: null,
    channelId: 'H103825097',
    episodeId: '',
    replyListTotalCount: 0,
    replyList: []
  }, {
    commentSeq: '304000374',
    commentDscr: '안녕하세욥',
    commentType: 'product',
    adminRecomYn: 'N',
    adminNoticeYn: 'N',
    bestYn: 'N',
    deleteYn: 'N',
    badCommentYn: 'N',
    myCommentYn: 'N',
    myRecommendYn: 'N',
    replyCount: 0,
    recommendCount: 0,
    episodeName: '1회-제목-cho',
    regDate: '2019.02.25',
    nickName: '유징어어',
    authorYn: 'N',
    purchaseYn: 'N',
    bolterYn: 'Y',
    eventId: null,
    channelId: 'H103825097',
    episodeId: 'H103825098',
    replyListTotalCount: 0,
    replyList: []
  }]

  const commentListData2 = [];

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 댓글 리스트 (mode: basic)</div>
        <CommentList mode="basic" commentListData={commentListData1} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 댓글 리스트 (mode: basic) 댓글이 없는 경우</div>
        <CommentList mode="basic" commentListData={commentListData2} prevEvent={prevEvent} onEvent={action('1.basic')} />
      </div>
      <style>{`
          .storybook-container { background: #ffffff !important; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
          }
      `}</style>
    </div>
  );
}
export default CommentListEx
