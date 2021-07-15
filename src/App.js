import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import {useDispatch} from "react-redux";

export default function App() {
    const dispatch = useDispatch()

    return (
        <Router>
            <div className={'app'}>
                <Header/>
                <Switch>
                    <Route exact={true} path={'/genre-:genre'} render={(props) => {
                        return <MoviesList params={props.match.params}/>
                    }}/>
                    <Route exact={true} path={'/search-:search'} render={(props) => {
                        return <MoviesList params={props.match.params}/>
                    }}/>
                    <Route exact path={'/movie-:id'} render={(props) => {
                        return <MovieInfo id={props.match.params.id}/>
                    }}/>
                    <Route exact={true} path={'/'} render={(props) => {
                        return <MoviesList params={props.match.params}/>
                    }}/>
                </Switch>
            </div>
        </Router>
    );
}