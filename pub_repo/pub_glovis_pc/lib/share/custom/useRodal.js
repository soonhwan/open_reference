import React, { useState, useEffect, useCallback } from 'react';

const useRodal = (initValue=false, bodyFix=false) => {
  const [value, setValue] = useState(initValue);
  useEffect(() => {
    if(initValue === true && bodyFix === true) document.getElementsByTagName('html')[0].style.overflow="hidden";
  }, []);  

  const handler1 = useCallback((e) => {
    e.preventDefault();
    setValue(true);
    if (bodyFix === true) document.getElementsByTagName('html')[0].style.overflow="hidden";
  }, []);
  const handler2 = useCallback((flag) => {
    setValue(flag);
    if (bodyFix === true) document.getElementsByTagName('html')[0].style.overflow="auto";
  }, []);
  return [value, setValue, handler1, handler2];
}

export default useRodal;