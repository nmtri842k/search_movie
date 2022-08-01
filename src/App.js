import './App.css';
import Movie from './components/Movie';
import React, { useState, useEffect } from 'react';

const FEATURE_API = "https://api.themoviedb.org/3/discover/movie?api_key=10553c3a9c8cb48bc4fdd4ee62c68e59&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=10553c3a9c8cb48bc4fdd4ee62c68e59&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(FEATURE_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        })
      setSearchTerm("");

    }
  }
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }
  return (
    <div>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}></input>

        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) =>
          <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  )
}

export default App;
