import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const {todos} = this.props;
    const ls = todos.map((item) => {
      return <TodoItem key={item.id} done={item.done}>{item.text}</TodoItem>;
    });
    return (
      <div>
        {ls}
      </div>
    );
  };
};

export default TodoList; 