import React from 'react';
import MovieList from '../components/MovieList.js';
import Search from './Search.js';
import exampleMovieData from '../data/exampleMovieData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies : exampleMovieData
    }
  }

  onSearchClick(text) {
    console.log(text);

  }

  render() {
    return (
      <div>
        <div className = "header">
          <h3>Movie List</h3>
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
