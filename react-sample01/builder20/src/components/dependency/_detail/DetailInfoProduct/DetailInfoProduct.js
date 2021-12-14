import React, { Fragment } from 'react';
import { DetailPrice, InfoDownBox, SecondaryBar } from 'components';

const title1 = '에디터 노트';
const desc1 = '30년 전, 첫사랑을 만날 기회가 주어진다!<br />죄책감으로 얼룩진 여자의 마음을 어루만 지는 달콤하고 뜨거운 손길. 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서<br />죄책감으로 얼룩진 여자의 마음을 어루만 지는 달콤하고 뜨거운 손길. 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서 당신의 마음에 아물지 않은 상처가 있다면,내가 치료해줄게. 그렇지만 책 소개가 끝난 것은 아니니 좀더 눌러서';
const subKeyword = [
  { text: '#키워드1', value: 'opt-1' },
  { text: '#키워드2', value: 'opt-2' },
  { text: '#키워드3', value: 'opt-3' },
  { text: '#키워드4', value: 'opt-4' },
  { text: '#키워드5', value: 'opt-5' },
  { text: '#키워드6', value: 'opt-6' },
  { text: '#키워드7', value: 'opt-7' },
  { text: '#키워드8', value: 'opt-8' },
  { text: '#키워드9', value: 'opt-9' }
]

const DetailInfoProduct = (props) => {
  return (
    <Fragment>
      {props.bookpassYn === 'Y' && (
        <div>북패스 배너</div>
      )}
      <DetailPrice />
      <InfoDownBox mode="basic" title={title1} desc={desc1} />
      <InfoDownBox mode="basic" title={title1} desc={desc1} />
      <InfoDownBox mode="basic" title={title1} desc={desc1} />
      <InfoDownBox mode="basic" title={title1} desc={desc1} />
      <InfoDownBox mode="basic" title={title1} desc={desc1} />
      <SecondaryBar mode="detailKeyword" subOptions={subKeyword} subValue="opt-1" onEvent={props.onEvent} />
      <InfoDownBox mode="hidden" title="판매자 정보" desc={desc1} />
    </Fragment>
  )
}

export default DetailInfoProduct;