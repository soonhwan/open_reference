/*
  페이지 이름 : 검색
  페이지 주소 : 
    /search
    /search?searchQuery={검색어}
    /search/bookpass
    /search/bookpass?searchQuery={검색어}
*/
import React, { Fragment, memo } from 'react';
import { shallowEqual, useMemo, useCallback, useState, useEffect, useLayoutEffect, useRef, useReactRouter, useScrollHit, useDispatch, useSelector } from 'hooks';
import { BooksHelmet, SubTemplate, Lnb, PrimaryBar, SubHeader, List, SortingBar, ListNoResults, SearchBottomBtn } from 'components'
import utils from 'utils';
import * as baseActions from 'store/modules/base'
import * as searchUnifiedActions from 'store/modules/search/searchUnified';
import * as SearchAutoCompleteActions from 'store/modules/search/searchAutoComplete';
import queryString from 'query-string';
import { logConfig } from '_constants'

//정렬 옵션(임시)
const orderByList = [
  { value: 'accuracy', text: '정확도순' },
  { value: 'popular', text: '인기순' },
  { value: 'recent', text: '최신순' },
]

//카테고리 리스트(임시)
const groupMenuList = [
  { text: '전체', value: null },
  { text: '웹소설', value: 'WEBNOVEL' },
  { text: '웹툰', value: 'WEBTOON' },
  //{ text: '일반도서', value: 'GENERAL' },
  //{ text: '로맨스', value: 'ROMANCE' },
  //{ text: '판타지', value: 'FANTASY' },
  //{ text: '만화', value: 'COMIC' },
]

//검색어(임시)
const keyWord = '테스트' 



