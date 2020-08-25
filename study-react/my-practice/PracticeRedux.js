import React, { useState, useCallback } from 'react';
import BookList from './redux/BookList';
import Navbar from './redux/Navbar';
import BookForm from './redux/BookForm';

const PracticeRedux = () => {
  return (
    <>
      <Navbar />
      <br /><br /><hr />
      <BookList />
      <BookForm />
    </>
  );
};

export default PracticeRedux;






