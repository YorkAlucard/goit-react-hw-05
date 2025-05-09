import axios from 'axios';

const ACCESS_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTBlMDc2YjFlMDJmMWUwMWY5NDI2YTIxMWRmMGQzNyIsIm5iZiI6MTc0NjcxMjc4MS41NTcsInN1YiI6IjY4MWNiOGNkM2FkMTVmOWNjMWMxZGQwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VLSXjnCVJjlV8iSdHeMz6MqYCTifkGLMGnJBVrSr4Zw';
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: { Authorization: ACCESS_TOKEN },
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      ...options,
      params: {
        query,
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Помилка пошуку фільмів:', error);
    return [];
  }
};
