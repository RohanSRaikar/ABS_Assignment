/**
 * Created by Rohan Raikar on 4/28/2017.
 */

import React, {Component} from "react";
import { fetchMovieDetails } from '../actions';
import { connect } from "react-redux";
import {Router, browserHistory} from "react-router";

class MovieDetails extends Component{

    constructor(props){
        super(props);
        console.log("ID passed:",this.props.params.id);
    }

    componentWillMount(){
        this.props.fetchMovieDetails(this.props.params.id);
    }

    render(){
        console.log("asldjasf",this.props.movieDetailsData.moviesdata );
        const movie=this.props.movieDetailsData.moviesdata;
        let movieThumbnail;
        if(movie.Poster=="N/A"){
                movieThumbnail='http://www.blogsaays.com/wp-content/uploads/2014/02/no-user-profile-picture-whatsapp.jpg';
        }else{
            movieThumbnail=movie.Poster;
        }
          return(
              <div >
                    <button type="button" className="btn btn-info back-button" onClick={browserHistory.goBack}>
                        <span className="glyphicon glyphicon-arrow-left"></span> Back
                    </button>
                    <div className="panel panel-default">
                    <div className="movie-details-title">{movie.Title}</div>
                        <table className="table">
                            <tbody>
                                <tr>
                                        <td colSpan="5" width="30%"><img src={movieThumbnail} className="movie-details-img"/></td>
                                        <td><table>
                                            <tbody className="movie-details-data" width="100%">
                                                <tr><th>Director : </th><td>{movie.Director}</td></tr>
                                                <tr><th>Actors : </th><td>{movie.Actors}</td></tr>
                                                <tr><th>Released : </th><td>{movie.Released}</td></tr>
                                                <tr><th>Production : </th><td>{movie.Production}</td></tr>
                                                <tr><th>Awards : </th><td>{movie.Awards}</td></tr>
                                                <tr><th>BoxOffice : </th><td>{movie.BoxOffice}</td></tr>
                                                <tr><th>Genre : </th><td>{movie.Genre}</td></tr>
                                            </tbody>
                                        </table></td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody className="movie-details-data">
                                <tr>
                                    <th width="15%">Description : </th>
                                    <td>{movie.Plot}</td>
                                </tr>
                            </tbody>
                        </table>
              </div>
    </div>
          );
    }
}


function mapStateToProps({ movieDetailsData }){
        return {
            movieDetailsData
        }
}

export default connect (mapStateToProps,{fetchMovieDetails})(MovieDetails);
