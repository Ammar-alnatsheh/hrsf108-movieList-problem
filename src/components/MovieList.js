import React from 'react';
import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => (
  <div className="movie-list">
    {
      props.movies.filter(movie => props.watched === movie.watched).map(movie => (
        <MovieListEntry movie={movie} toggel={props.toggel}/>
      ))
    }
  </div>
);

export default MovieList;
