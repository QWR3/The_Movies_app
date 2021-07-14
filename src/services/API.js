import axios from "axios";

const api_key = "api_key=e6fc40e212e40758068c3bb4114f42ae"

const options = {
    baseURL: "https://api.themoviedb.org/3/"
}
const axiosInstance = axios.create(options)


const getMovies = (page, genre='') => axiosInstance(`/discover/movie?${api_key}&page=${page}&with_genres=${genre}`)
const getGenres = () => axiosInstance(`genre/movie/list?${api_key}`)
const getMovieInfo = (movie_id) => axiosInstance(`movie/${movie_id}?${api_key}&language=en-US`)
const getSearch = (page=1, query='')=>axiosInstance(`search/movie?${api_key}&query=${query}&page=${page}`)

export {getMovies, getGenres, getMovieInfo, getSearch}