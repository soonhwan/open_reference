import React, { Fragment, memo } from 'react';
import { Gnb, SearchHistory, SearchAuto } from 'components'
import { useState, useReactRouter, useCallback, useEffect, useDispatch, useRef } from 'hooks';
import utils from 'utils';
import queryString from 'query-string';
import { logConfig } from '_constants'

import * as baseActions from 'store/modules/base'

// ----------------------------------------------------------------------------
// GNB category
// ----------------------------------------------------------------------------
const mainList = [
  { text: 'unknown', value: 'books', },
  { text: '북패스', value: 'pass', }
]
const categoryListBook = [
  { text: '메뉴1', value: 'PN83003001', },
  { text: '메뉴2', value: 'PN83002001', },
  { text: '메뉴3', value: 'PN83004001', },
  { text: '메뉴4', value: 'PN83005001', },
  { text: '메뉴5', value: 'PN83006001', },
  { text: '메뉴6', value: 'PN83001001', }
]
const categoryListPass = [
  { text: '메뉴1', value: 'PN83009001', },
  { text: '메뉴2', value: 'PN83009003', },
  { text: '메뉴3', value: 'PN83009004', }
] 

//최근검색어(임시)
const _searchHisotrys = [
  { text: '검색어 1', value: 'opt-1', },
  { text: '검색어 2', value: 'opt-2', },
  { text: '검색어 3', value: 'opt-3', },
  { text: '검색어 4', value: 'opt-4', },
]

