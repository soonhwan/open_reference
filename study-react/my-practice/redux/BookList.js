import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_BOOK } from '../actions/book';
import Button from '../Button';

const BookList = memo(() => {
  //console.log('rendering = BookList');
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
      <h3>도서목록</h3>
      <ul>
        {books.map((books) => (<li key={books.id}>{books.title}, {books.author} <Button className="btn-st1" onClick={onRemoveBook(books.id)}>삭제</Button></li>))}
      </ul>
    </>
  )
});

export default BookList;