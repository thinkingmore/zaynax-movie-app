import Link from 'next/link';
import MovieListItem from '../ListItem/MovieListItem';
import Styles from './MovieListWrapper.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const MovieListSlider = ({ heading,movies,showType }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:7,
    slidesToScroll: 1,
  };
  return (
    <div
      className="movie-list-wrapper-bg bg-white rounded-3xl p-8 mx-auto"
      style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', width: '98%' }}
    >
      <h2 className={Styles.heading}>{heading}</h2>
        <Slider {...settings}>
            {
              movies?.map((movie) =>
              <Link key={movie.id} href={`/${showType? showType: movie?.media_type}/${movie.id}`}>
                <MovieListItem movie={movie}/>
              </Link>
              )
            }
        </Slider>

    </div>
  );
};

export default MovieListSlider;