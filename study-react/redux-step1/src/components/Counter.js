import React from 'react';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
  return (
    <div className="counter" onClick={onIncrement} 
      onContextMenu={(e) => {
        e.preventDefault();
        onDecrement();}
      } 
      onDoubleClick={onSetColor} style={{backgroundColor:color}}> 
      {number}
    </div>
  );
};
export default Counter; 