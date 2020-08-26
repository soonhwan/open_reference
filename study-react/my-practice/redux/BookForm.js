import React, { useState, useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_BOOK } from '../actions/book';
import shortid from 'shortid';
import Button from '../Button';

const BookForm = memo(() => {
  //console.log('rendering = BookForm');
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
      <h3>도서추가</h3>
      <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <Button className="btn-st1" onClick={onAddBook}>입력</Button>
    </div>
  )
});

export default BookForm;