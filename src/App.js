import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import {useDispatch} from "react-redux";
import {setSearch} from "./redux/search";
import {setGenre} from "./redux/genre";
import {setLoadingTrue} from "./redux/isLoading";

export default function App() {
    const dispatch = useDispatch()

    return (
        <Router>
            <div className={'app'}>
                <Header/>
                <Switch>
                    <Route path={'/:id'} render={(props) => {
                        return <MovieInfo id={props.match.params.id}/>
                    }}/>
                    <Route path={'/'} render={() => {
                        dispatch(setSearch(''))
                        dispatch(setGenre(''))
                        dispatch(setLoadingTrue())
                        return <MoviesList/>
                    }}/>
                </Switch>
            </div>
        </Router>
    );
}