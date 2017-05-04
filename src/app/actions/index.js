/**
 * Created by Rohan Raikar on 4/28/2017.
 */

import {FETCH_DEFAULT_MOVIES , FETCH_MOVIE_DETAILS} from "./types";
import Request from "superagent";

export function LoadDefaultMovies(SearchKey){
    var url=`http://www.omdbapi.com?s=${SearchKey}`;
    console.log("Movies list Fetch URL",url);
    return(dispatch) => {
        Request.get(url).then((response) => {
            dispatch({
                type: FETCH_DEFAULT_MOVIES,
                payload: response.body,
                loading : false
            });
        })
    }
}
export function fetchMovieDetails(movieID){
    var url=`http://www.omdbapi.com?i=${movieID}`;
    console.log("Movie Details Fetch URL",url);
    return(dispatch) => {
        Request.get(url).then((response) => {
            dispatch({
                type: FETCH_MOVIE_DETAILS,
                payload: response.body,
                loading : false
            });
        })
    }
}
