import React, { Component } from 'react';
import PageTemplate from './PageTemplate'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  state = {
    inputValue : '',
    todos : [
      {id:0, text:'샘플입니다', done:true}
    ]
  } 

  handleChange = (e) =>{
    this.setState({
      inputValue : e.target.value
    });
  }

  onInsert = () =>{
    if(this.state.inputValue !== ''){
      const newItem = {
        text : this.state.inputValue,
        done : false,
        id : this.state.todos.length
      } 
      this.setState({
        //todos : this.state.todos.concat(newItem),
        todos : [...this.state.todos, newItem],
        inputValue : ''
      });
    }
  }

  render() {
    const {inputValue, todos} = this.state;
    const {handleChange, onInsert} = this;
    return (
      <PageTemplate>
        <TodoInput value={inputValue} 
          onChange={handleChange} 
          onInsert={onInsert} />
        <TodoList todos={todos} />
      </PageTemplate>
    );
  }
}

export default App;
