import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

/*
class Movie extends Component {
  static propTypes = {
	  title : PropTypes.string.isRequired,    
	  poster : PropTypes.string.isRequired    
  }

  render() {
    return (
      <div>
          <h1>{this.props.title}</h1>
          <MoviePoster poster={this.props.poster} />
      </div>
    );
  }
}
*/

//functional 컴포넌트 사용
//state, render, lifecycle 등등이 없음
//this props를 삭제 해줘야함! 클래스가 아니니깐! 클래스들은 그안에 this라는 키워드가 존재
//functional 컴포넌트는 이미 props를 사용함으로 this가 필요 없음
//html을 return해줄뿐 
//하지만 state를 잃게되지. 업데이트하고, 그런 멋진것들이 다 사라짐
function Movie({title, poster}){
  return(
    <div>
        <h1>{title}</h1>
        <MoviePoster poster={poster} />
    </div>
  )
}
Movie.propTypes = {
  title : PropTypes.string.isRequired,    
  poster : PropTypes.string.isRequired    
}

/*
class MoviePoster extends Component{
  static propTypes = {
	  poster : PropTypes.string.isRequired    
  }

  render(){
    return(
      <img src={this.props.poster} alt=""/>
    );
  }
}
*/

function MoviePoster({poster}){
  return(
    <img src={poster} alt=""/>
  )
}
MoviePoster.propTypes = {
  poster : PropTypes.string.isRequired
}

export default Movie;
