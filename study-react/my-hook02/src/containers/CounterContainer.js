import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';


const CounterContainer = () => {
  const countreducers = useSelector(state => state.countreducers, []);

  const dispatch = useDispatch()
  const onIncrease = useCallback(
    () => dispatch({ type: "counter/INCREMENT" }),
    [dispatch]
  )
  const onDecrease = useCallback(
    () => dispatch({ type: "counter/DECREMENT" }),
    [dispatch]
  )
  

  return (
    <Counter number={countreducers} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;