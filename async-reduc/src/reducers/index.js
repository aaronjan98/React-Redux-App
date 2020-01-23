import {
    FETCHING_API_START,
    FETCHING_API_SUCCESS,
    FETCHING_API_FAILURE
  } from '../actions';

const initialState = {
    isLoading: false,
    activity: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_API_START:
            return {
              ...state,
              isLoading: true
            };
          case FETCHING_API_SUCCESS:
            return {
              ...state,
              isLoading: false,
              activity: action.payload
            };
        default:
            return state;
    }
}