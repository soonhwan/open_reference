import { ADD_BOOK, REMOVE_BOOK } from '../actions/book';
import shortid from 'shortid';
import produce from 'immer';

const initialState = {
  books: [
    { id: shortid.generate(), title: '책1', author: '저자1' },
    { id: shortid.generate(), title: '책2', author: '저자2' },
    { id: shortid.generate(), title: '책3', author: '저자3' },
  ],
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOOK:
//       return {
//         ...state,
//         books: [...state.books, action.data]
//       }
//     case REMOVE_BOOK:
//       return {
//         ...state,
//         books: state.books.filter(book => book.id !== action.data)
//       }
//     default:
//       return state;
//   }
// }

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case ADD_BOOK:
      draft.books.push(action.data);
      break;
    case REMOVE_BOOK:
      draft.books.splice(draft.books.findIndex(book => book.id === action.data), 1);
      break;
    default:
      break;
  }
});

export default reducer;