/*
  페이지 이름 : 전시/카드 상품 목록
  페이지 주소 : 
    /display/card/{cardId}
*/
import React from 'react';
import { useDispatch, useSelector, useEffect, shallowEqual } from 'hooks'
import { logConfig } from '_constants'

import * as baseActions from 'store/modules/base'
import * as displayCardActions from 'store/modules/display/displayCard';
import * as displayProductActions from 'store/modules/display/displayProduct';

const DisplayCardPage = () => {

  const dispatch = useDispatch()
  // UID : 1.오퍼링 랜딩 리스트(운영자 추천)
  // https://wiki.onestorecorp.com/pages/viewpage.action?pageId=303440484#id-02.2.%EB%A6%AC%EC%8A%A4%ED%8A%B8-1.%EC%98%A4%ED%8D%BC%EB%A7%81%EB%9E%9C%EB%94%A9%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9A%B4%EC%98%81%EC%9E%90%EC%B6%94%EC%B2%9C)

  // 1.타이틀 영역
  const { displayCard } = useSelector(state => ({ displayCard: state.displayCard }), shallowEqual)
  
  // 2.리스트 영역
  const { displayProduct } = useSelector(state => ({ displayProduct: state.displayProduct }), shallowEqual)

  useEffect(() => {
    const cardId = 'CARDEXAMPLE001'

    dispatch(displayCardActions.getDisplayCard(cardId))

    const listId = 'TAR000010680' // from displayCardActions
    const menuId = '' // from displayCardActions

    dispatch(displayProductActions.getDisplayProduct(listId, { menuId: menuId }))
  }, [dispatch])

  logConfig.render && console.log('%r DisplayCardPage')
  return (
     <div className="DisplayCardPage">
       DisplayCardPage
     </div>
  );
};

export default DisplayCardPage