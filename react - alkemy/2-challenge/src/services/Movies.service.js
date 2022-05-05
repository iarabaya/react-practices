import axios from 'axios';

const api_key = process.env.TMDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3/';

const getMovies = () => {
  return axios.get(`${baseUrl}discover/movie?api_key=${api_key}$language=es-ES&sort_by=popularity.desc`)
}

const getMovie = (id) => {
  return axios.get(`${baseUrl}movie/${id}?api_key=${api_key}$language=es-ES`)
}

export default getMovies
export { getMovie }