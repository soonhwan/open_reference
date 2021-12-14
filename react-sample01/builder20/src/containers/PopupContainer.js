import React, { Fragment, memo } from 'react';
import { Popup, DropboxPopup, PayPopup } from 'components';
import { shallowEqual, useDispatch, useSelector } from 'hooks';
import * as baseActions from 'store/modules/base';
import { logConfig } from '_constants'

const CLICK_POPUP_FIRSTBTN = 'click_Popup_firstBtn';
const CLICK_POPUP_SECONDBTN = 'click_Popup_secondBtn';

const PopupContainer = (props) => {  
  const dispatch = useDispatch()
  const popup = useSelector(state => state.base.popup, shallowEqual)
  const info = popup.info
  
  const onEvent = (eventName, state, event) => {
    // console.log('PopupContainer -> openPopup onEvent', eventName, state, event)
    if (eventName === CLICK_POPUP_FIRSTBTN || eventName === CLICK_POPUP_SECONDBTN) {
      dispatch(baseActions.closePopup())
    }
    info.onEvent(eventName, state, event)
  }

  const getPopup = () => {
    if (info.mode === 'dropdown') {
      return <DropboxPopup 
        title={info.title} 
        options={info.options} 
        optionValue={info.optionValue} 
        prevEvent={info.prevEvent}
        onEvent={onEvent} />
    } else if (info.mode === 'share') {
      return <Popup 
        mode={info.mode}
        title={info.title} 
        detail={info.detail} 
        snsShares={info.snsShares}
        firstBtnNm={info.firstBtnNm}
        prevEvent={info.prevEvent}
        onEvent={onEvent}>
          {info.contents}
        </Popup>
    } else if (info.mode === 'detailCover') {
      return <Popup 
        mode={info.mode}
        coverPic={info.coverPic} 
        prevEvent={info.prevEvent}
        onEvent={onEvent} />
    } else if (info.mode === 'appMove') {
      return <Popup 
        mode={info.mode}
        firstBtnNm={info.firstBtnNm}
        secondBtnNm={info.secondBtnNm}
        btnStyle={info.btnStyle}
        prevEvent={info.prevEvent}
        onEvent={onEvent} />
    } else if (info.mode === 'pay') {
      return <PayPopup
        mode="basic"
        myHold={info.myHold}
        productItem={info.productItem}
        rentInfo={info.rentInfo}
        couponLists={info.couponLists}
        prevEvent={info.prevEvent}
        onEvent={onEvent} />
    } else {
      return <Popup 
        title={info.title} 
        detail={info.detail} 
        firstBtnNm={info.firstBtnNm} 
        secondBtnNm={info.secondBtnNm} 
        checkBtnNm={info.checkBtnNm}
        btnStyle={info.btnStyle}
        prevEvent={info.prevEvent}
        onEvent={onEvent}>
          {info.contents}
        </Popup>
    }
  }

  logConfig.render && console.log('%r PopupContainer')
  return (
    popup.visible && <Fragment>
      { getPopup() }
    </Fragment>
  )
}

export default memo(PopupContainer)
