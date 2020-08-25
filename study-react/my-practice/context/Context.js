import React, { useState, createContext, useMemo, useCallback, useEffect } from 'react';
import shortid from 'shortid';

export const AllContext = createContext();
export const Hi = 'hi';

const AllContextProvider = ({ children }) => {
  // Authorize
  const [login, setLogin] = useState(false);
  // Books  
  const [books, setBooks] = useState([
    {id: 1, title: '목적이 이끄는 삶', author: '릭워렌'},
    {id: 2, title: '나니아연대기', author: 'CS루이스'},
    {id: 3, title: '노드교과서', author: '제로초'}
  ]);

  // Authorize - Function
  const handleLogin = useCallback((bool) => () => {
    setLogin(bool);
  }, []);
  // Books - Function
  const removeBook = useCallback((id) => () => {
    setBooks(prev => prev.filter(v => v.id !== id));
  }, [books]);
  const addBook = useCallback((title, author) => {
    setBooks([...books, {title, author, id: shortid.generate()}])
  }, [books]);
  // Memorize
  const value = useMemo(() => ({books, removeBook, addBook, login, handleLogin}), [books, login]);

  // 데이터 중간 패칭 테스트
  // useEffect(() => {
  //   setTimeout(() => {
  //     setBooks([...books, {title: 'aaaa', author: 'bbb', id: shortid.generate()}])
  //   }, 2000);
  // }, []);

  return (
    <AllContext.Provider value={value}>
      {children}
    </AllContext.Provider>
  )
}

export default AllContextProvider;