import React, {useState, useEffect} from 'react'
import MovieList from '../MovieList'
import axios from 'axios'

const Search = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/tv?query=${search}&include_adult=false&language=en-US&page=1`,
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
  }, [search])
  return (
    <div>
      <input type='text' value={search} onChange={(e) => {setSearch(e.target.value)}}/>

      <MovieList />
    </div>
  )
}

export default Search