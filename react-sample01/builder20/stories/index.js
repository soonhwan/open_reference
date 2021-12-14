import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
// import App from '../App';
import { LandProductList } from 'components';


/**/
storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

/*

const productList = [ 
  {
    "prodId" : "H103828388",
    "prodNm" : "[OSB 검증전용] 낫 아웃",
    "badgeNm" : null,
    "prodGrdCd" : "PD004401",
    "topMenuId" : "DP14",
    "thumbnailImageUrl" : "/data7/SMILE_DATA7/IMG/PCOMICS/201808/10/0051394274/1/01_0051394274_1505.jpg",
    "artistNm2" : "김정현",
    "artistPainterNm" : "김정현",
    "plus19Yn" : "N",
    "bookType" : "serial",
    "bookCount" : 0,
    "serialCount" : 5,
    "setProdYn" : "N",
    "status" : "continue",
    "bookUnit" : "화",
    "metaClsfCd" : "CT21",
    "bookClsfCd" : "DP004302",
    "filePos" : "https://img.onestore.co.kr/thumbnails/img_qasac/132_184_F10_95/data7/SMILE_DATA7/IMG/PCOMICS/201808/10/0051394274/1/01_0051394274_1505.jpg",
    "totalCount" : 5,
    "chapterCnt" : 5,
    "chapterUnit" : "화",
    "avgScore" : 0.0,
    "commentTotal" : 1,
    "publisherNm" : "소년챔프",
    "weekDayCdName" : null,
    "regDt" : "2018.08.20",
    "allFreeYn" : null,
    "saleEndDate" : null
  }, {
    "prodId" : "H103827676",
    "prodNm" : "[180626]cms만화일반",
    "badgeNm" : "10%",
    "prodGrdCd" : "PD004401",
    "topMenuId" : "DP14",
    "thumbnailImageUrl" : "/data7/SMILE_DATA7/IMG/PCOMICS/201807/27/0051393689/1/01_0051393689_1332.jpg",
    "artistNm2" : "글작가",
    "artistPainterNm" : "그림작가",
    "plus19Yn" : "N",
    "bookType" : "book",
    "bookCount" : 1,
    "serialCount" : 1,
    "setProdYn" : "N",
    "status" : "continue",
    "bookUnit" : "권",
    "metaClsfCd" : "CT21",
    "bookClsfCd" : "DP004301",
    "filePos" : "https://img.onestore.co.kr/thumbnails/img_qasac/132_184_F10_95/data7/SMILE_DATA7/IMG/PCOMICS/201807/27/0051393689/1/01_0051393689_1332.jpg",
    "totalCount" : 1,
    "chapterCnt" : 1,
    "chapterUnit" : "권",
    "avgScore" : 0.0,
    "commentTotal" : 75,
    "publisherNm" : "국내출판사",
    "weekDayCdName" : null,
    "regDt" : "2018.06.26",
    "allFreeYn" : null,
    "saleEndDate" : null
  }, {
    "prodId" : "H103825875",
    "prodNm" : "[TSQA8][180420] 만화상품1",
    "badgeNm" : null,
    "prodGrdCd" : "PD004401",
    "topMenuId" : "DP14",
    "thumbnailImageUrl" : "/data7/SMILE_DATA7/IMG/PCOMICS/201804/20/0051392520/1/01_0051392520_900_600_1454.jpg",
    "artistNm2" : "TSQA8",
    "artistPainterNm" : "TSQA8",
    "plus19Yn" : "N",
    "bookType" : "book",
    "bookCount" : 4,
    "serialCount" : 0,
    "setProdYn" : "N",
    "status" : "continue",
    "bookUnit" : "권",
    "metaClsfCd" : "CT21",
    "bookClsfCd" : "DP004301",
    "filePos" : "https://img.onestore.co.kr/thumbnails/img_qasac/132_184_F10_95/data7/SMILE_DATA7/IMG/PCOMICS/201804/20/0051392520/1/01_0051392520_900_600_1454.jpg",
    "totalCount" : 4,
    "chapterCnt" : 4,
    "chapterUnit" : "권",
    "avgScore" : 0.0,
    "commentTotal" : 0,
    "publisherNm" : "TSQA8",
    "weekDayCdName" : null,
    "regDt" : "2018.04.20",
    "allFreeYn" : null,
    "saleEndDate" : null
  }, {
    "prodId" : "H103820640",
    "prodNm" : "[TSQA11]TEST",
    "badgeNm" : "20%",
    "prodGrdCd" : "PD004401",
    "topMenuId" : "DP14",
    "thumbnailImageUrl" : "/data7/SMILE_DATA7/IMG/PCOMICS/201708/01/0051380567/1/01_0051380567_900_600_1659.jpg",
    "artistNm2" : "글작가1,글작가2",
    "artistPainterNm" : "그림작가1,그림작가2",
    "plus19Yn" : "N",
    "bookType" : "serial",
    "bookCount" : 0,
    "serialCount" : 3,
    "setProdYn" : "N",
    "status" : "continue",
    "bookUnit" : "화",
    "metaClsfCd" : "CT21",
    "bookClsfCd" : "DP004302",
    "filePos" : "https://img.onestore.co.kr/thumbnails/img_qasac/132_184_F10_95/data7/SMILE_DATA7/IMG/PCOMICS/201708/01/0051380567/1/01_0051380567_900_600_1659.jpg",
    "totalCount" : 3,
    "chapterCnt" : 3,
    "chapterUnit" : "화",
    "avgScore" : 0.0,
    "commentTotal" : 0,
    "publisherNm" : "[TSQA11]TEST",
    "weekDayCdName" : null,
    "regDt" : "2017.07.31",
    "allFreeYn" : null,
    "saleEndDate" : null
  }, {
    "prodId" : "H103268260",
    "prodNm" : "[TSQA14] 170508_상품등록 Test_만화",
    "badgeNm" : null,
    "prodGrdCd" : "PD004401",
    "topMenuId" : "DP14",
    "thumbnailImageUrl" : "/data7/SMILE_DATA7/IMG/PCOMICS/201705/08/0050572604/1/01_0050572604_900_600_1631.jpg",
    "artistNm2" : "유영태",
    "artistPainterNm" : "송한나",
    "plus19Yn" : "N",
    "bookType" : "serial",
    "bookCount" : 0,
    "serialCount" : 1,
    "setProdYn" : "N",
    "status" : "continue",
    "bookUnit" : "화",
    "metaClsfCd" : "CT21",
    "bookClsfCd" : "DP004302",
    "filePos" : "https://img.onestore.co.kr/thumbnails/img_qasac/132_184_F10_95/data7/SMILE_DATA7/IMG/PCOMICS/201705/08/0050572604/1/01_0050572604_900_600_1631.jpg",
    "totalCount" : 1,
    "chapterCnt" : 1,
    "chapterUnit" : "화",
    "avgScore" : 0.0,
    "commentTotal" : 0,
    "publisherNm" : "[TSQA14] 170508_상품등록 Test_만화",
    "weekDayCdName" : null,
    "regDt" : "2017.05.08",
    "allFreeYn" : null,
    "saleEndDate" : null
  }, {
    "prodId" : "H103245571",
    "prodNm" : "소장+전회대여",
    "badgeNm" : "30%",
    "prodGrdCd" : "PD004401",
    "topMenuId" : "DP14",
    "thumbnailImageUrl" : "/data7/SMILE_DATA7/IMG/PCOMICS/201611/17/0050551199/1/01_0050551199_900_600_2209.jpg",
    "artistNm2" : "소장+전회대여",
    "artistPainterNm" : "소장+전회대여",
    "plus19Yn" : "N",
    "bookType" : "serial",
    "bookCount" : 0,
    "serialCount" : 5,
    "setProdYn" : "N",
    "status" : "continue",
    "bookUnit" : "화",
    "metaClsfCd" : "CT21",
    "bookClsfCd" : "DP004302",
    "filePos" : "https://img.onestore.co.kr/thumbnails/img_qasac/132_184_F10_95/data7/SMILE_DATA7/IMG/PCOMICS/201611/17/0050551199/1/01_0050551199_900_600_2209.jpg",
    "totalCount" : 5,
    "chapterCnt" : 5,
    "chapterUnit" : "화",
    "avgScore" : 0.0,
    "commentTotal" : 0,
    "publisherNm" : "소장+전회대여",
    "weekDayCdName" : null,
    "regDt" : "2016.11.18",
    "allFreeYn" : null,
    "saleEndDate" : null
  }
];

const handleClickProduct = (newProductId) => {
  action('clicked = ' + newProductId)
}

storiesOf('test', module)
  .add('t1', () => (
    <LandProductList 
      productList={productList}
      onClickProduct={handleClickProduct}
    />
  ))
  .add('t2', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));*/
  