import Image from 'next/image';
import React from 'react';
import { FaEye,FaHeart } from 'react-icons/fa';
import styles from './MovieListItem.module.css';

const MovieListItem = ({movie}) => {
  return (
    <div className={styles.movieListItem}>
      <Image 
      src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
      height={237}
      width={168}
      alt='movie item'
      />
      <div>
        <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center mb-2">
            <Image 
              src="/imdb.png"
              height={14}
              width={28}
              alt='movie item'
            />
            <span className={styles.rating}>{movie.vote_average}</span>
          </div>
          <div className="flex space-x-2">
            <span className="text-gray-600 text-sm"><FaEye/></span>
            <span className="text-gray-600 text-sm">
              <FaHeart/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListItem;
