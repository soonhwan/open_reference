import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const {children, done, onToggle, onRemove} = this.props;

    return (
      <div onClick={onToggle}>
        <input type="checkbox" checked={done} readOnly />
        <span>{children}</span>
        <button type="button" onClick={onRemove}>지우기</button>
      </div>
    );
  };
};

export default TodoItem; 