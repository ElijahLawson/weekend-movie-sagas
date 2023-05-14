import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Details() {
    useEffect(() => {
        getCurrentMovie();
    })    
    const dispatch = useDispatch();
    const {state} = useLocation();
    const id = state;

    const currentMovie = useSelector(storeInstance => storeInstance.currentMovie);
    
    const getCurrentMovie = () => {
        dispatch({
            type: 'FETCH_CURRENT_MOVIE',
            payload: id,
        })
    }

    return(
        <p>Test</p>
    )
}

export default Details;