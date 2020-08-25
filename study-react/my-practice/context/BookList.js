import React, { useContext, memo } from 'react';
import { AllContext } from './Context';

const BookList = memo(() => {
  console.log('rendering = BookList');
  const { books, removeBook } = useContext(AllContext);
  return (
    <ul>
      {books.map((book) => (<li key={book.id}>{book.title} <button onClick={removeBook(book.id)}>삭제</button></li>))}
    </ul>
  )
});

export default BookList;