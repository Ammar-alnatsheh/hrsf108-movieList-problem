import React from 'react';
import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => (
  <div className="movie-list">
    {
      props.movies.map(movie => (
        <MovieListEntry movie={movie}/>
      ))
    }
  </div>
);

export default MovieList;
