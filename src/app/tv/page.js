"use client"
import React, { useState, useEffect } from 'react';
import MovieListWrapper from '@/components/Movies/MovieWrapper/MovieListWrapper'
import { getTopRatedSeries,getPopularSeries,getTrendingSeries,getRandomTvSeries,getSeriesDetails } from '@/utils/api/tvseries'
import Hero from '@/components/Hero/Hero';


export default function Home() {
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [randomSeries, setRandomSeries] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch random series id
        const randomSeries = await getRandomTvSeries()
        const randomSeriesDetails = await getSeriesDetails(randomSeries?.id)
        console.log(randomSeries);
        setRandomSeries(randomSeriesDetails)
        
        // Fetch top-rated series
        const topRatedData = await getTopRatedSeries();
        setTopRatedSeries(topRatedData.results);

        // Fetch popular series
        const popularData = await getPopularSeries();
        setPopularSeries(popularData.results);

        // Fetch trending series
        const trendingData = await getTrendingSeries();
        setTrendingSeries(trendingData.results);
      } catch (error) {
        console.error('Error fetching series:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="main-bg min-h-screen flex-col items-center justify-between pb-6">
      <Hero movie={randomSeries}/>  
      <div className="mb-4">
        <MovieListWrapper heading={"Trending"} movies={trendingSeries} showType="tv"/>
      </div>
      <div className="my-4">
        <MovieListWrapper heading={"Popular"} movies={popularSeries} showType="tv"/>
      </div>
      <div className="my-4">
        <MovieListWrapper heading={"Top Rated"} movies={topRatedSeries} showType="tv"/>
      </div>
    </main>
  )
}