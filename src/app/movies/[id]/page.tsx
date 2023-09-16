"use client"
import Hero from '@/components/Hero/Hero';
import MovieListWrapper from '@/components/Movies/MovieWrapper/MovieListWrapper';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '@/utils/api/tmdb';


export default function Movies({params}) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getMovieDetails(params?.id)
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });
  }, []);
  console.log(movie);
 
  return (
    <main className="flex-col items-center justify-between p-24"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, // Replace with the actual API property for the image URL
        backgroundSize: 'cover',
      }}
    >
    <Hero movie={movie} />
    </main>
  );
}

