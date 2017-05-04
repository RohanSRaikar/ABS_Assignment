/**
 * Created by Rohan Raikar on 4/27/2017.
 */

import React,{Component}from "react";
import { connect } from 'react-redux';

export default class Header extends Component{
    render(){
        return(
            <div className="jumbotron main-banner">
                   <h1>Movie Search</h1>
                   <p>Seacrh your most liked movies at a single click.!</p>
            </div>
            );
    }
}