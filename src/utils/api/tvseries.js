import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3/'; 
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// fetch series genres
export const getSeriesGenres = async () => {
  try {
    const response = await axiosInstance.get(`/genre/tv/list?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};

// fetch movie genres
export const getSeriesByGenres = async (genres,page) => {
  try {
    const response = await axiosInstance.get(`/discover/tv?api_key=927cc3c6d07e9e2fac1b94fc29da9c79&with_genres=${genres}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};


// fetch random movie
export const getRandomTvSeries = async () => {
  try {
    const response = await axiosInstance.get(`/discover/tv?api_key=${API_KEY}&include_adult=true&language=en-US&page=1`);
    const series = response?.data?.results;
    const index =  Math.floor(Math.random() * series.length);
    const randomSeries = series[index];
    return randomSeries;
  } catch (error) {
    console.error('Error fetching series:', error);
    return [];
  }
};

// fetch searched series
export const searchedSeries = async(searchText) => {
  try {
    const response = await axiosInstance.get(`/search/tv?api_key=${API_KEY}&query=${searchText}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching series:', error);
    return [];
  }
};


// fetch poppular,upcoming and  top rated series
export const getTrendingSeries = async () => {
  try {
    const response = await axiosInstance.get(`trending/tv/day?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trending series:', error);
    return [];
  }
};

export const getTopRatedSeries = async () => {
  try {
    const response = await axiosInstance.get(`tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top-rated series:', error);
    return [];
  }
};

export const getPopularSeries = async () => {
  try {
    const response = await axiosInstance.get(`tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular series:', error);
    return [];
  }
};

// fetch series details

export const getSeriesDetails = async (seriesId) => {
  try {
    const response = await axiosInstance.get(`tv/${seriesId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular series:', error);
    return [];
  }
};

// fetch series recommendations

export const getSimilarSeries = async (seriesId) => {
  try {
    const response = await axiosInstance.get(`tv/${seriesId}/similar?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular series:', error);
    return [];
  }
};

// fetch series videos

export const getSeriesVideos = async (seriesId) => {
  try {
    const response = await axiosInstance.get(`tv/${seriesId}/videos?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular series:', error);
    return [];
  }
};

// fetch series cast or credits

export const getSeriesCredits = async (seriesId) => {
  try {
    const response = await axiosInstance.get(`tv/${seriesId}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular series:', error);
    return [];
  }
};