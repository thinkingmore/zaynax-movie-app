"use client"
import React, { useState, useEffect } from 'react';
import MovieListWrapper from '@/components/Movies/MovieWrapper/MovieListWrapper'
import { getSeriesByGenres,getRandomTvSeries,getSeriesDetails,getSeriesGenres } from '@/utils/api/tvseries'
import Hero from '@/components/Hero/Hero';
import FilterButton from '@/components/Buttons/FilterButton';
import Pagination from '@/components/Pagination/Pagination';


export default function Home() {
  const [seriesGenres, setSeriesGenres] = useState([]);
  const [filter,setFilter] = useState([]);
  const [totalPages,setTotalPages] = useState(1);
  const [currentPage,setCurrentPage] = useState(1);
  const [series, setSeries] = useState([]);
  const [randomSeries, setRandomSeries] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch top-rated series
        const genres = await getSeriesGenres();
        setSeriesGenres(genres.genres);

        // Fetch series with genres
        const selectedGenres = filter.join();
        const series = await getSeriesByGenres(selectedGenres,currentPage);
        setSeries(series?.results);
        setTotalPages(series?.total_pages); 
      } catch (error) {
        console.error('Error fetching series:', error);
      }
    };

    fetchData();
  }, [filter,currentPage]);

  //fetch series by genres
  const handleFilter = (genre) => {
    if (!filter.includes(genre)) {
      setFilter([...filter, genre]);
    } else {
      const updatedFilter = filter.filter((item) => item !== genre);
      setFilter(updatedFilter);
    }
  };

  //change the current page
  const onPageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <main className="main-bg min-h-screen flex-col items-center justify-between pb-6 px-2">
      <div className="flex flex-wrap gap-4 py-6 px-5">
          { 
            seriesGenres?.map(genre =>
              <FilterButton 
              key={genre.id} 
              text={genre.name} 
              handleFilter={()=>handleFilter(genre.id)}
              isSelected={filter.includes(genre.id)}
              />
            )
          }
      </div>
      <div className="mb-4">
        <MovieListWrapper movies={series} showType="tv"/>
      </div>
      <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
      />
    </main>
  )
}