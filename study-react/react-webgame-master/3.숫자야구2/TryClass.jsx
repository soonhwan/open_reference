import React, { Component } from 'react';

class TryClass extends Component {
  render() {
    return <li key={this.props.v.fruit + this.props.v.taste}><b>{this.props.v.fruit}</b> - {this.props.v.taste + this.props.i}</li>
  }
}

export default TryClass;