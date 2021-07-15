import './MoviesList.css'

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setMovies} from "../../redux/movies";
import {getMovies, getSearch} from "../../services/API";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import Page from "../Page/Page";
import GenresList from "../GenresList/GenresList";
import {setLoadingTrue} from "../../redux/isLoading";



export default function MoviesList({params: {genre: paramsGenre = '', search: paramsSearch = ''}}) {
    const dispatch = useDispatch()
    const [movies, page, doGenresVisible, isLoading, theme] = useSelector(({
                                                                               movies,
                                                                               page,
                                                                               doGenresVisible,
                                                                               isLoading,
                                                                               theme
                                                                           }) => [movies, page.value, doGenresVisible.value, isLoading.value, theme.value])

    useEffect(() => {
        dispatch(setLoadingTrue())
        try {
            if (paramsSearch) {
                getSearch(page, paramsSearch).then(value => {
                    dispatch(setMovies(value.data))

                })
            } else {
                getMovies(page, paramsGenre).then(value => {
                    dispatch(setMovies(value.data));
                })
            }
        } catch (e) {
            console.log(e)
        }
    }, [page, dispatch, paramsGenre, paramsSearch])

    const className = doGenresVisible ? "moviesListWhenGenres transition-duration" : "moviesList transition-duration"

    return (
        <div>
            {isLoading && <h1 className={`loading loading-${theme}`}>LOADING...</h1>}
            <div className={`moviesListIsLoading-${isLoading}`}>
                <div className={className + ` moviesList-${theme}`}>
                    <Page/>
                    <div className={"moviesListFlex"}>
                        {movies.results && movies.results.map(value => <MoviesListCard movie={value} key={value.id}/>)}
                    </div>
                    <Page/>
                </div>
                <GenresList/>
            </div>

        </div>
    );
}