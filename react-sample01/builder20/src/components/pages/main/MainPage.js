import React from 'react';
import { MainTemplate, BooksHelmet } from 'components'
import utils from 'utils';

const MainPage = (props) => {
  console.log('MainPage ->>>', props)

  return (
    <MainTemplate>
      <BooksHelmet>
        <title>unknown</title>
        <meta name="keywords" content="unknown, 북스, 오디오북"/>
        <meta name="description" content="할인혜택이 가장 많은 국내 1위 eBook 서비스 도서, 장르소설, 웹소설, 만화, 웹툰을 한곳에서 이용하세요."/>
      </BooksHelmet>
      <div>
        <h1>Main - !!</h1>
        <h2>나의 브라우저는 ?? {utils.isExplorer() ? '인터넷 익스플로러' : '크롬, 파이어폭스, 사파리'}</h2>
        {utils.isExplorer() && <h3>인터넷 익스플로러 버전은 ?? {utils.getIeOldVersion() ? '인터넷 익스플로러 7~9' : '인터넷 익스플로러 10~11'}</h3>}
      </div>
    </MainTemplate>
  );
};

export default MainPage
