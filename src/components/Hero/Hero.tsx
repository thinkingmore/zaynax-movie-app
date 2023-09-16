import React from 'react';
import Styles from './Hero.module.css';
import { FaPlay, FaPlus } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen">
      <div className="bg-black opacity-50"></div>
      <div className="inset-0 flex items-center">
        <div className="text-white z-10">
          <h1 className="text-4xl font-bold">Movie Name</h1>          
          <p className="text-lg mt-4">Movie description goes here.</p>
          <div className="text-sm mt-2">
            <h3>Genres:</h3>
            <p>Romance,Drama</p>
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
    </div>
  );
};

export default Hero;
