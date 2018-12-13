import React, { Component } from 'react';

class TodoItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.done !== nextProps.done;
  }

  render() {
    const {children, done, onToggle, onRemove} = this.props;

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