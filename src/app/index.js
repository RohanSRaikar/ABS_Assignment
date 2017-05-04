/**
 * Created by Rohan Raikar on 4/27/2017.
 */
import React from "react";
import { render }  from "react-dom";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import routes from "./route";
import reducers from "./reducers";
import {Router, browserHistory} from "react-router";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);



render (<Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
    </Provider>,window.document.querySelector("#root_app"));

