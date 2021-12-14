/*
  페이지 이름 : 세부장르 리스트
  페이지 주소 : 
    /list/category/:topMenuId
    /list/category/:topMenuId/:menuId
*/
import React, { memo } from 'react';
import { shallowEqual, useMemo, useCallback, useState, useEffect, useLayoutEffect, useRef, useReactRouter, useScrollHit, useDispatch, useSelector } from 'hooks';
import { BooksHelmet, SubTemplate, Lnb, PrimaryBar, SortingBar, List, ListNoResults } from 'components'

import * as baseActions from 'store/modules/base'
import * as displayCategoryActions from 'store/modules/display/displayCategory';
import * as displayProductActions from 'store/modules/display/displayProduct';

import utils from 'utils';
import queryString from 'query-string';
import { logConfig } from '_constants'

const defaultLstId = 'RNK050700001' // 인기순

const DisplayCategoryPage = () => {
  
  // GET REDUX STORE
  const dispatch = useDispatch()
  const { displayCategory } = useSelector(state => ({ displayCategory: state.displayCategory }), shallowEqual)
  const { displayProduct } = useSelector(state => ({ displayProduct: state.displayProduct }), shallowEqual)
  
  // GET MATCH & QUERY : topMenuId , menuId
  const { history, location, match } = useReactRouter()
  const query = queryString.parse(location.search)
  const { topMenuId, menuId } = match.params; // ex: fantasy ( GNB )
 
  // SET INIT PAGE STATE
  const [stMenuId, setMenuId] = useState(menuId) // ex: fantasyAll, DP1304(판타지), DP13042(역사/대하)
  const [compYn, setCompYn] = useState(false)
  const [groupList, setGroupList] = useState([]) // SortingBar : 정렬기준이 menuId마다 다름
  const [listId, setListId] = useState(utils.isEmpty(query.listId) ? defaultLstId : query.listId)

  // FUNCTION : 세부장르(카테고리) 목록 조회
  const getCategoryList = useCallback(async () => {
    await dispatch(displayCategoryActions.getDisplayCategory(topMenuId)).then(res => {
      
      // default setting : stMenuId , groupList
      if (res && utils.isEmpty(stMenuId)) {
        setMenuId(res.params?.menuList[0].menuKey) // default : 전체
        setGroupList(res.params?.menuList[0].groupList) // 전체에 해당하는 groupList(SortingBar)
      } else if (utils.isEmpty(groupList)) {
        // stMenuId 있지만 SortingBar가 없는 경우 해당 데이터 찾아서 groupList 할당 ( URI로 바로 접근하는 경우 )
        const matchingObject = res.params?.menuList.filter((x) => x.menuKey === stMenuId)[0]
        setGroupList(matchingObject.groupList)
      }
    })
  }, [dispatch, groupList, stMenuId, topMenuId])

  // FUNCTION : 상품 목록 조회
  const getProductList = useCallback(async (changedParam, bPaging = false) => {
    console.log('API ::: searchDailyProductList');
    const basicParam = {
      listId: listId,
      menuId: stMenuId,
      compYn: (compYn ? 'Y' : 'N'),
      startKey: displayProduct.startKey,
      freepassGrpCd: '', // bookpass 일때만 'PD013333'
      excludeKtoonYn: (stMenuId === 'DP26' ? 'Y' : '') // menuId 가 DP26(웹툰) 인 경우에만 "Y"
    }

    // 변경할 object만 갱신처리하여 새로운 param 생성 : param = { ...basic, ...addOrReplace }
    const param = { ...basicParam, ...changedParam }

    dispatch(baseActions.setScreenLoading(true));
    if (bPaging) {
      await dispatch(displayProductActions.getDisplayProductPaging(param.listId, param))
    } else {
      
      dispatch(displayProductActions.initDisplayProduct())
      await dispatch(displayProductActions.getDisplayProduct(param.listId, param))
    }
    dispatch(baseActions.setScreenLoading(false));
  }, [dispatch, displayProduct.startKey, listId, stMenuId, compYn]);

  const getProductListWithPaging = useCallback(() => {
    return getProductList({}, true)
  }, [getProductList]);

  // FIRST LOADING TRIGGER
  // 카테고리를 먼저 호출하고 이를 기반으로 상품을 호출해야 하므로 순서를 강제로 맞춘다.
  const firstLoading = async() => {
    await getCategoryList()
    await getProductList()
  }
  useEffect(() => {
    firstLoading()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 처음에 한번만 호출
   
  // LIST BY SCROLL ( 페이징 )
  const isHit = useScrollHit({ threshold: 300 });
  const isPendingPaging = useRef(false);
  useLayoutEffect(() => {
    if (isHit && displayProduct.hasNext === 'Y' && !isPendingPaging.current) {
      console.log('EVENT ::: PAGE SCROLL => DisplayDailyPage useLayoutEffect -> ', isHit, displayProduct)
      isPendingPaging.current = true;
      getProductListWithPaging()
    }
  }, [isHit, dispatch, displayProduct, getProductListWithPaging]);

  // EVENT HANDLER : 장르변경
  // [ISSUE] 장르변경시 선택되어 있는 listId(SortingBar)를 초기화해야 하는가
  const changeCategory = useCallback((eventData) => {
    console.log('EVENT ::: changeCategory ==> ', eventData);
    setMenuId(eventData.menuKey)
    setGroupList(eventData.groupList) //세부장르 변경시 종속된 SortingBar를 변경
    getProductList({ menuId: eventData.menuKey })
  }, [getProductList]);

  // EVENT HANDLER : 정렬변경
  const changeSort = useCallback((eventData) => {
    console.log('EVENT ::: changeSort ==> ', eventData);
    setListId(eventData.listId)
    getProductList({ listId: eventData.listId })
  }, [getProductList]);

  // EVENT HANDLER : 완료변경
  const changeSortCompleted = useCallback((eventData) => {
    console.log('EVENT ::: changeSortCompleted ==> ', eventData);
    setCompYn(eventData)
    getProductList({ compYn: eventData })
  }, [getProductList]);

  // EVENT HANDLER : 상품선택
  const clickCatetoryItem = useCallback((eventData) => {
    console.log('EVENT ::: clickCatetoryItem ==> ', eventData);
  }, []);

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventName, eventData, event) => {
    switch (eventName) {
      case 'change_PrimaryBar' : changeCategory(eventData); break
      case 'change_SortingBar_item' : changeSort(eventData); break
      case 'change_SortingBar_completed' : changeSortCompleted(eventData); break
      case 'click_ItemRenderer' : clickCatetoryItem(eventData); break
    }
  }, [changeCategory, changeSort, changeSortCompleted, clickCatetoryItem])

  // ITEM RENDERER : getListRender
  const getListRender = () => {
    if (displayProduct.productList.length > 0) {
      return <List mode="list" itemRenderer="default1Row" infoList={displayProduct.productList} onEvent={handleEvent} />
    } else {
      if (displayProduct.isLoading) {
        return null
      }
      return <ListNoResults mode="basic" thumb='/static/images/thumb/list_no_results_01.png' title={displayProduct.title + ' 결과가 존재하지 않습니다.'}></ListNoResults>
    }
  }

  // ITEM RENDERER : helmet
  const helmet = useMemo(() => {
    return (
      <BooksHelmet>
        <title>unknown</title>
        <meta name="keywords" content="unknown, 북스, 오디오북"/>
        <meta name="description" content="할인혜택이 가장 많은 국내 1위 eBook 서비스 도서, 장르소설, 웹소설, 만화, 웹툰을 한곳에서 이용하세요."/>
      </BooksHelmet>
    )
  }, []) // TODO. 전달 값에 대해 추가

  // ITEM RENDERER : getTotalCount
  const getTotalCount = () => {
    const count = displayCategory.startKey ? displayCategory.startKey.split('/')[0] : '0'
    return `총 ${utils.setComma(count)}권` // bookUnit 값이 카테고리별 고정이 아닌 경우(권, 회)가 있어 정책 정리 필요
  }
  
  logConfig.render && console.log('%r DisplayCategoryPage')
  return (
    <SubTemplate>
      { helmet }
      <div className="DisplayCategoryPage">
        <Lnb lnbTitle={displayCategory.upMenuKey}></Lnb>
        <PrimaryBar 
          mode="landingNav" itemList={displayCategory.menuList} itemValueKey="menuKey" itemTextKey="menuName" 
          selectedItemValue={stMenuId} onEvent={handleEvent}></PrimaryBar>
        <SortingBar mode="completed" title ={getTotalCount()} itemValueKey="listId" itemTextKey="title"
          itemList={groupList} selectedItemValue={listId} onEvent={handleEvent} />
        {displayProduct.productList.length > 0 && getListRender()}
      </div>
    </SubTemplate>
  );
};

export default memo(DisplayCategoryPage)
