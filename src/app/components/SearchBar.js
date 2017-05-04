/**
 * Created by Rohan Raikar on 4/27/2017.
 */

import React,{ Component } from "react";
import { LoadDefaultMovies } from '../actions';
import { connect } from "react-redux";

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={searchKey:""};    
    }

    //calling on click of search button
    LoadMovies(e){
        const searchKey = document.getElementById("searchKey").value;
        //check if the value passed is empty or not 
        this.setState({
            searchKey : searchKey
        })
        if(searchKey == "")
        {
            alert("Please enter Movie Name to Search.!");
        }else{
            //call SearchMovie function to load the movies passed on the keyword
            console.log(this.props);
            //this.setState({ keyValue: searchKey });
            console.log(this.props.LoadDefaultMovies(searchKey));
        }

    }
    render(){
        console.log(this.state.searchKey);
        return (
            <div className="well">
                <table className="table">
                <tbody>
                    <tr>
                        <td className=" search-box-td"><input type="text" className="form-control" placeholder="Enter Movie Name" id="searchKey" /></td>
                        <td><button type="button" className="btn btn-info" onClick={this.LoadMovies.bind(this)}>
                                <span className="glyphicon glyphicon-search"></span> Search
                        </button></td>
                    </tr>
                </tbody>
                </table>
            </div>
            );
    }
}

function mapStateToProps({ movies }) {
    return {
        movies
    }
}


export default connect(mapStateToProps, { LoadDefaultMovies })(SearchBar);