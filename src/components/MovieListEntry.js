import React from 'react';

var MovieListEntry = (props) => (
  <div className="movie-entry">
    <div>
      {props.movie.title}
    </div>
    <button className="taggol" onClick={e => {
      e.view.ontoggle = true;
      props.movie.watched = !props.movie.watched;
    }}> {props.movie.watched ? 'Watched' : 'To Watch'}
    </button>
    
  </div>
);

export default MovieListEntry;
