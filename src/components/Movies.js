import React from 'react';
import Movie from "./Movie";
import NotFoundPage from "./NotFoundPage";

function Movies(props) {
    const {movies=[]}=props
    return (
        <div className="movies">
            {movies.length ? movies.map(movie=>(
                <Movie key={movie.imdbID} {...movie}/>
            )) : <div className="noMovies"><NotFoundPage/></div>}
        </div>
    );
}

export default Movies;