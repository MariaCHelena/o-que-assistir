import React, { useEffect } from 'react'
import MovieCard from '../MovieCard'

const MovieList = props => {
  const movies = props.movies
  useEffect(() => {
    console.log(movies)
  },[])
  return (
    <div>
      <div>{typeof movies}</div>
    </div>
  )
}

export default MovieList