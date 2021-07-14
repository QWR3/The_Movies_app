import './MoviesListCard.css'

import {Link} from 'react-router-dom'
import PosterPreview from "../PosterPreview/PosterPreview";
import SimpleRating from "../StarsRating/StarsRating";
import {useSelector} from "react-redux";

export default function MoviesListCard({movie:{overview,poster_path,id,release_date,vote_average,original_title}}) {
    const theme = useSelector(({theme}) => theme.value)

    function overviewSlice(){
        if (overview.length>250){
            return overview.slice(0,250)+'...'
        }else {
            return overview
        }
    }


    return (
            <div className={`moviesListCard moviesListCard-${theme}`}>
                <PosterPreview path={poster_path}/>
                <Link to={`/${id}`}>
                    <h3>{original_title}</h3>
                </Link>
                <p className={"listCardOverview"}>{overviewSlice()}</p>
                <p>{release_date}</p>
                <div className={"moviesListCardRating"}>
                    <SimpleRating value={vote_average} size={'small'}/>
                </div>
            </div>
    );
}