import Image from 'next/image';
import React from 'react';
import { FaEye,FaHeart } from 'react-icons/fa';
import styles from './SearchItem.module.css';

const SearchItem = ({movie}) => {
  return (
    <div className={styles.movieListItem}>
      <Image 
      src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
      height={28}
      width={50}
      alt='movie item'
      />
      <div className="ms-4">
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
        </div>
      </div>
    </div>
  );
};

export default SearchItem;