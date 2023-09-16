"use client"
import React, { useState, useEffect } from 'react';
import MovieListItem from '../ListItem/MovieListItem';
import Styles from './MovieListWrapper.module.css';
import { TopRatedMovies } from '@/utils/api/tmdb'

const MovieListWrapper = ({ heading }) => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
      const fetchData = async () => {
        const movies = await TopRatedMovies();
        setMovies(movies.results);
      };
  
      fetchData();
    },[]);

  return (
    <div
      className="movie-list-wrapper-bg relative bg-white rounded-3xl p-6 mx-auto"
      style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}
    >
      <h2 className={Styles.heading}>{heading}</h2>
      <div className={`flex flex-wrap gap-4`}>
        {
          movies.map((movie) =>
          <MovieListItem key={movie.id} movie={movie}/>
          )
        }
      </div>
    </div>
  );
};

export default MovieListWrapper;

