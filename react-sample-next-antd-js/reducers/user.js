export const initialState = {
  me: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        me: { nickname: action.data },
      }
    case 'LOG_OUT':
      return {
        ...state,
        me: null,
      }
    default:
      return state;
  }
}

export default reducer;