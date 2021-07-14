import './Ganre.css'

import {useDispatch, useSelector} from "react-redux";
import {setGenre} from "../../redux/genre";
import {setLoadingTrue} from "../../redux/isLoading";
import {setGenresVisibleFalse} from "../../redux/doGenresVisible";

export default function Genre({item}) {
    const dispatch = useDispatch()
    const theme = useSelector(({theme}) => theme.value)

    return (
        <div className={'genre'}>
            <button className={`btnGenre btnGenre-${theme}`} onClick={() => {
                dispatch(setGenre(item.id))
                dispatch(setLoadingTrue())
                dispatch(setGenresVisibleFalse())
            }}><h4>{item.name}</h4></button>
        </div>
    );
}