/**
 * Created by Rohan Raikar on 4/28/2017.
 */
import React, {Component} from "react";
import { connect } from "react-redux";
import Header  from "./Header";
import { MovieList } from "./MovieList";



export default class App extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                {this.props.children}
            </div>
         );
    }
}
