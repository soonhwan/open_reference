import React from 'react';
import { action } from '@storybook/addon-actions';
import { BannerSwiper } from 'components';

export const BannerSwiperEx = () => {
  const bannerList1 = [
    { bannerUrl: '/static/images/temp/books_01.png', title: '이제 북패스에서' },
    { bannerUrl: '/static/images/temp/books_02.png', title: '8월의 ONE 퀴즈' },
    { bannerUrl: '/static/images/temp/books_03.png', title: 'unknown에서 펼쳐지는 마법' },
    { bannerUrl: '/static/images/temp/books_04.png', title: '단계별로 따라가는 웹소설 맞춤 수업' },
    { bannerUrl: '/static/images/temp/books_05.png', title: '은행에서 시작하는 첫 재테크' },
    { bannerUrl: '/static/images/temp/books_06.png', title: '10년간 1,000명의 백만장자들을 통해 본 새로운 부의 공식 7' },
    { bannerUrl: '/static/images/temp/books_07.png', title: '몸에 밴 상처에서 벗어나는 치유의 심리학' }
  ]

  const bannerList2 = [
    { bannerUrl: '/static/images/temp/pass_01.png', title: '하버드에게 강조하는 성공을 위한 자기 관리법' },
    { bannerUrl: '/static/images/temp/pass_02.png', title: '최상의 부자가 말하는 돈에 대한 모든것' },
    { bannerUrl: '/static/images/temp/pass_03.png', title: '블룸버그 선정 미래학자 제이슨 솅커의 미래예측' },
    { bannerUrl: '/static/images/temp/pass_04.png', title: '더 많은 연결을 위한 새로운 시대 진화 코드' },
    { bannerUrl: '/static/images/temp/pass_05.png', title: '바닷가 마을에서 깨달은 지금을 온전하게 사는 법' }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. booksMain</div>
        <BannerSwiper mode="booksMain" bannerLists={bannerList1} prevEvent={prevEvent} onEvent={action('1.bType')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. passMain</div>
        <BannerSwiper mode="passMain" bannerLists={bannerList2} prevEvent={prevEvent} onEvent={action('2.cType')} />
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
export default BannerSwiperEx
