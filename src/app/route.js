/**
 * Created by Rohan Raikar on 4/28/2017.
 */

import React from "react";
import { Route, IndexRoute } from 'react-router';

import App from "./components/app";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

export default (
    <Route path="/" component={App}>
    <IndexRoute component={MovieList} />
    <Route path="/:id" component={ MovieDetails }/>
    </Route>
);