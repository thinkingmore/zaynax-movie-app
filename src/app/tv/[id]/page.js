"use client"
import Hero from '@/components/Hero/Hero';
import MovieListWrapper from '@/components/Movies/MovieWrapper/MovieListWrapper';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getSeriesDetails,getSeriesVideos,getSeriesCredits,getSimilarSeries } from '@/utils/api/tvseries'
import styles from './series.module.css';
import MovieTrailer from '@/components/Movies/Details/Trailer/MovieTrailer';
import MovieCast from '@/components/Movies/Details/Cast/MovieCast';


export default function Movies({params}) {
  const [series, setSeries] = useState(null);
  const [videos, setVideos] = useState(null);
  const [credits, setCredits] = useState(null);
  const [similarSeries, setSimilarSeries] = useState(null);
  const [loading, setLoading] = useState(true);


  const findOfficialTrailer = (videos) => {
    const result = videos?.filter(video => video.type === 'Trailer' || video.name.toLowerCase().includes('official trailer'));
    setVideos(result);
  };

  useEffect(() => {

    getSeriesDetails(params?.id)
      .then((data) => {
        setSeries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });

      getSeriesVideos(params?.id)
      .then((data) => {
        findOfficialTrailer(data?.results)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });

      getSeriesCredits(params?.id)
      .then((data) => {
        setCredits(data?.cast.slice(0,10))
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });

      getSimilarSeries(params?.id)
      .then((data) => {
        setSimilarSeries(data?.results.slice(0,7))
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="main-bg">
      <Hero movie={series} />
      <div className="rounded-lg p-8 w-90% text-white">
         <h3 className={styles.trailerTitle}>Trailer</h3>
         <MovieTrailer videos={videos}/> 
      </div>
      <div className="rounded-lg p-8 w-90% text-white">
         <h3 className={styles.trailerTitle}>Cast</h3>
         <MovieCast cast={credits}/> 
      </div>
      <MovieListWrapper heading="TV Shows Like This" movies={similarSeries} showType="tv"/>    
    </main>
  );
}

