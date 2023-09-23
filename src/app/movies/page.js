"use client"
import React, { useState, useEffect } from 'react';
import MovieListWrapper from '@/components/Movies/MovieWrapper/MovieListWrapper'
import { getMovieGenres, getMovieByGenres } from '@/utils/api/movies'
import Hero from '@/components/Hero/Hero';
import FilterButton from '@/components/Buttons/FilterButton';
import Pagination from '@/components/Pagination/Pagination';

export default function Home() {
  const [movieGenres, setMovieGenres] = useState([]);
  const [filter,setFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all movies
        const genres = await getMovieGenres();
        setMovieGenres(genres.genres);
        
        //  Fetch movies with genres
        const selectedGenres = filter.join();
        const movies = await getMovieByGenres(selectedGenres);
        console.log(movies);
        
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [filter]);



  const handleFilter = (genre) => {
    if (!filter.includes(genre)) {
      setFilter([...filter, genre]);
    } else {
      const updatedFilter = filter.filter((item) => item !== genre);
      setFilter(updatedFilter);
    }
  };


  return (
    <main className="main-bg min-h-screen text-white flex-col items-center justify-center pb-6 px-6">
        <div className="flex flex-wrap gap-4 py-6">
          { 
            movieGenres?.map(genre =>
              <FilterButton 
              key={genre.id} 
              text={genre.name} 
              handleFilter={()=>handleFilter(genre.id)}
              isSelected={filter.includes(genre.id)}
              />
            )
          }
        </div>

    </main>
  )
}