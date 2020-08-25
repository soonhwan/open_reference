import React, { useState, useCallback } from 'react';
import BookList from './context/BookList';
import Navbar from './context/Navbar';
import BookForm from './context/BookForm';
import AllContextProvider from './context/Context';

const PracticeContext = () => {
  return (
    <AllContextProvider>
      <Navbar />
      <BookList />
      <BookForm />
    </AllContextProvider>
  );
};

export default PracticeContext;






