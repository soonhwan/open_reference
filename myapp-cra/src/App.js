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
    setTimeout(() => {
      this.setState({
        movies : [
                {
                  title : 'Matrix',
                  poster : 'http://movie2.phinf.naver.net/20170922_258/1506041340550kr370_JPEG/movie_image.jpg?type=f125'
                },
                {
                  title : 'Full Metal Jacket',
                  poster : 'http://movie2.phinf.naver.net/20170925_246/1506307175130N35Jq_JPEG/movie_image.jpg?type=f125'
                },
                {
                  title : 'Oldboy',
                  poster : 'http://movie2.phinf.naver.net/20170925_211/1506305961212SYWl2_JPEG/movie_image.jpg?type=f125'
                },
                {
                  title : 'Star wars',
                  poster : 'http://movie2.phinf.naver.net/20170906_281/1504661660780autBq_JPEG/movie_image.jpg?type=f125'
                },
                {
                  title :'Catch Me If You Can',
                  poster : 'http://movie.phinf.naver.net/20170922_105/1506046826399HohdV_JPEG/movie_image.jpg?type=f125'
                },
                {
                  title :'Catch Me',
                  poster : 'http://movie2.phinf.naver.net/20170920_28/1505873514375MOGBi_JPEG/movie_image.jpg?type=f125'
                }
              ]
      })
    }, 3000);
  }
  
  componentWillUpdate() {
    console.log('componentWillUpdate : 업데이트중...');
  }
 
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
                      return <Movie title={movie.title} poster={movie.poster} key={index} />
                    })
    return movies
    
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
