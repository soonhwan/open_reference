import React, { useContext, memo } from 'react';
import { AllContext } from './Context';
import Button from '../components/Button';

const BookList = memo(() => {
  //console.log('rendering = BookList');
  const { books, removeBook } = useContext(AllContext);
  return (
    <ul>
      {books.map((book) => (<li key={book.id}>{book.title} <Button className="btn-st1" onClick={removeBook(book.id)}>삭제</Button></li>))}
    </ul>
  )
});

export default BookList;