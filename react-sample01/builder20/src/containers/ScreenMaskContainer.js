import React, { Fragment, memo } from 'react';
import { DimPopup, LoadingPopup } from 'components';
import { shallowEqual, useDispatch, useSelector, useCallback } from 'hooks';
import * as baseActions from 'store/modules/base';
import utils from 'utils';
import { logConfig } from '_constants'

const ScreenMaskContainer = (props) => {  
  const dispatch = useDispatch()
  const base = useSelector(state => state.base, shallowEqual)

  const onEvent = useCallback((eventName, state, event) => {
    // 두번째 버튼이 정의 되지 않은 경우만 클릭 시 닫힘 처리
    if (utils.isEmpty(base.popup.info.secondBtnNm)) {
      dispatch(baseActions.closePopup())
    }
  }, [base.popup.info, dispatch])

  
  const getScreen = useCallback(() => {
    if (base.isShowScreenMask) {
      if (base.isLoading) {
        return (
          <Fragment>
            <DimPopup onEvent={onEvent} />
            <LoadingPopup />
          </Fragment>
        )
      } else {
        return <DimPopup onEvent={onEvent} />
      }
    }
    return null
  }, [base.isShowScreenMask, base.isLoading, onEvent])

  logConfig.render && console.log('%r ScreenMaskContainer')
  return getScreen()
}

export default memo(ScreenMaskContainer)
