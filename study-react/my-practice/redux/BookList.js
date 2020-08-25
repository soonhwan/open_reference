import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_BOOK } from '../actions/book';

const BookList = memo(() => {
  console.log('rendering = BookList');
  const dispatch = useDispatch();
  const { books } = useSelector(state => state.book);

  const onRemoveBook = useCallback((id) => () => {
    dispatch({
      type: REMOVE_BOOK,
      data: id
    });
  }, []);

  return (
    <>
      <h1>도서목록</h1>
      <ul>
        {books.map((books) => (<li key={books.id}>{books.title}, {books.author} <button onClick={onRemoveBook(books.id)}>삭제</button></li>))}
      </ul>
    </>
  )
});

export default BookList;