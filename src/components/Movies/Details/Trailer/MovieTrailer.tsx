import React from 'react';
import styles from './MovieTrailer.module.css';

const MovieTrailer = ({videos}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg mt-8">
      {videos?.map((video) => (
        <div key={video.id} className="relative">
          <iframe
            className="w-full h-72 sm:h-80 md:h-96 lg:h-72"
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.title}
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default MovieTrailer;
