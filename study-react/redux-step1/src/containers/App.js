import React, { Component } from 'react';
import Counter from '../components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Counter number="0" />
      </div>
    );
  }
}

export default App;
