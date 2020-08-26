import React, { useState, useCallback } from 'react';
import BookList from './redux/BookList';
import Navbar from './redux/Navbar';
import BookForm from './redux/BookForm';

const PracticeRedux = () => {
  return (
    <>
      <h1>Redux sample</h1>
      <Navbar />
      <br /><hr />
      <BookList />
      <BookForm />
    </>
  );
};

export default PracticeRedux;






