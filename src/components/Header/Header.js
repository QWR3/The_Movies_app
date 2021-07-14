import {Link} from 'react-router-dom'

import './Header.css'
import {useDispatch, useSelector} from "react-redux";
import {setGenresVisibleFalse, setGenresVisibleTrue} from "../../redux/doGenresVisible";
import {useState} from "react";
import {setSearch} from "../../redux/search";
import {setLoadingTrue} from "../../redux/isLoading";
import {setDarkTheme, setLightTheme} from "../../redux/theme";

export default function Header() {
    const dispatch = useDispatch()
    const [doGenresVisible, theme] = useSelector(({doGenresVisible, theme}) => [doGenresVisible.value, theme.value])

    const selector = doGenresVisible ? setGenresVisibleFalse() : setGenresVisibleTrue()
    const iconTheme = theme === 'light' ? "fa fa-moon-o" : 'fas fa-sun'

    const [input, setInput] = useState()
    const onChange = (e) => {
        setInput(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setInput('')
        dispatch(setSearch(input))
        dispatch(setLoadingTrue())
    }

    const setTheme=()=>{
        if(theme==='light'){
            dispatch(setDarkTheme())
        }else {
            dispatch(setLightTheme())
        }
    }

    return (
        <div className={`header ${theme}-theme-header`}>
            <Link to={'/'}>
                <img src={"./logo.png"} alt=""/>
            </Link>
            <form action="" className={"headerForm"} onSubmit={onSubmit}>
                <input type="text" name={"input"} value={input} onChange={onChange}/>
                <button><i className={'fas fa-search'}/></button>
            </form>

            <button className={`btn btn-${theme}`} onClick={()=>setTheme()}>
                <i className={iconTheme}/>
            </button>

            <button className={`btn btn-${theme}`} onClick={() => dispatch(selector)}>Genres</button>
        </div>
    );
}