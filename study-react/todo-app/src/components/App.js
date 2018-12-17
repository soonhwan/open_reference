import React, { Component } from "react";
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const initTodos = new Array(500).fill(0).map((item, index) => {
  return { id: index, text: `일정 ${index} `, done: false };
});

class App extends Component {
  idx = 0;
  getId = () => {
    return this.idx++;
  };

  state = {
    inputValue: "",
    todos: initTodos
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  onInsert = () => {
    if (this.state.inputValue !== "") {
      const newItem = {
        text: this.state.inputValue,
        done: false,
        id: this.getId()
      };
      this.setState({
        //todos : this.state.todos.concat(newItem),
        todos: [...this.state.todos, newItem],
        inputValue: ""
      });
    }
  };

  onToggle = id => {
    const { todos } = this.state;
    //const newTodos = [...todos]; //배열 복사하고 탐색 및 수정을 실행한뒤 setState로 바꿔치기

    //for in 방식
    /*for (const item in newTodos) {
      if (newTodos.hasOwnProperty(item)) {
        const obj = newTodos[item];
        if(obj.id === id){
          newTodos[item].done = !newTodos[item].done;
          this.setState({
              todos:newTodos
          });
          return false;
        }
      }
    }*/

    //find 방식
    /*newTodos.find((item) => {
      if(item.id === id){
        item.done =!item.done;
        this.setState({
          todos:newTodos
        });
        return false;
      }
    });*/

    //findIndex 방식
    const idx = todos.findIndex(item => item.id === id);
    const updateTodos = {
      ...todos[idx],
      done: !todos[idx].done
    };
    this.setState({
      todos: [
        ...todos.slice(0, idx),
        updateTodos,
        ...todos.slice(idx + 1, todos.length)
      ]
    });
  };

  onRemove = (id, e) => {
    const { todos } = this.state;
    const idx = todos.findIndex(item => item.id === id);
    this.setState({
      todos: [...todos.slice(0, idx), ...todos.slice(idx + 1, todos.length)]
    });
    e.stopPropagation();
  };

  /* onRemove = (id,e) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(item => item.id !== id)
    });
    e.stopPropagation();
  } */

  render() {
    const { inputValue, todos } = this.state;
    const { handleChange, onInsert, onToggle, onRemove } = this;
    return (
      <PageTemplate>
        <TodoInput
          value={inputValue}
          onChange={handleChange}
          onInsert={onInsert}
        />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </PageTemplate>
    );
  }
}

export default App;
