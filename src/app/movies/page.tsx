"use client"
import Hero from '@/components/Hero/Hero'
import MovieListWrapper from '@/components/Movies/MovieWrapper/MovieListWrapper'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
    const [movie, setMovie] = useState([])
    const key = "927cc3c6d07e9e2fac1b94fc29da9c79";
    const baseUrl = 'https://api.themoviedb.org/';

  useEffect(() => {
    const fetchMovieDetail = async () => {
        fetch(`https://api.themoviedb.org/3/movie/72798?api_key=927cc3c6d07e9e2fac1b94fc29da9c79&language=en-US`,)
        .then(response => response.json())
        .then(response => setMovie(response))
        .catch(err => console.error(err));
    }    

    fetchMovieDetail()
    console.log(movie)
  }, [key]);  
  return (
    <main className="main-bg min-h-screen flex-col items-center justify-between p-24">
        <Hero/>
        <MovieListWrapper heading= {"movies you must watch"} />
    </main>
  )
}
