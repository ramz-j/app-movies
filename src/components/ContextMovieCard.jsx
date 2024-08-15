import React, { useEffect, useState } from 'react'
import { get } from '../data/htttpClient';
import MovieCard from './MovieCard';
import "./ContextMovieCard.css";

export default function ContextMovieCard() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  

  return (
    <ul className='container' >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}
