import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3/'; 
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
console.log(API_KEY);
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});


// fetch random movie
export const RandomMovies = async () => {
  try {
    const response = await axiosInstance.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    const movies = response?.data?.results;
    const index =  Math.floor(Math.random() * movies.length);
    const randomMovie = movies[index];
    return randomMovie;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};

// fetch poppular,upcoming and  top rated movies
export const UpcomingMovies = async () => {
  try {
    const response = await axiosInstance.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};

export const TopRatedMovies = async () => {
  try {
    const response = await axiosInstance.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    return [];
  }
};

export const PopularMovies = async () => {
  try {
    const response = await axiosInstance.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

// fetch movie details

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

// fetch movie recommendations

export const getSimilarMovie = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

// fetch movie videos

export const getMovieVideos = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

// fetch movie cast or credits

export const getMovieCredits = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};