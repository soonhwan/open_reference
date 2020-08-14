import React, { useState, useCallback, useMemo } from 'react';
import Checkbox from './Checkbox3';

const Practice22 = () => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  const aa = useCallback((e) => {
    setA(!a);
  },[a])
  const bb = useCallback(() => {
    setB(!b);
  },[b])
  const cc = useCallback(() => {
    setC(!c);
  },[c])
  const dd = useCallback(() => {
    setD(!d);
  },[d])
  
  return (
    <>

      <Checkbox label="2" checked={a} onChange={aa} />
      <Checkbox label="3" checked={b} onChange={bb} />
      <Checkbox label="2" onChange={cc} />
      <Checkbox label="3" onChange={dd} />

    </>
  );
};

export default Practice22;






