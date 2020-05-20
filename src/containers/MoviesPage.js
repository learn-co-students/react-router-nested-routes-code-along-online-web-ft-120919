// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';
// Here we replace the `component` prop with the `render` prop so we can pass the
// route information to the `MovieShow` component

const MoviesPage = ({ match, movies }) => (
    <div>
        <MoviesList movies={movies} />

        <Route path={`${match.url}/:movieId`}
               render={routerProps =>
                   <MovieShow {...routerProps} movies={movies} />
               }
        />
    </div>
)

export default MoviesPage

/*
Now, all the key/value pairs within routerProps
are also passed into MovieShow as props.
Just like before, one of the props we receive
from the Route is match, and match contains
all the parameters from the URL!
These parameters are stored as key/value pairs in match.params.
The key corresponds to whatever we named the
parameter in our Route, so in this case, the
parameter will be movieId. We can update MovieShow
to utilize this parameter in conjunction
with the movies data that was passed down.


* */