//자동완성, 추천검색어(임시)
const _searchAutos = [
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




const GnbContainer = ({ mode }) => {
  const dispatch = useDispatch()
  const { history, location, match } = useReactRouter()
  const query = queryString.parse(location.search)

  // URI로 보낸 검색어 
  const searchQuery = query.searchQuery;
  console.log('searchPage query : ', searchQuery)
  
  //mode
  const [modeType, setMode] = useState(mode)  
  //북스 or 북패스
  const _mainType = location.pathname.match('bookpass') !== null ? 'pass' : 'books'
  const [mainType, setMainType] = useState(_mainType)   
  //카테고리 리스트
  const _categoryList = _mainType === 'pass' ? categoryListPass : categoryListBook
  const [categoryList, setCategoryList] = useState(_categoryList)   
  //카테고리 panelId
  const _topCd = utils.isEmpty(query.panelId) ? _categoryList[0].value : query.panelId
  const [topCd, setTopCd] = useState(_topCd) 
  //검색어
  const [keyword, setKeyword] = useState(searchQuery);
  //검색어 히스토리 리스트
  const [searchHisotrys, setSearchHisotrys] = useState(_searchHisotrys)
  //자동완성, 추천검색어 리스트
  const [searchAutos, setSearchAutos] = useState(_searchAutos)
  //검색어 리스트 컨트롤 관련
  const [showHistory, setShowHistory] = useState(false)
  const [showAutos, setShowAutos] = useState(false);
  const [keywordAutos, setKeywordAutos] = useState('')
  //ref
  const gnbContainerRef = useRef(null);
  
  //외부 클릭시 이벤트
  useEffect(() => {
    document.addEventListener('click', clickOutside, true);
    return () => {
        document.removeEventListener('click', clickOutside, true);
    };
  });

  // EVENT HANDLER : 외부 클릭시 이벤트 - 검색어 리스트 닫기
  const clickOutside = (event) => {
    if (gnbContainerRef.current && !gnbContainerRef.current.contains(event.target)) {
      showHistory === true && setShowHistory(false)
      showAutos === true && setShowAutos(false)
    }
  };

  // EVENT HANDLER : 카테고리 panelId
  const changeCategory = useCallback((mainValue, value) => {
    setTopCd(value)
    if (mainValue === 'books') {
      history.replace('/main?panelId=' + value)
    } else {
      history.replace('/bookpass?panelId=' + value)
    }
  }, [history])

  // EVENT HANDLER :  북스 or 북패스
  const changeMain = useCallback((value) => {
    let newCategory
    setMainType(value)
    if (value === 'books') {
      newCategory = 'PN83003001' // TODO. localstorage 에서 받아오기
      setCategoryList(categoryListBook)
    } else {
      newCategory = 'PN83009001' // TODO. localstorage 에서 받아오기
      setCategoryList(categoryListPass)
    }
    changeCategory(value, newCategory)
  }, [changeCategory])

// ----------------------------------------------------------------------------
// 주요 기능 클릭
// ----------------------------------------------------------------------------
  // EVENT HANDLER : 마이메뉴 클릭
  const clickMy = useCallback(() => {
    console.log('clickMy');
    history.replace('/my');
  }, [])

  // EVENT HANDLER : 검색 버튼 클릭
  const clickSearch = useCallback((keyword) => {
    console.log('clickSearch keyword = ', keyword); //사용자가 입력한 키워드
    setShowHistory(false)
    setShowAutos(false)
    setKeyword(keyword)

    //console.log('modeType === ', modeType)
    const isPass = (mainType === 'pass') ? '/bookpass' : ''
    if (!utils.isEmpty(keyword)) {
      //통합, 북패스 검색 결과
      history.replace(`/search${isPass}?searchQuery=${keyword}`)
    } else {
      if (modeType !== 'search' && utils.probablyMobile()) {
        //통합, 북패스 검색(모바일)
        history.replace(`/search${isPass}`)
      } else {
        //'검색어를 입력해주세요' 토스트 제공
        dispatch(baseActions.addToast({ text: '검색어를 입력해주세요' }))
      }
    }
  }, [mainType, history, modeType, dispatch])

  // EVENT HANDLER : 검색 영역 닫기 클릭
  const clickSearchClose = useCallback(() => {
    console.log('clickSearchClose');
    //선택 시 사용자가 검색 호출한 페이지로 이동
    history.goBack()
  }, [history])
  
// ----------------------------------------------------------------------------
// 검색 히스토리
// ----------------------------------------------------------------------------
  // EVENT HANDLER : 검색 히스토리 클릭
  const clickSearchHistoryLink = useCallback((value) => {
    //console.log('clickSearchHistoryLink === ', value, searchHisotrys.find(v => v.value === value).text)
    clickSearch(searchHisotrys.find(v => v.value === value).text)
  }, [clickSearch, searchHisotrys])
  
  // EVENT HANDLER : 검색 히스토리 삭제
  const clickSearchHistoryDelLink = useCallback((value) => {
    console.log('clickSearchHistoryDelLink === ', value)
    setSearchHisotrys(prev => prev.filter(v => v.value !== value));
  }, [])
  
  // EVENT HANDLER : 검색 히스토리 전체 삭제
  const clickSearchHistoryAllLink = useCallback(() => {
    console.log('clickSearchHistoryAllLink')
    setSearchHisotrys([])
    setShowHistory(false)
  }, [])

// ----------------------------------------------------------------------------
// 추천 검색어
// ----------------------------------------------------------------------------
  // EVENT HANDLER : 최근 검색어
  const clickSearchAutoHistory = useCallback((value) => {
    console.log('clickSearchAutoHistory === ', value)
    clickSearch(value)
  }, [clickSearch])

  // EVENT HANDLER : 바로가기 자동완성
  const clickSearchAutoGo = useCallback((value) => {
    console.log('clickSearchAutoGo === ', value)
    //history.replace('/detail?prodId=' + value)
  }, [history])

  // EVENT HANDLER : 서버 추천 검색어 자동완성
  const clickSearchAutoSearch = useCallback((value) => {
    console.log('clickSearchAutoSearch === ', value)
    clickSearch(value)
  }, [clickSearch])

// ----------------------------------------------------------------------------
// 검색어 컨트롤 관련
// ----------------------------------------------------------------------------
  // EVENT HANDLER : input focus
  const focusGnbSearchinput = useCallback((state) => {
    //console.log('focusGnbSearchinput === ', state);
    if (state === '' && searchHisotrys.length > 0) {
      setShowHistory(true)
    }
  }, [searchHisotrys.length])

  // EVENT HANDLER : input blur
  const blurGnbSearchinput = useCallback((state) => {
    //console.log('blurGnbSearchinput === ', state);
    /* showHistory === true && setShowHistory(false)
      showAutos === true && setShowAutos(false) */
  }, [])

  // EVENT HANDLER : input change
  const changeGnbSearchinputValue = useCallback((state) => {
    //console.log('changeGnbSearchinputValue === ', state);
    if (state !== '') {
      setShowHistory(false)
      if (searchAutos.length > 0) {
        setShowAutos(true)
        setKeywordAutos(state)
      }
    } else {
      setShowHistory(true)
      setShowAutos(false)
      setKeywordAutos('')
    }
  }, [searchAutos])

  // EVENT HANDLER : input delete
  const deleteGnbSearchinputValue = useCallback(() => {
    //console.log('deleteGnbSearchinputValue');
    setKeywordAutos('')
    setShowAutos(false)
    if (searchHisotrys.length > 0) {
      setShowHistory(true)
    }
  }, [searchHisotrys])

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventName, state, event) => {
    console.log('eventName === ', eventName, state)
    switch (eventName) {
      case 'change_Gnb_main' : changeMain(state); break
      case 'change_Gnb_category' : changeCategory(mainType, state); break
      case 'click_Gnb_my' : clickMy(); break
      case 'click_GnbSearch' : clickSearch(state); break
      case 'click_GnbSearch_close' : clickSearchClose(); break
      case 'click_SearchHistory_Link' : clickSearchHistoryLink(state); break
      case 'click_SearchHistory_DelLink' : clickSearchHistoryDelLink(state); break
      case 'click_SearchHistory_AllLink' : clickSearchHistoryAllLink(); break
      case 'click_SearchAuto_History' : clickSearchAutoHistory(state); break
      case 'click_SearchAuto_Go' : clickSearchAutoGo(state); break
      case 'click_SearchAuto_Search' : clickSearchAutoSearch(state); break
      case 'keypress_GnbSearch_input' : clickSearch(state); break
      case 'focus_GnbSearch_input' : focusGnbSearchinput(state); break
      case 'blur_GnbSearch_input' : blurGnbSearchinput(state); break
      case 'change_GnbSearch_inputValue' : changeGnbSearchinputValue(state); break
      case 'delete_GnbSearch_inputValue' : deleteGnbSearchinputValue(); break
    }
  }, [blurGnbSearchinput, changeCategory, changeGnbSearchinputValue, changeMain, clickMy, clickSearch, clickSearchAutoGo, clickSearchAutoHistory, clickSearchAutoSearch, clickSearchClose, clickSearchHistoryAllLink, clickSearchHistoryDelLink, clickSearchHistoryLink, deleteGnbSearchinputValue, focusGnbSearchinput, mainType])

  logConfig.render && console.log('%r GnbContainer')
  return (
    <Fragment>
      <div ref={gnbContainerRef}>
        <Gnb mode={modeType} mainOptions={mainList} mainValue={mainType} categoryOptions={categoryList} categoryValue={topCd} keyword={keyword} historyOptions={searchHisotrys} autosOptions={searchAutos} onEvent={handleEvent} />
        {showHistory && <SearchHistory mode="basic" options={searchHisotrys} onEvent={handleEvent}></SearchHistory>}
        {showAutos && <SearchAuto mode="basic" keyword={keywordAutos} options={searchAutos} onEvent={handleEvent}></SearchAuto>}
      </div>
    </Fragment>
  )
}
export default memo(GnbContainer)
