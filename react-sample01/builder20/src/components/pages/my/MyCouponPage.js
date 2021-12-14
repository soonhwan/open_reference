/*
  페이지 이름 : 내 쿠폰 목록
  페이지 주소 : 
    /my/coupon
*/
import React, { Fragment } from 'react';
import { BooksHelmet, SnbTemplate, Lnb, PrimaryBar, EditBar, List, ListNoResults } from 'components'
import { useCallback, useState, useEffect, useLayoutEffect, useRef, useReactRouter, useScrollHit, useDispatch, useSelector } from 'hooks';
import * as baseActions from 'store/modules/base'
import * as myCouponActions from 'store/modules/my/myCoupon';
import { logConfig } from '_constants'

const MyCouponPage = (props) => {

  const dispatch = useDispatch()
  const { myCoupon } = useSelector(state => ({ myCoupon: state.myCoupon }))

  const [isEditMode, setIsEditMode] = useState(false) 
  const [selectedList, setSelectedList] = useState([]) 

  // 최초 로딩 
  useEffect(() => {
    dispatch(myCouponActions.getMyCoupon())
  }, [dispatch]);
  
  // 로딩 발생시마다 로딩중 처리
  useEffect(() => {
    dispatch(baseActions.setScreenLoading(myCoupon.isLoading)) // 로딩중 처리
  }, [myCoupon.isLoading, dispatch]);


// ----------------------------------------------------------------------------
// Event
// ----------------------------------------------------------------------------
  const handleEvent = useCallback((eventName, eventData, event) => {
    console.log(eventName, eventData, event)
  }, [])

  const getNormalRender = useCallback(() => {
    return (
      <Fragment>
        <Lnb lnbTitle={'쿠폰'} lnbUtil={[{ text: '편집', value: 'otp-1' }]}></Lnb>
        <EditBar mode="basic" optionNum={selectedList.length} onEvent={handleEvent} />
        <List mode="list" itemRenderer="coupon" infoList={myCoupon.couponList} onEvent={handleEvent} />
      </Fragment>
    )
  }, [myCoupon.couponList, selectedList, handleEvent])
  const getEditRender = useCallback(() => {
    return (
      <Fragment>
        <Lnb lnbTitle={'쿠폰'} lnbUtil={[{ text: '취소', value: 'otp-1' }]}></Lnb>
        <EditBar mode="basic" optionNum={selectedList.length} onEvent={handleEvent} />
        <List mode="listEdit" itemRenderer="coupon" infoList={myCoupon.couponList} onEvent={handleEvent} />
      </Fragment>
    )
  }, [myCoupon.couponList, selectedList, handleEvent])
  const getRender = useCallback((isEdit) => {
    if (!isEdit) {
      return getNormalRender()
    } else {
      return getEditRender()
    }
  }, [getNormalRender, getEditRender])

  logConfig.render && console.log('%r CouponPage')
  return (
    <SnbTemplate>
      <BooksHelmet>
        <title>unknown</title>
        <meta name="keywords" content="unknown, 북스, 오디오북"/>
        <meta name="description" content="할인혜택이 가장 많은 국내 1위 eBook 서비스 도서, 장르소설, 웹소설, 만화, 웹툰을 한곳에서 이용하세요."/>
      </BooksHelmet>
      <div className="ListCategoryPage">
        { getRender(isEditMode) }
      </div>
    </SnbTemplate>
  );
};

export default MyCouponPage
