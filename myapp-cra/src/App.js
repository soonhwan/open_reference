import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
 state = {
   a:0
 };
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceivePreps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidlUpdate()

  componentWillMount() {
    console.log('componentWillUnmount : 사이클 시작');
  }  
  componentDidMount() {
    console.log('componentDidMount : 컴포넌트 성공');
    
    setTimeout(() => {
      this._getMovies();
    },1000);    
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
      //console.log(movie);
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
  
  clickhandle(){
    this.setState({
      a: 1
    })
    //console.log(this.state)
  }
  render() {
    console.log('render');
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading...'}         
        
      </div>
      /*<p onClick={this.clickhandle.bind(this)}>onClick</p>*/
    );
  }
}

export default App;
