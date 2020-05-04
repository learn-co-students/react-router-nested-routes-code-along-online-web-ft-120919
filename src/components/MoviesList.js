import React from 'react'
import {Link} from 'react-router-dom'

const MoviesList = ( { movies } ) => {
  const renderMovies = Object.keys(movies).map(movieID => {
    return <Link to={`/movies/${movieID}`} key={movieID} > - {movies[movieID].title} - </Link>
  })

  return (
    <div>
      {renderMovies}
    </div>
  )
}

export default MoviesList
