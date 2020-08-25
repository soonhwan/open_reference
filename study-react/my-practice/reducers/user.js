import { ADD_USER, REMOVE_USER, LOG_IN, LOG_OUT } from '../actions/user';

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

const reducer = (state = initialState, action) => {
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
}

export default reducer;