const SearchPage = (props) => {
  const dispatch = useDispatch()
  // Route => history, location, match값 설정
  const { history, location, match } = useReactRouter()
  const query = queryString.parse(location.search);

  // URI로 보낸 검색어 
  const searchQuery = query.searchQuery || keyWord;
  console.log('searchPage query : ', searchQuery)

  // 기본검색
  useEffect(() => {
    const param = {
      type: query.type || null,
      group: query.group || null,
      // 아래에 있는 값들은 안보내면 기본값으로 조회
      // orderBy: query.orderBy || 'accuracy',
      // startIndex: query.startIndex || 0,
      // size: query.size || (query.group === null ? 4 : 30)
    };

    dispatch(baseActions.setScreenLoading(true));

    // searchQuery 필수값
    dispatch(searchUnifiedActions.getSearchUnified(searchQuery, param)).then(res => {
      dispatch(baseActions.setScreenLoading(false));
    })
  }, [dispatch, query.group, query.type, searchQuery])

  // 자동완성 검색어 검색
  useEffect(() => {
    dispatch(SearchAutoCompleteActions.getSearchAutoComplete(searchQuery));
  }, [dispatch, searchQuery]);

  // 검색결과 redux데이터 호출
  const { searchUnified } = useSelector(state => ({ searchUnified: state.searchUnified }))
  // 자동완성 redux데이터 호출
  const { searchAutoComplete } = useSelector(state => ({ searchAutoComplete: state.searchAutoComplete }))


  console.log('searchPage reduxData : ', searchUnified)
  console.log('searchPage autoComplete reduxData : ', searchAutoComplete)

  
  const mainType = location.pathname.match('bookpass') !== null ? 'pass' : 'books' //북스 or 북패스
  const [groupID, setGroupID] = useState(utils.isEmpty(query.group) ? null : query.group); //카테고리
  const [orderByID, setOrderByID] = useState(utils.isEmpty(query.orderBy) ? 'accuracy' : query.orderBy); //정렬옵션

  // LIST BY SCROLL ( 페이징 )
  useLayoutEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        /* if (displayProduct.hasNext && !displayProduct.isLoading) {
          getProductListPaing();
        } */
        console.log('onScroll')
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // EVENT HANDLER : 카테고리 변경
  const changeCategory = useCallback((eventData) => {
    console.log('EVENT ::: changeCategory = ', eventData)
    const isPass = (mainType === 'pass') ? '/bookpass' : ''
    if (eventData.value === null) {
      history.replace(`/search${isPass}`)
    } else {
      history.replace(`/search${isPass}?group=${eventData.value}`)
    }
    setGroupID(eventData.value)
    setOrderByID('accuracy')
  }, [history, mainType])

  // EVENT HANDLER : 정렬옵션 변경
  const changeSort = useCallback((eventData) => {
    console.log('EVENT ::: changeSort = ', eventData);
    const isPass = (mainType === 'pass') ? '/bookpass' : ''
    history.replace(`/search${isPass}?orderBy=${eventData.value}`)
    setOrderByID(eventData.value)
  }, [history, mainType])

  // EVENT HANDLER : 카테고리 타이틀 클릭
  const clickSubHeaderTitle = useCallback((eventData) => {
    console.log('EVENT ::: clickSubHeaderTitle = ', eventData)
    //history.replace(`/search/?group=${eventData}`)
  }, [])

  // EVENT HANDLER : 아이템 클릭
  const clickItemRenderer = useCallback((eventData) => {
    console.log('EVENT ::: clickItemRenderer = ', eventData.prodId)
    //history.replace(`/detail/?prodId=${eventData.prodId}`)
  }, [])

  // EVENT HANDLER : 통합검색결과 더보기 클릭
  const clickTotalSearch = useCallback((eventData) => {
    console.log('EVENT ::: clickTotalSearch')
  }, [])

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventName, eventData, event) => {
    console.log('EVENT ::: handleEvent = ', eventName, eventData, event)
    switch (eventName) {
      case 'change_PrimaryBar' : changeCategory(eventData); break
      case 'change_SortingBar_item' : changeSort(eventData); break
      case 'click_SubHeaderTitle' : clickSubHeaderTitle(eventData); break
      case 'click_ItemRenderer' : clickItemRenderer(eventData); break
      case 'click_ListNoResults_TotalSearch' : clickTotalSearch(); break
      case 'click_ListMoreBtn_TotalSearch' : clickTotalSearch(); break
    }
  }, [changeCategory, changeSort, clickItemRenderer, clickSubHeaderTitle, clickTotalSearch])
  
  // ITEM RENDERER : getLnb
  const getLnb = useCallback((title) => {
    return <Lnb lnbTitle={title}></Lnb>
  }, [])

  // ITEM RENDERER : getPrimaryBar
  const getPrimaryBar = useCallback(() => {
    if (searchUnified.searchResult.length > 1) {
      return <PrimaryBar mode="landingNav" itemList={groupMenuList} selectedItemValue={groupID} onEvent={handleEvent}></PrimaryBar> 
    } 
  }, [groupID, handleEvent, searchUnified.searchResult])

  // ITEM RENDERER : getSortingBar
  const getSortingBar = useCallback((title) => {
    if (groupID === null && searchUnified.searchResult.length > 1) {
      return <SubHeader mode="link" title={title} onEvent={handleEvent} />
    } else {
      return <SortingBar mode="basic" title ={title} itemList={orderByList} selectedItemValue={orderByID} onEvent={handleEvent} />
    }
  }, [groupID, handleEvent, orderByID, searchUnified.searchResult])

  // ITEM RENDERER : getList
  const getList = useCallback((list) => {
    return <List mode="list" itemRenderer="search1Row" infoList={list} onEvent={handleEvent} keyword={searchQuery} />
  }, [handleEvent, searchQuery])

  // ITEM RENDERER : getListRender
  const getListRender = useCallback(() => {
    if (groupID === null && searchUnified.searchResult.length > 1) {
      // 전체탭인 경우 기본 4개
      return searchUnified.searchResult.map((v, i) => {
        const productList = v.productList.filter((v, i) => i < 4) 
        return (
          <Fragment key={v.topMenuId}> 
            {getSortingBar(`${v.groupNm} ${v.productList.length}개`)}
            {getList(productList)}
          </Fragment>
        )
      })
    } else {
      //단일 group 내 검색 시 기본 30개
      if (groupID === null && searchUnified.searchResult[0].group !== '') {
        setGroupID(searchUnified.searchResult[0].group)
      } else {
        const group = searchUnified.searchResult.filter(v => v.group === groupID)
        if (group.length > 0) {
          const productList = group[0].productList.filter((v, i) => i < 30) 
          return (
            <Fragment> 
              {getSortingBar(`${group[0].groupNm} ${group[0].productList.length}개`)}
              {getList(productList)}
            </Fragment>
          )
        }
      }
    }
  }, [getList, getSortingBar, groupID, searchUnified.searchResult])

  // ITEM RENDERER : getSearchPageRender
  const getSearchPageRender = useCallback(() => {
    if (searchUnified.searchResult.length > 0) {
      return (
        <Fragment>
          {getLnb(`${searchQuery} 검색결과 ${searchUnified.totalSearchCount}개`)}
          <div>
            {getPrimaryBar()}
            {getListRender()}
          </div>
          {mainType === 'pass' && <SearchBottomBtn mode="basic" moreBtn={'통합검색결과 더보기'} onEvent={() => { handleEvent('click_ListMoreBtn_TotalSearch') }}></SearchBottomBtn>}
        </Fragment>
      )
    } else {
      if (searchUnified.isLoading) {
        return null
      }
      return (
        <Fragment>
          {getLnb(`${searchQuery} 검색결과 ${searchUnified.totalSearchCount}개`)}
          <ListNoResults mode="basic" 
            thumb={'/static/images/thumb/list_no_results_01.png'} 
            title={mainType === 'pass'
                    ? `북패스 내 <b>${searchQuery}</b> 검색결과가 없습니다.`
                    : `<b>${searchQuery}</b> 검색결과가 없습니다.`
                  } 
            summary={'다른 검색어를 입력하거나<br />철자와 띄어쓰기를 확인해 보세요.'} 
            moreBtn={mainType === 'pass' ? '통합검색결과 더보기' : null} 
            onEvent={handleEvent}></ListNoResults>
        </Fragment>
      )
    }
  }, [getListRender, getLnb, getPrimaryBar, handleEvent, mainType, searchQuery, searchUnified])

  const helmet = useMemo(() => {
    return (
      <BooksHelmet>
        <title>unknown</title>
        <meta name="keywords" content="unknown, 북스, 오디오북"/>
        <meta name="description" content="할인혜택이 가장 많은 국내 1위 eBook 서비스 도서, 장르소설, 웹소설, 만화, 웹툰을 한곳에서 이용하세요."/>
      </BooksHelmet>
    )
  }, []) // TODO. 전달 값에 대해 추가

  logConfig.render && console.log('%r SearchPage')
  return (
    <SubTemplate mode="search">
      { helmet }
      <div className="SearchPage">
        {getSearchPageRender()}
      </div>
    </SubTemplate>
  );
};

export default SearchPage

