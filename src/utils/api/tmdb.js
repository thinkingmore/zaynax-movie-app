import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3/'; 
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
console.log(API_KEY);
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

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

