import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

/*const movies = [
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
  }
];*/

class App extends Component {
 state = {
    greeting : 'Hello!',
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
                }
              ]
  };

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceivePreps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidlUpdate()

  componentWillMount() {
    console.log('componentWillUnmount : 사이클 시작');
  }  
  componentDidMount() {
    console.log('componentDidMount : 컴포넌트 성공');
    setTimeout(() => {
      //state를 변경하면 render가 다시 작동됨
      //this.state.greeting = 'something'; //Do not mutate state directly. Use setState()  react/no-direct-mutation-state
      this.setState({
        greeting : 'something change!'
      })
    }, 2000);
    
    setTimeout(() => {
      this.setState({
        movies :[
          {
            title :'Catch Me If You Can',
            poster : 'http://movie.phinf.naver.net/20170922_105/1506046826399HohdV_JPEG/movie_image.jpg?type=f125'
          },
          ...this.state.movies,
          {
            title :'Catch Me',
            poster : 'http://movie2.phinf.naver.net/20170920_28/1505873514375MOGBi_JPEG/movie_image.jpg?type=f125'
          }
        ]
      })
    }, 3000);
  }
  
  /*
  componentWillReceivePreps() {
    console.log('componentWillReceivePreps : 새로운 props를 받음');
  }
  //App.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate : old props, new props 비교 해서 업데이트 여부 결정');
  }*/

  componentWillUpdate() {
    console.log('componentWillUpdate : 업데이트중...');
  }
 
  render() {
    console.log('render');
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}         
      </div>
    );
  }
}

export default App;
