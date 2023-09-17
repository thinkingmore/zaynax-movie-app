"use client"
import Hero from '@/components/Hero/Hero';
import MovieListWrapper from '@/components/Movies/MovieWrapper/MovieListWrapper';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getMovieDetails, getMovieVideos, getMovieCredits } from '@/utils/api/tmdb';
import styles from './movies.module.css';
import MovieTrailer from '@/components/Movies/Details/Trailer/MovieTrailer';
import MovieCast from '@/components/Movies/Details/Cast/MovieCast';


export default function Movies({params}) {
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);


  const findOfficialTrailer = (videos) => {
    const result = videos?.filter(video => video.type === 'Trailer' || video.name.toLowerCase().includes('official trailer'));
    setVideos(result);
  };

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

      getMovieVideos(params?.id)
      .then((data) => {
        findOfficialTrailer(data?.results)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });

      getMovieCredits(params?.id)
      .then((data) => {
        setCredits(data?.cast.slice(0,10))
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });
  }, []);

  console.log(credits)
  return (
    <main className="main-bg">
      <div className="flex-col items-center justify-between p-24"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, // Replace with the actual API property for the image URL
            backgroundSize: 'cover',
          }}
        >
        <Hero movie={movie} />
      </div>
      <div className="rounded-lg p-8 w-90% text-white">
         <h3 className={styles.trailerTitle}>Trailer</h3>
         <MovieTrailer videos={videos}/> 
      </div>
      <div className="rounded-lg p-8 w-90% text-white">
         <h3 className={styles.trailerTitle}>Cast</h3>
         <MovieCast cast={credits}/> 
      </div>  
    </main>
  );
}

