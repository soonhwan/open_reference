import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  //input 에 값을 입력을 하면 전체 라이프사이틀이 도는데
  //list는 todos 가 변하면 렌더를 해야하기 때문에 조건을 걸어준다.
  shouldComponentUpdate(nextProps, nextState) {
      return this.props.todos !== nextProps.todos;
  }

  render() {
    const {todos, onToggle, onRemove} = this.props;
    const ls = todos.map((item) => {
      return <TodoItem key={item.id} 
                done={item.done} 
                onToggle={() => onToggle(item.id)}
                onRemove={(e) => onRemove(item.id, e)}>
                  {item.text}
                </TodoItem>;
    });
    return (
      <div>
        {ls}
      </div>
    );
  };
};

export default TodoList; 