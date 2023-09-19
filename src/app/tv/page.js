"use client"
import React, { useState, useEffect } from 'react';
import MovieListWrapper from '@/components/Movies/MovieWrapper/MovieListWrapper'
import { TopRatedSeries,PopularSeries,TrendingSeries,RandomTvSeries,getSeriesDetails } from '@/utils/api/tvseries'
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
        const randomSeries = await RandomTvSeries()
        const randomSeriesDetails = await getSeriesDetails(randomSeries?.id)
        console.log(randomSeries);
        setRandomSeries(randomSeriesDetails)
        
        // Fetch top-rated series
        const topRatedData = await TopRatedSeries();
        setTopRatedSeries(topRatedData.results);

        // Fetch popular series
        const popularData = await PopularSeries();
        setPopularSeries(popularData.results);

        // Fetch trending series
        const trendingData = await TrendingSeries();
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