import React from 'react';
import { action } from '@storybook/addon-actions';
import { InfoDownBox } from 'components';

export const InfoDownBoxEx = () => {
  const title1 = '에디터 노트';
  const desc1 = '30년 전, 첫사랑을 만날 기회가 주어진다!<br />죄책감으로 얼룩진 여자의 마음을 어루만 지는 달콤하고 뜨거운 손길. 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서<br />죄책감으로 얼룩진 여자의 마음을 어루만 지는 달콤하고 뜨거운 손길. 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서';
  const title2 = '작가 소개';
  const authorList2 = [
    { title: '작가', text: '작가명' },
    { title: '번역', text: '번역가명' },
  ];
  const desc2 = '30년 전, 첫사랑을 만날 기회가 주어진다!<br />죄책감으로 얼룩진 여자의 마음을 어루만 지는 달콤하고 뜨거운 손길. 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서<br />죄책감으로 얼룩진 여자의 마음을 어루만 지는 달콤하고 뜨거운 손길. 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서';
  const title3 = '작가 공지';
  const desc3 = '30년 전, 첫사랑을 만날 기회가 주어진다!<br />죄책감으로 얼룩진 여자의 마음을 어루만 지는 달콤하고 뜨거운 손길. 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서<br />죄책감으로 얼룩진 여자의 마음을 어루만 지는 달콤하고 뜨거운 손길. 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서';
  const title4 = '판매자 정보';
  const desc4 = '<em>상호</em> unknown㈜<br /><em>대표자</em> 이재환<br /><em>이메일</em> <a href="mailto:books@onestore.co.kr">books@onestore.co.kr</a><br /><em>전화번호</em> 1600-6573<br /><em>주소</em> 경기도 성남시 분당구 판교역로 146번길 20<br /><em>통신판매업신고번호</em> 제 2016-성남분당-0175호<br />';
  const desc41 = '<em>상호</em> (주)로크미디어<br /><em>대표자</em> 이종주<br /><em>이메일</em>  <a href="mailto:rokmedia@empal.com">rokmedia@empal.com</a> <br /><em>전화번호</em> 02-3273-5315<br />';

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 도서 정보 ( mode : basic )</div>
        <InfoDownBox mode="basic" title={title1} desc={desc1} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 작가 소개 ( mode : author )</div>
        <InfoDownBox mode="author" title={title2} authorList={authorList2} desc={desc2} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">3. 작가 공지 ( mode : notice )</div>
        <InfoDownBox mode="notice" title={title3} desc={desc3} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">4. 판매자 정보 ( mode : hidden )</div>
        <InfoDownBox mode="hidden" title={title4} desc={desc4} bookinfo={desc41} />
      </div>
      
      <style>{`
          .storybook-container { background: #ffffff !important; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
      `}</style>
    </div>
  );
}

export default InfoDownBoxEx
