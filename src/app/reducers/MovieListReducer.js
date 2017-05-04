/**
 * Created by Rohan Raikar on 4/28/2017.
 */
import {FETCH_DEFAULT_MOVIES} from "../actions/types";
const initialState = {list : [], movie:null};

export default function (state=initialState,action){
    switch(action.type) {
        case FETCH_DEFAULT_MOVIES:
        let list,errorReceived;
            if(action.payload.Error){
                list=action.payload.Error;
                errorReceived=true;
            }else{
                list=action.payload.Search;
                errorReceived=false;
            }
            return{
                    ...state,
                list,
                loading:action.loading,
                errorReceived
            };
        }
    return state;
}

