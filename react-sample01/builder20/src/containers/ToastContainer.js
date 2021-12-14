import React, { Fragment, memo } from 'react';
import { Toast } from 'components';
import { shallowEqual, useEffect, useState, useDispatch, useSelector } from 'hooks';
import * as baseActions from 'store/modules/base';
import { logConfig } from '_constants'

const ToastContainer = (props) => {  
  const dispatch = useDispatch()
  const { toast } = useSelector(state => ({ toast: state.base.toast }), shallowEqual)

  // resize 고려 시
  // const [width, setWidth] = useState(window.outerWidth)
  // const [height, setHeight] = useState(window.outerHeight)
  // useEffect(() => {
  //   const updateWindow = () => {
  //     setWidth(window.outerWidth)
  //     setHeight(window.outerHeight)
  //   }
  //   window.addEventListener('resize', updateWindow);
  //   return () => {
  //     window.removeEventListener('resize', this.updateWindow);
  //   }
  // }, [])

  const handleShow = (id) => {
    dispatch(baseActions.showToast(id))
  }
  const handleHide = (id) => {
    dispatch(baseActions.hideToast(id))
  }

  logConfig.render && console.log('%r ToastContainer')
  return (<Toast toastList={toast} onShow={handleShow} onHide={handleHide}/>)
}

export default memo(ToastContainer)
