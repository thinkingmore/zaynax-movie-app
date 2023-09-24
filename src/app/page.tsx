"use client"
import React, { useState, useEffect } from 'react';
import MovieListSlider from '@/components/Movies/MovieWrapper/MovieListSlider'
import { getTopRatedMovies,getTrendingList,getPopularMovies, getRandomMovies, getMovieDetails } from '@/utils/api/movies'
import { getPopularSeries } from '@/utils/api/tvseries'
import Hero from '@/components/Hero/Hero';
import Pagination from '@/components/Pagination/Pagination';

export default function Home() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [tendingList, setTrendingList] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [randomMovie, setRandomMovie] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch random movies id
        const randomMovies = await getRandomMovies()
        const randomMovieDetails = await getMovieDetails(randomMovies?.id)
        setRandomMovie(randomMovieDetails)

        // Fetch top-rated movies
        const topRatedData = await getTopRatedMovies();
        setTopRatedMovies(topRatedData.results);
       

        // Fetch popular movies
        const tendingData = await getTrendingList();
        setTrendingList(tendingData.results);


        // Fetch upcoming movies
        const popularMovieData = await getPopularMovies();
        setPopularMovies(popularMovieData.results);

        const popularSeriesData = await getPopularSeries();
        setPopularSeries(popularSeriesData.results);
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
        <MovieListSlider heading={"Trending"} movies={tendingList} showType={null}/>
      </div>
      <div className="my-4">
        <MovieListSlider heading={"Popular TV Shows"} movies={popularSeries} showType={"tv"}/>
      </div>
      <div className="my-4">
        <MovieListSlider heading={"Popular Movies"} movies={popularMovies} showType={"movies"}/>
      </div>
      <div className="my-4">
        <MovieListSlider heading={"Recommended Movies"} movies={topRatedMovies} showType={"movies"}/>
      </div>
    </main>
  )
}
