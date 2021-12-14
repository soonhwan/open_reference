import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import StoryWrapperComponent from '../hocs/StoryWrapperComponent.js'
import { CommentList } from 'components';

const BaseCommentList = ({ commentListData }) => {
  return (
    <CommentList commentList={commentListData} pageNm="comment" onEvent={action('onEvent')}/> 
  );
}

const Ex1 = () => {
  const commentListData = [{
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
      replyList: []
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
      authorYn: 'N',
      purchaseYn: 'Y',
      bolterYn: 'N',
      eventId: null,
      channelId: 'H103825097',
      episodeId: '',
      replyListTotalCount: 0,
      replyList: []
    }]
  return (
    <BaseCommentList commentListData={commentListData} />
  )
}

const Ex2 = () => {
  const commentListData = []
  return (
    <BaseCommentList commentListData={commentListData} />
  );
}

storiesOf('Components|Comment/CommentList', module)
  .addDecorator(StoryWrapperComponent)
  .add('default', () => (
    <Ex1 />
  ))
  .add('Empty Data', () => (
    <Ex2 />
  ))

