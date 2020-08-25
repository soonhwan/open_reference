import React, { useState, useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_BOOK } from '../actions/book';
import shortid from 'shortid';

const BookForm = memo(() => {
  console.log('rendering = BookForm');
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onAddBook = useCallback(() => {
    dispatch({
      type: ADD_BOOK,
      data: { title, id: shortid.generate(), author }
    });
    setTitle('');
    setAuthor('');
  }, [title, author]);

  return (
    <div>
      <h1>도서추가</h1>
      <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button onClick={onAddBook}>입력</button>
    </div>
  )
});

export default BookForm;