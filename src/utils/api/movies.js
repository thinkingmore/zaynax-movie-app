import axios from 'axios';
const API_BASE_URL = 'https://api.themoviedb.org/3'; 
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// fetch tending movie and tv shows
export const getTrendingList = async () => {
  try {
    const response = await axiosInstance.get(`/trending/all/day?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};

// fetch movie genres
export const getMovieGenres = async () => {
  try {
    const response = await axiosInstance.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};

// fetch movie genres
export const getMovieByGenres = async (genres,page) => {
  try {
    const response = await axiosInstance.get(`/discover/movie?api_key=927cc3c6d07e9e2fac1b94fc29da9c79&with_genres=${genres}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};


// fetch random movie
export const getRandomMovies = async() => {
  try {
    const response = await axiosInstance.get(`/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`);
    const movies = response?.data?.results;
    const index =  Math.floor(Math.random() * movies.length);
    const randomMovie = movies[index];
    return randomMovie;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

// fetch searched movies
export const searchedMovies = async(searchText) => {
  try {
    const response = await axiosInstance.get(`/search/movie?api_key=${API_KEY}&query=${searchText}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};


// fetch poppular,upcoming and  top rated movies
export const getUpcomingMovies = async() => {
  try {
    const response = await axiosInstance.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await axiosInstance.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    return [];
  }
};

export const getPopularMovies = async() => {
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