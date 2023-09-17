import React from 'react';
import Image from 'next/image';
import styles from './MovieCast.module.css' 

const MovieCast = ({ cast }) => {
  const renderCast = () => {
    if (cast && cast.length > 0) {
      return (
        <div className="mt-8">
          <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {cast.map((actor) => (
              <li
                key={actor.id}
                className="text-white rounded-lg shadow-md overflow-hidden"
              >
                <div className={styles.castCard}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                    alt={`${actor.name} (${actor.character})`}
                    layout="fill" 
                    objectFit="cover" 
                  />
                </div>
                <div className="p-4">
                  <p className="text-lg font-semibold">{actor.name}</p>
                  <p className="text-yellow-600">{actor.character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <p>No cast information available.</p>;
    }
  };

  return <div>{renderCast()}</div>;
};

export default MovieCast;


