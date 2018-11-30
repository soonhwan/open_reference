import React, { Component } from 'react';
import Main from './pages/Main';

class App extends Component {
  state = {
    topArea : 1
  }
  
  render() {
    return (
      <Main></Main>
    );
  }
}

export default App;
