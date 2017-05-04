/**
 * Created by Rohan Raikar on 4/28/2017.
 */

import React,{ Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import {LoadDefaultMovies} from "../actions";
import SearchBar from "./SearchBar";


class MovieList extends Component{
    constructor(props){
        super(props);
        this.props.movies.loading=true;
        this.state={defaultKey : "Transformers"};
    }

    componentWillMount(){
        this.props.LoadDefaultMovies(this.state.defaultKey);//Loading movies of my choice
    }

    GetMovieList(movie,i){
        let imageSrc;
        if(movie.Poster == 'N/A')
            {imageSrc='http://www.blogsaays.com/wp-content/uploads/2014/02/no-user-profile-picture-whatsapp.jpg';}
            else{imageSrc=movie.Poster;}
          return(
              <Link key={i} to={movie .imdbID} >
                   <div className="listView_items">
                        <table className="table">
                        <tbody>
                            <tr >
                                <td className="listview-thumbnail-td">
                                    <img src={imageSrc} className="image_thumbnail"/>
                                </td>
                                <td>
                                    <p className="movie-title">{movie.Title}</p>
                                    <p className="movie-year">{movie.Year}</p>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                   </div>
                </Link>
              );
    }

    render(){
        //Display loading bar before loading the movies
        let movies;
        if(this.props.movies.loading){
            movies=<div className="loading-icon">
                    <img src="http://images1.desimartini.com/static1/images/reel.gif"/>
                    <p>Loading..!</p>
            </div>;
        }
        if(this.props.movies.errorReceived){
            //error has been received from the server 
            movies=<div className="page-header">
                    <h1>{ this.props.movies.list }</h1>
                    </div>;
        }else{
            movies=this.props.movies.list.map(this.GetMovieList);
        }
        
        
        return(
                <div>
                    <SearchBar/>
                    { movies }
                </div>
            );
    }
}


function mapStateToProps({ movies }) {
    return {
        movies
    }
}

export default connect(mapStateToProps, { LoadDefaultMovies })(MovieList);
