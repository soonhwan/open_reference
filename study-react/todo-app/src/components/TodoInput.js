import React from 'react';

/*
state를 가지고 놀아야되는데
부모한테서 받아올거라고 했으니
this.props.뭐뭐뭐
이런식으로 받아와야되죠
근데 함수형으로 만들어서리
const TodoInput = ({여기에 prop내용}) => { 
*/

const TodoInput = ({value, onChange, onInsert}) => { 
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button type="button" onClick={onInsert}>추가하기</button>
    </div>
  );
};

export default TodoInput; 