import React, { useState, useEffect } from 'react'
import { APIKey } from '../../config/APIKey'
import axios from 'axios';

const MovieList = () => {
  

  const [movies, setMovies] = useState([])
  const options = {
    method: "GET",
    url: 'https://api.themoviedb.org/3/tv/1620',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDQ0YjRhM2QwN2U3Zjk3ZDQ3YmM3MjUwOGZlYWI0YSIsInN1YiI6IjY0ZTI5NTc3NjVlMGEyMDBlMmVmODFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ObOjUglhlCSUXKFWLpEunZYGzGY2Bm1EJulDSgQBlZI'
  }
  }
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setMovies(response.data)
        console.log(movies)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  return (
    <div>MovieList</div>
  )
}

export default MovieList