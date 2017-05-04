/**
 * Created by Rohan Raikar on 4/28/2017.
 */
import {FETCH_MOVIE_DETAILS} from "../actions/types";
const initialState = {moviesdata : [], movie:null};

export default function (state=initialState,action){
    switch(action.type) {

        case FETCH_MOVIE_DETAILS:
            let errorReceived,moviesdata;
            if(action.payload.Error){
                moviesdata=action.payload.Error;
                errorReceived=true;
            }else{
                moviesdata=action.payload;
                errorReceived=false;
            }
            console.log("Data received from server",moviesdata);
            return{
                    ...state,
                    moviesdata,
                    loading : action.loading,
                    errorReceived
    };
    };
return state;
}

