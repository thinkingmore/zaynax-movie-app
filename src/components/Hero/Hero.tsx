import React, { Fragment } from 'react';
import Styles from './Hero.module.css';
import { FaPlay, FaPlus } from 'react-icons/fa';

const Hero = ({movie}) => {

  return (
      <div className={Styles.hero}>
        <div className={Styles.heroText}>
          <h1 className="text-4xl font-bold">{movie?.original_title}</h1>          
          <p className="text-lg mt-4">{movie?.overview}</p>
          <div className="text-sm mt-2">
            <h3 className="mb-2">Genres:</h3>
            {movie?.genres.map((genre,index) =>
              <span key={genre?.id}>
                <Fragment>
                  {genre?.name}
                  {index < movie?.genres.length - 1 && ', '}
                </Fragment>         
              </span>
            )}
          </div>
          <p className="text-sm mt-1">IMDb Rating: 8.5</p>
          <div className="mt-6 flex space-x-2">
            <div className={Styles.watchButton}>
                Watch <FaPlay className="ms-4 text-sm"/>
            </div>
            <div className={Styles.listButton}>
              My List <FaPlus className="ms-4 text-sm"/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
