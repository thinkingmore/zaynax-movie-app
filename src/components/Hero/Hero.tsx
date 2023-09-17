import React, { Fragment } from 'react';
import styles from './Hero.module.css';
import { FaImdb, FaPlay, FaPlus } from 'react-icons/fa';
import { Bungee_Spice } from 'next/font/google'
import Image from 'next/image';

const inter = Bungee_Spice({
    weight: ['400'],
    subsets: ['latin'] 
  })

const Hero = ({movie}) => {
  
  return (
    <div className="flex-col items-center justify-between p-24"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, // Replace with the actual API property for the image URL
        backgroundSize: 'cover',
      }}
    > 
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <div className={inter.className}>
            <h1 className={styles.heroTitle}>{movie?.original_title}</h1>          
          </div>
          <p className={styles.heroDesc}>{movie?.overview}</p>
          <div className="text-sm mt-2">
            <h3 className={styles.heroGenres}>Genres:</h3>
            {movie?.genres?.map((genre,index) =>
              <span key={genre?.id}>
                <Fragment>
                  {genre?.name}
                  {index < movie?.genres.length - 1 && ', '}
                </Fragment>         
              </span>
            )}
          </div>
          <div className="flex items-center my-4">
            <Image 
                src="/imdb.png"
                height={27}
                width={54}
                alt='movie item'
              />
              <span className={styles.heroRating}>{movie?.vote_average?.toFixed(1)}</span>
          </div>
          <div className="mt-6 flex space-x-2">
            <div className={styles.watchButton}>
                Watch <FaPlay className="ms-4 text-sm"/>
            </div>
            <div className={styles.listButton}>
              My List <FaPlus className="ms-4 text-sm"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
