"use client"
import Hero from '@/components/Hero/Hero';
import MovieListWrapper from '@/components/Movies/MovieWrapper/MovieListWrapper';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getMovieDetails, getMovieVideos, getMovieCredits,getSimilarMovie } from '@/utils/api/tmdb';
import styles from './movies.module.css';
import MovieTrailer from '@/components/Movies/Details/Trailer/MovieTrailer';
import MovieCast from '@/components/Movies/Details/Cast/MovieCast';


export default function Movies({params}) {
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState(null);
  const [credits, setCredits] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);
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

      getSimilarMovie(params?.id)
      .then((data) => {
        setSimilarMovies(data?.results.slice(0,7))
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="main-bg">
      <Hero movie={movie} />
      <div className="rounded-lg p-8 w-90% text-white">
         <h3 className={styles.trailerTitle}>Trailer</h3>
         <MovieTrailer videos={videos}/> 
      </div>
      <div className="rounded-lg p-8 w-90% text-white">
         <h3 className={styles.trailerTitle}>Cast</h3>
         <MovieCast cast={credits}/> 
      </div>
      <MovieListWrapper heading="Movies Like This" movies={similarMovies}/>    
    </main>
  );
}

