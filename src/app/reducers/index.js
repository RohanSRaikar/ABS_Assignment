/**
 * Created by Rohan Raikar on 4/28/2017.
 */

import { combineReducers } from "redux";
import MovieListReducer from "./MovieListReducer.js";
import MovieDetailsReducer from "./MovieDetailsReducer";

const reducers = combineReducers({
    movies : MovieListReducer,
    movieDetailsData : MovieDetailsReducer
});

export default reducers;