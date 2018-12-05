import React from 'react';
import MovieList from '../components/MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';
import exampleMovieData from '../data/exampleMovieData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies : exampleMovieData
    }
  }

  onSearchClick(word) {
    var result = [];
    word = word.toLowerCase();

    exampleMovieData.forEach(function(movie){
      if (movie.title.toLowerCase().includes(word)) {
        result.push(movie);
      }
    });

    if(result.length !== 0) {
      this.setState({
        movies: result
      });

    } else {
      alert('No movie by that name found');
    }
  }

  onAddClick(word) {
    var result = this.state.movies;
    var movie = {};
    word = word.trim();
    if(word !== '') {
      movie['title'] = word;
      result.push(movie)
      this.setState({
        movies: result
      });

    } else {
      alert('Invalid movie name, cant be empty space');
    }
  }

  render() {
    return (
      <div>
        <div className = "header">
          <h3>Movie List</h3>
        </div>
        <div className="add-bar">
          <AddMovie addClick={this.onAddClick.bind(this)}/>
        </div>
        <div className="search-bar">
          <Search searchClick={this.onSearchClick.bind(this)}/>
        </div>
        <div className="app-body">
          <MovieList movies={this.state.movies}/>
        </div>
      </div>
    );
  }
}


export default App;
