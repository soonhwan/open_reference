import { ADD_USER, REMOVE_USER, LOG_IN, LOG_OUT } from '../actions/user';
import produce from 'immer';

const initialState = {
  users: [
    { id: 'heroyooi', name: '성연욱', age: 36 },
    { id: 'ksh', name: '권순환', age: 39 },
    { id: 'ssw', name: '서성우', age: 39 },
    { id: 'kys', name: '김예슬', age: 27 },
  ],
  me: null,
}

const dummyUser = { id: 'ksh', name: '권순환', age: 39 };

/* const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.data]
      }
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.data)
      }
    case LOG_IN:
      return {
        ...state,
        me: dummyUser
      }
    case LOG_OUT:
      return {
        ...state,
        me: null
      }
    default:
      return state;
  }
} */

// https://github.com/heroyooi/react/blob/master/react-nodebird/prepare/front/reducers/post.js
const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case ADD_USER:
      draft.users.push(action.data);
      break;
    case REMOVE_USER:
      // draft.users = draft.users.filter(user => user.id !== action.data); // 원본이 변화되지 않음
      draft.users.splice(draft.users.findIndex(user => user.id === action.data), 1); // 원본을 변화시켜줌
      break;
    case LOG_IN:
      draft.me = dummyUser;
      break;
    case LOG_OUT:
      draft.me = null;
      break;
    default:
      break;
  }
});

export default reducer;