import './Ganre.css'
import {Link} from 'react-router-dom'

import {useDispatch, useSelector} from "react-redux";
import {setGenresVisibleFalse} from "../../redux/doGenresVisible";

export default function Genre({item}) {
    const dispatch = useDispatch()
    const theme = useSelector(({theme}) => theme.value)

    return (
        <div className={'genre'}>
            <Link to={`genre-${item.id}`}>
                <button className={`btnGenre btnGenre-${theme}`} onClick={() => {
                    dispatch(setGenresVisibleFalse())
                }}><h4>{item.name}</h4></button>
            </Link>
        </div>
    );
}