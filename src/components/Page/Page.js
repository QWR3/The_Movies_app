import './Page.css'

import {useDispatch, useSelector} from "react-redux";
import {nextPage, previewPage} from "../../redux/page";
import {setLoadingTrue} from "../../redux/isLoading";

export default function Page() {
    const [page, theme] = useSelector(({page, theme}) => [page.value, theme.value])
    const dispatch = useDispatch()

    const className = `btn btn-${theme}`

    return (
        <div className={'page'}>
            <button disabled={page < 2} onClick={() => {
                dispatch(previewPage())
                dispatch(setLoadingTrue())
            }
            } className={className}>preview
            </button>

            <h3 className={`page-${theme}`}>Page {page}</h3>

            <button onClick={() => {
                dispatch(nextPage())
                dispatch(setLoadingTrue())
            }
            } className={className}>next
            </button>

        </div>
    );
}