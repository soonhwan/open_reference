import React from 'react';
import { useEffect, useReactRouter } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import * as baseActions from 'store/modules/base';

function RouterListener(props) {
  const { history, location, match } = useReactRouter()
  const dispatch = useDispatch()
  const { base } = useSelector(state => ({ base: state.base }))


  useEffect(() => {
    const handleChange = location => {
      // console.log('Route has changed!')
      // console.log('this.props', props.history)
      // console.log('props.location.pathname', props.location.pathname)

      dispatch(baseActions.setReferrer(location.pathname)) // then을 쓰기 위해 Promise 사용하는것은 안좋음.. 성능 저하 발생

      // dispatch(baseActions.setReferrer(location.pathname)).then(() => {
      //   console.log('-------------dispatch setReferrer');
      // })

      window.shouldCancel = false;
    }

    const unlisten = history.listen(handleChange)

    // effect 이후에 어떻게 정리(clean-up)할 것인지 표시
    return () => {
      unlisten(handleChange)
    }
  }, [history, location.pathname, dispatch]); // 컴포넌트 범위 내에서 바뀌는 값들과 effect에 의해 사용되는 값들을 모두 포함

  return ( // TODO. 반복적인 Layout의 경우 Template 처리 필요
    <div className="router-box">
    </div>
  )
}


export default RouterListener;
