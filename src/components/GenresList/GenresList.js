import './GenresList.css'

import {useEffect, useState} from "react";
import {getGenres} from "../../services/API";
import Genre from "../Genre/Genre";
import {useSelector} from "react-redux";

export default function GenresList () {
    const [genres,setGenres]=useState([])
    const [doGenresVisible, theme] = useSelector(({doGenresVisible, theme})=>[doGenresVisible.value, theme.value])

    const className = doGenresVisible?"genreList-visible":"genreList-unvisible"

    useEffect(() => {
        getGenres().then(value => {
            setGenres(value.data.genres)
        })
    },[])

    return(
        <div className={className + ` genreList-${theme}`}>
            {genres&&genres.map(value => <Genre key={value.id} item={value}/>)}
        </div>
    );
}