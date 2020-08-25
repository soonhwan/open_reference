import React, { useState, useContext, useCallback, memo } from 'react';
import { AllContext } from './Context';

const BookForm = memo(() => {
  console.log('rendering = BookForm');
  const { addBook } = useContext(AllContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = useCallback(() => {
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }, [title, author]);

  return (
    <div>
      <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button onClick={handleSubmit}>입력</button>
    </div>
  )
});

export default BookForm;