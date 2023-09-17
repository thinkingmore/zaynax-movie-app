import Link from 'next/link';
import MovieListItem from '../ListItem/MovieListItem';
import Styles from './MovieListWrapper.module.css';


const MovieListWrapper = ({ heading,movies }) => {

  return (
    <div
      className="movie-list-wrapper-bg relative bg-white rounded-3xl p-6 mx-auto"
      style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}
    >
      <h2 className={Styles.heading}>{heading}</h2>
      <div className={`flex flex-wrap gap-4`}>
        {
          movies?.map((movie) =>
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <MovieListItem movie={movie}/>
          </Link>
          )
        }
      </div>
    </div>
  );
};

export default MovieListWrapper;

