import React, { Component } from 'react';
import TopArea from './TopArea';
import Util from './Util';
import HeaderArea from './HeaderArea';

class Header extends Component {
  state = {
    topAreaCtrl : 1
  } 

  handleToggle = (e) =>{
    this.setState({
      topAreaCtrl : this.state.topAreaCtrl === 1 ? 2 : 1
    });
    e.preventDefault();
  }

  handleToggleClose = (e) =>{
    if(this.state.topAreaCtrl > 0){
      this.setState({
        topAreaCtrl : this.state.topAreaCtrl-1
      });
    }
    e.preventDefault();
  }

  handleToggleOpen = (e) =>{
    if(this.state.topAreaCtrl < 2){
      this.setState({
        topAreaCtrl : this.state.topAreaCtrl+1
      });
    }
    e.preventDefault();
  }

  render() {
    console.log(this.state.topAreaCtrl);
    return (
      <div className="commonHeaderObject o-CHO-full">
        <div className="o-CHO-inner">
          <TopArea trans={this.state.topAreaCtrl} hToggle={this.handleToggle}></TopArea>
          <Util trans={this.state.topAreaCtrl} hToggleClose={this.handleToggleClose} hToggleOpen={this.handleToggleOpen}></Util>
          <HeaderArea></HeaderArea>
        </div>
      </div>
    );
  }
};
  
export default Header; 