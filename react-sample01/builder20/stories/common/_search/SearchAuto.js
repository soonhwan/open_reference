import React from 'react';
import { action } from '@storybook/addon-actions';
import { SearchAuto } from 'components';

export const SearchAutoEx = () => {
  const searchAutos = [
    {
      prodId: '',
      prodNm: '',
      topMenuId: '',
      metaClsfCd: '',
      bookClsfCd: '',
      thumbnailImageUrl: '',
      thumbnailType: '',
      plus19Yn: '',
      keyword: '',
      history: '검색어 1',
      historyRegDt: '2020.09.01',
    },
    {
      prodId: '',
      prodNm: '',
      topMenuId: '',
      metaClsfCd: '',
      bookClsfCd: '',
      thumbnailImageUrl: '',
      thumbnailType: '',
      plus19Yn: '',
      keyword: '',
      history: '검색어 2',
      historyRegDt: '2020.09.01',
    },
    {
      prodId: 'H039181124',
      prodNm: '인간의 검색어 인간의 검색어 인간의 척도 인간의 척도 인간의 척도 인간의 척도 인간의 척도 인간의 척도 인간의 척도 인간의 척도 인간의 척도',
      topMenuId: 'DP13',
      metaClsfCd: 'CT19',
      bookClsfCd: 'DP004301',
      thumbnailImageUrl: '/data7/SMILE_DATA7/IMG/PEBOOKS/202006/17/0040084650/01_0040084650_1335.png',
      thumbnailType: 'rectangle',
      plus19Yn: 'N',
      keyword: '',
      history: '',
      historyRegDt: '',
    },
    {
      prodId: 'H040085118',
      prodNm: '[고정] 웹투_시연ALL- 검색어 헬로 유니버스',
      topMenuId: 'DP26',
      metaClsfCd: 'CT27',
      bookClsfCd: 'DP004301',
      thumbnailImageUrl: '/data7/SMILE_DATA7/IMG/PWEBTOONS/202002/13/0040052106/01_0040052106_1542.png',
      thumbnailType: 'square',
      plus19Yn: 'Y',
      keyword: '',
      history: '',
      historyRegDt: '',
    },
    {
      prodId: 'H040126406',
      prodNm: '[고정] 오디오북_단단대-비커밍 검색어Becoming',
      topMenuId: 'DP31',
      metaClsfCd: 'CT38',
      bookClsfCd: 'DP004301',
      thumbnailImageUrl: '/data7/SMILE_DATA7/IMG/PAUDIOBOOKS/202006/19/0040084730/01_0040084730_1650.png',
      thumbnailType: 'square',
      plus19Yn: 'Y',
      keyword: '',
      history: '',
      historyRegDt: '',
    },
    {
      prodId: '',
      prodNm: '',
      topMenuId: '',
      metaClsfCd: '',
      bookClsfCd: '',
      thumbnailImageUrl: '',
      thumbnailType: '',
      plus19Yn: '',
      keyword: '두 도시 이야기 검색어',
      history: '',
      historyRegDt: '',
    },
    {
      prodId: '',
      prodNm: '',
      topMenuId: '',
      metaClsfCd: '',
      bookClsfCd: '',
      thumbnailImageUrl: '',
      thumbnailType: '',
      plus19Yn: '',
      keyword: '검색어 너의 이야기',
      history: '',
      historyRegDt: '',
    }
  ]

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }
  
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1 Search Auto</div>
        <div className="sampleCo">
          <SearchAuto mode="basic" keyword="검색" options={searchAutos} prevEvent={prevEvent} onEvent={action('1.searchAuto')}></SearchAuto>
        </div>
      </div>

      <style>{`
          body { background:#ffffff; }
          .storybook-container { background:#ffffff !important; }
          .sampleCase { width:100%; min-width:280px;}
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
          .sampleCase .sampleTitle span { padding:5px 0 0 0; font-size:12px; display:block; }
          .sampleCase .sampleCo {
            padding:0;
            background: #ffffff;
          }
      `}</style>
    </div>
  );
}


export default SearchAutoEx
