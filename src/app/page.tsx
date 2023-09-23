"use client"
import React, { useState, useEffect } from 'react';
import MovieListWrapper from '@/components/Movies/MovieWrapper/MovieListWrapper'
import { TopRatedMovies,PopularMovies,UpcomingMovies, RandomMovies, getMovieDetails } from '@/utils/api/movies'
import Hero from '@/components/Hero/Hero';
import Pagination from '@/components/Pagination/Pagination';

export default function Home() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch random movies id
        const randomMovies = await RandomMovies()
        const randomMovieDetails = await getMovieDetails(randomMovies?.id)
        setRandomMovie(randomMovieDetails)

        // Fetch top-rated movies
        const topRatedData = await TopRatedMovies();
        setTopRatedMovies(topRatedData.results);
       

        // Fetch popular movies
        const popularData = await PopularMovies();
        setPopularMovies(popularData.results);
        console.log(popularData);

        // Fetch upcoming movies
        const upcomingData = await UpcomingMovies();
        setUpcomingMovies(upcomingData.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <main className="main-bg min-h-screen flex-col items-center justify-between pb-6">
      <Hero movie={randomMovie}/>
      <div className="mb-4">
        <MovieListWrapper heading={"Trending"} movies={popularMovies} showType={"movies"}/>
      </div>
      <div className="my-4">
        <MovieListWrapper heading={"Upcoming"} movies={upcomingMovies} showType={"movies"}/>
      </div>
      <div className="my-4">
        <MovieListWrapper heading={"Recommended"} movies={topRatedMovies} showType={"movies"}/>
      </div>
    </main>
  )
}
