import React from 'react'

const MovieShow = ({match, movies}) => {
  
  return (
    <div>
      <h3>Showing Movie:</h3>
    <h1>{movies[match.params.movieId].title}</h1>
    </div>
  )
}

export default MovieShow