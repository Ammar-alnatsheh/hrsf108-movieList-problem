import React from 'react';

var MovieListEntry = (props) => (
  <div className="movie-entry">
    <div>
      {props.movie.title}
    </div>
    <button className="green" onClick={e => {
      props.movie.watched = !props.movie.watched;
      props.toggel();
    }}> 
    {props.movie.watched ? 'Watched' : 'To Watch'}
    </button>
    
  </div>
);

export default MovieListEntry;
