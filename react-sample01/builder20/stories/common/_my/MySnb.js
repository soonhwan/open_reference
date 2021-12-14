import React from 'react';
import { action } from '@storybook/addon-actions';
import { MySnb } from 'components';

export const MySnbEx = () => {
  const accountInfo1 = {
    sns: 'facebook', /* facebook, google, naver, apple, tworld, mdn */
    name: 'abcd@gmail.com'
  }
  const notiYn1 = false;
  const adultYn1 = false;

  const option1 = [
    { type: 'cash', text: '북스캐쉬', price: 1000000 },
    { type: 'point', text: '북스포인트', price: 1000000 }
  ]

  const cuponOption1 = { text: '쿠폰', num: 3 };
  const passOption1 = { text: '북패스', subscribeYn: false };

  const subMenu1 = [
    {
      title: '작품',
      type: 'product',
      navlists: [
        { type: 'purchase', appYn: 'N', text: '구매목록', value: 'opt-1', },
        { type: 'library', appYn: 'Y', text: '내서재', value: 'opt-2', },
        { type: 'bookclip', appYn: 'Y', text: '북클립', value: 'opt-3', },
        { type: 'like', appYn: 'N', text: '좋아요', value: 'opt-4', },
        { type: 'gift', appYn: 'N', text: '선물함', value: 'opt-5', }
      ]
    },
    {
      title: '구매 ∙ 혜택',
      type: 'purchase',
      navlists: [
        { type: 'cash', appYn: 'N', text: '북스캐쉬', value: 'opt-6', },
        { type: 'point', appYn: 'N', text: '북스포인트', value: 'opt-7', },
        { type: 'coupon', appYn: 'N', text: '쿠폰', value: 'opt-8', },
        { type: 'pass', appYn: 'N', text: '북패스 구독관리', value: 'opt-9', }
      ]
    },
    {
      title: '고객센터',
      type: 'customer',
      navlists: [
        { type: 'faq', appYn: 'N', text: 'FAQ', value: 'opt-10', },
        { type: 'mail', appYn: 'N', text: '이메일문의', value: 'opt-11', },
        { type: 'noti', appYn: 'N', text: '공지사항', value: 'opt-12', }
      ]
    }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 마이 서브메뉴</div>
        <MySnb mode="basic"
          accountInfo={accountInfo1} 
          notiYn={notiYn1} 
          adultYn={adultYn1} 
          cashPointOptions={option1}
          couponOption={cuponOption1}
          passOption={passOption1}
          subMenu={subMenu1}
          subMenuValue="opt-1"
          prevEvent={prevEvent} 
          onEvent={action('1.basic')} />
      </div>
      <style>{`
          .storybook-container { background: #ffffff !important; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
            margin-bottom: 10px;
          }
      `}</style>
    </div>
  );
}
export default MySnbEx