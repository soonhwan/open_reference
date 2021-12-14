// 자동으로 action 명칭 뒤에 접미사(_PENDING, _SUCCESS, _ERROR) 생성
/**
 * creates thunk from promiseCreator
 * @param {string} actionType
 * @param {() => Promise<*>} promiseCreator
 */
import { logConfig } from '_constants'
export default function createPromiseThunk(actionType, promiseCreator) {

  return (...params) => {
    return async dispatch => {

      // promiseCreator 예외 처리
      if (!promiseCreator) {
        promiseCreator = (...params) => new Promise((resolve, reject) => {
          resolve(...params)
        })
      }
      
      // promise begins
      dispatch({ type: `${actionType}_PENDING` });
      
      try {
        const response = await promiseCreator(...params);

        // storybook 데이터와 상이한 부분 처리 (향후 다른 조건으로 처리 하도록 변경 필요)
        let resulResponse;
        if (typeof response === 'object' && Object.prototype.hasOwnProperty.call(response, 'result_code')) {
          resulResponse = response;
        } else {
          if (Object.prototype.hasOwnProperty.call(response, 'data')) {
            resulResponse = response.data;
          } else {
            resulResponse = response;
          }
        }

        logConfig.createPromiseThunk && console.log(`${actionType}_SUCCESS => `, resulResponse)
        dispatch({
          type: `${actionType}_SUCCESS`,
          payload: resulResponse
        });
        return resulResponse;
      } catch (e) {
        console.error(`${actionType}_ERROR => `, e)
        dispatch({
          type: `${actionType}_ERROR`,
          payload: e
        });
        // throw e;
      }
    };
  };
}
