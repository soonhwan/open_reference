import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
 state = {};

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceivePreps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidlUpdate()

  componentWillMount() {
    console.log('componentWillUnmount : 사이클 시작');
  }  
  componentDidMount() {
    console.log('componentDidMount : 컴포넌트 성공');
    this._getMovies();
  }
  
  componentWillUpdate() {
    console.log('componentWillUpdate : 업데이트중...');
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('http://localhost:3000/list_movies.json')
    .then(res => res.json())
    .then(json => json.data.movies) //return 생략가능
    .catch(err => console.log(err))   
  }
  
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}        
      />
    })
    
    return movies;
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loding...'}         
      </div>
    );
  }
}

export default App;
