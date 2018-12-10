import React from 'react';
import MovieList from '../components/MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';
import exampleMovieData from '../data/exampleMovieData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies : exampleMovieData,
      watched: true
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

    if(result.length !== 0 && word !== '*') {
      this.setState({
        movies: result,
        watched: this.state.watched
      });

    } else if(word === '*') {
      this.setState({
        movies: exampleMovieData,
        watched: this.state.watched
      });

    } else {
      alert('No movie by that name found/ search for * to display all movies');
    }
  }

  onAddClick(word) {
    var result = this.state.movies;
    var movie = {};
    word = word.trim();
    if(word !== '') {
      movie['title'] = word;
      movie['watched'] = false;
      result.push(movie);
      exampleMovieData.push(movie);
      this.setState({
        movies: result,
        watched: this.state.watched
      });

    } else {
      alert('Invalid movie name, cant be empty space');
    }
  }

  onSwitchTab(event) {
    this.setState({
      movies: this.state.movies,
      watched: event.target.value === 'true'
    });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h3>Movie List</h3>
        </div>
        <div className="add-bar">
          <AddMovie addClick={this.onAddClick.bind(this)}/>
        </div>
        <br></br>
        <div className="app-body">
          <div className="tab-panel">
            <button className="watched-tab" value="true" onClick={this.onSwitchTab.bind(this)}>Watched</button>
            <button className="to-watch-tabs" value="false" onClick={this.onSwitchTab.bind(this)}>To Watch</button>
          </div>
          <span className="spacer"></span>
          <div className="search-bar">
            <Search searchClick={this.onSearchClick.bind(this)}/>
          </div>
        </div>
        <div className="movies">
          <br></br>
          <MovieList movies={this.state.movies} watched={this.state.watched}/>
        </div>
      </div>
    );
  }
}


export default App;
