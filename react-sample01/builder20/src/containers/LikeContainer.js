import React, { memo } from 'react';
import { useCallback, useSelector, useDispatch, useState, useEffect } from 'hooks';
import utils from 'utils';
import { LinkRenderer } from 'components';
import * as detailActions from 'store/modules/detail';
import * as baseActions from 'store/modules/base';

const LikeContainer = (props) => {
  const dispatch = useDispatch()
  const {
    favoriteCnt,
    myFavoriteCnt, // 내가 좋아요 한 count  <-- 100개 이상 좋아여 했을때 처리를 위해
    isFavorite // 해당 책에 좋아요 했는지 여부
  } = useSelector(state => state.detail);
  const [activeMyLike, setActiveMyLike] = useState(false) // 좋아요 활성화 유무

  const favoriteCount = favoriteCnt // 상품에 대한 좋아요 총 수

  useEffect(() => {
    setActiveMyLike(isFavorite === 'Y')
  }, [isFavorite]);

  const clickLike = useCallback((eventData) => {
    //사용자가 좋아요 할 수 있는 최대 개수 999개 이상 좋아요 할 경우
    console.log('!!! 좋아요 누름', myFavoriteCnt, isFavorite)
    if (myFavoriteCnt > 999) {
      setActiveMyLike(false);
      dispatch(baseActions.addToast({
        type: 'bot', // 'mid'
        text: '좋아하는 작품은 999개만 추가할 수 있습니다.'
      }))
      return;
    }
    if (!activeMyLike) {
      // var filter = 'win16|win32|win64|mac|macintel'; 
      // if (navigator.platform) { 
      //   if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
      //     //mobile 
      //     alert('mobile 접속'); 
      //   } else { 
      //     //pc 
      //     alert('pc 접속'); 
      //   } 
      // }       
      dispatch(detailActions.updateLikeYn()).then((res) => {
        setActiveMyLike(true);
        console.log('!!! 좋아요 누름');
      })
      dispatch(baseActions.addToast({
        type: 'bot',
        text: '좋아하는 작품에 추가되었습니다.'
      }))
    } else {
      dispatch(detailActions.updateLikeYn()).then((res) => {
        setActiveMyLike(false);
        console.log('!!! 좋아요 취소');
      })
      dispatch(baseActions.addToast({
        type: 'bot',
        text: '좋아하는 작품에서 삭제되었습니다.'
      }))
    }
  }, [activeMyLike, dispatch, isFavorite, myFavoriteCnt]);

  const handleEvent = useCallback((eventName, eventData, event) => {
    switch (eventName) {
      case 'click_TextButton_likeBlack':
      case 'click_TextButton_likeBlackSel': clickLike(eventData); break
    }
  }, [clickLike]);

  const param = {
    mode: 'icontext',
    btnClass: 'btnDetailUtil',
    size: 'B14',
    color: 'Drak',
    textClass: 'DetailUtilText',
    iconsize: 24,
    multiEvent: true,
    prevEvent: props.prevEvent,
    onEvent: handleEvent
  }
  return (
    <LinkRenderer {...param} icon={!activeMyLike ? 'likeBlack' : 'likeBlackSel'}>
      {utils.setComma(favoriteCount)}
    </LinkRenderer>
  )
}

export default memo(LikeContainer)
