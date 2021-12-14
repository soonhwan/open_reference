import React, { memo } from 'react';
import { useEffect, useSelector, useDispatch, useReactRouter, useState, useCallback, useMemo, useRef } from 'hooks';
import { LinkRenderer } from 'components';
import utils from 'utils';
import * as detailActions from 'store/modules/detail';
import * as baseActions from 'store/modules/base';

const ScoreContainer = (props) => {
  const dispatch = useDispatch()
  const {
    myRatingScore, // 내 평점   // 내 평점 - 이북, 만화만 존재 -> 모두 존재
  } = useSelector(state => state.detail);
  const [avgScoreYn, setAvgScoreYn] = useState('N') // 평점의 유무(Y, N)
  const [myavgScoreNm, setmyavgScoreNm] = useState(myRatingScore) // 나의 평점 점수(0, 1, 2, 3, 4, 5) - 값만 필드값으로 교체

  useEffect(() => {
    setmyavgScoreNm(myRatingScore)
  }, [myRatingScore]);

  const clickAvgScoreYn = useCallback(() => {
    setAvgScoreYn('Y');
  }, []);
  
  const clickAvgScoreNm = useCallback((eventData) => {
    setTimeout(() => { // setTimeout 구문은 DetailTop의 getDetailUtilMyAvgscore 함수 내부 참조(싱크를 맞추기 위한 용도) - 도금호 매니저님이 기능 개발 중...
      setAvgScoreYn('N');
      setmyavgScoreNm(eventData);
      if (eventData > 0) {
        dispatch(detailActions.updateStarPoint(eventData)).then((res) => {
          console.log('!!! 별점 등록, 등록한 별점:', eventData, res.result_code)
          if (res.result_code === '00') {
            setAvgScoreYn(true);
            dispatch(baseActions.addToast({
              type: 'bot',
              text: `별점이 등록되었습니다. ${eventData}점`
            }))  
          }
        })
      } else {
        dispatch(detailActions.updateStarPoint(eventData)).then((res) => {
          console.log('!!! 별점 등록, 등록한 별점:', eventData, res.result_code)
          if (res.result_code === '00') {
            setAvgScoreYn(false);
            dispatch(baseActions.addToast({
              type: 'bot',
              text: '별점 등록이 취소되었습니다.'
            }))
          }
        })
      }
    }, 1000);
  }, [dispatch]);

  const handleEvent = useCallback((eventName, eventData, event) => {
    switch (eventName) {
      case 'click_TextButton_avgscoreBlack':
      case 'click_TextButton_avgscoreBlackSel': clickAvgScoreYn(); break
      case 'click_TextButton_myAvgScore': clickAvgScoreNm(eventData); break
    }
  }, [clickAvgScoreYn, clickAvgScoreNm]);

  // 내 별점 view
  const getMyAvgscore = () => {
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
      <LinkRenderer {...param} icon={myavgScoreNm === 0 ? 'avgscoreBlack' : 'avgscoreBlackSel'}>내별점</LinkRenderer>
    )
  }

  // 내 별점 edit
  const getDetailUtilMyAvgscore = () => {
    const isMyAvgscoreYn = null;
    const tAvgNum = [1, 2, 3, 4, 5];
    const tAvgTag = tAvgNum.map((item, index) => {
      const param = {
        mode: 'icon',
        icon: item <= Number(myavgScoreNm) ? 'detailAvgscoreSel' : 'detailAvgscore',
        iconsize: 40,
        onEvent: (eventName, state, event) => {
          event.preventDefault()
          clearTimeout(isMyAvgscoreYn);
          setmyavgScoreNm(item);
          // eventNm, onEvent, prevEvent, value, oldValue, event
          // utils.triggerEvent('click_TextButton_myAvgScore', props.onEvent, props.prevEvent, item, myavgScoreNm, event)
          handleEvent('click_TextButton_myAvgScore', item, event);
          setTimeout(() => {
            setAvgScoreYn('N');
            setmyavgScoreNm(item);
          }, 1000);
          
        }
      }
      return (<LinkRenderer {...param} key={index}>{item}점 주기</LinkRenderer>)
    })

    return (
      <div className="DetailTopTextFooterMyAvgscore Container">
        {tAvgTag}
      </div>
    )
  }

  return avgScoreYn === 'N' ? getMyAvgscore() : getDetailUtilMyAvgscore()  
}

export default memo(ScoreContainer)