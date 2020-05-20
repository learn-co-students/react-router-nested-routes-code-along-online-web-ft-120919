// ./src/components/MoviesList.js
import React from 'react';
import { Link } from 'react-router-dom';
/*
The movies prop is an object containing each movie.
To iterate over this object, we'll use Object.keys(movies)
to get an array of keys, then map over this array.
Since the keys in the object are also the id values for each movie,
the elements in .map() are referred to as movieID.
We can use movieID directly in some of the attributes like key,
but also use it to get information from the movies object,
as we see with movies[movieID].title.
 */
const MoviesList = ({ movies }) => {
    const renderMovies =
        Object.keys(movies).map(
            movieID =>
        <Link key={movieID} to={`/movies/${movieID}`}>
            {movies[movieID].title}
        </Link>
    );

    return (
        <div>
            {renderMovies}
        </div>
    );
};

export default MoviesList;