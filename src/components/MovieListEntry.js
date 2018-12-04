import React from 'react';

var MovieListEntry = (props) => (
  <div className="movie-entry">
    {props.movie.title}
  </div>
);

export default MovieListEntry;
