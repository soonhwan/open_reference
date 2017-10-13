import React from 'react'; //Component 삭제
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
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

Movie.propTypes = {
  title : PropTypes.string.isRequired,    
  poster : PropTypes.string.isRequired,  
  genres : PropTypes.array.isRequired,    
  synopsis : PropTypes.string.isRequired      
}

MoviePoster.propTypes = {
  poster : PropTypes.string.isRequired,
  alt : PropTypes.string.isRequired 
}

MovieGenre.propTypes = {
  genre : PropTypes.string.isRequired
}

//functional 컴포넌트 사용
//state, render, lifecycle 등등이 없음
//this props를 삭제 해줘야함! 클래스가 아니니깐! 클래스들은 그안에 this라는 키워드가 존재
//functional 컴포넌트는 이미 props를 사용함으로 this가 필요 없음
//html을 return해줄뿐 
//하지만 state를 잃게되지. 업데이트하고, 그런 멋진것들이 다 사라짐
function Movie({title, poster, genres, synopsis}){
  return(
    //JSX에서는 className을 사용함
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <p className="Movie__Synosis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          /> 
        </p>
      </div>
    </div>
  )
}

function MoviePoster({poster,alt}){
  return(
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  )
}

function MovieGenre({genre}){
  return(
    <span className="Movie__Genre">{genre}</span>
  )
}

export default Movie;
