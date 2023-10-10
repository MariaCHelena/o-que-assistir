import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { token } from '../../config/token';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true)

  const fetchMovies = async (url) => {
    try {
      const response = await axios.get(url, {headers: {
        accept: 'application/json',
        Authorization: token
      }});
      const data = response.data.results; // Assuming the API response has a "results" field
      setMovies(data);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const trendingUrl = 'https://api.themoviedb.org/3/trending/tv/week?language=en-US';
    const searchedUrl = `https://api.themoviedb.org/3/search/tv?query=${search}&include_adult=false&language=en-US&page=1`;

    const urlToFetch = search.length >= 3 ? searchedUrl : trendingUrl;
    fetchMovies(urlToFetch);
  }, [search]);


  return (
    <div className='h-full flex items-center justify-center flex-col'>
      <div className='justify-self-start'>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='bg-gray-100 h-9 w-96 pl-4 cursor-pointer rounded-lg'
        />
        <input
          type="button"
          value="pesquisar"
          onClick={() => console.log("clicou")}
          className='bg-gray-400 px-6 py-2 cursor-pointer rounded-lg hover:text-white'
        />
      </div>
      <div className='grid grid-cols-5'>
        {
          movies.map(movie => (
            <MovieCard key={movie.id} id={movie.id} movie={movie} />
          ))
        }
      </div>
    </div>
  );
}

export default Search;