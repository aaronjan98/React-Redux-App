import axios from 'axios';

export const FETCHING_API_START = 'FETCHING_API_START';
export const FETCHING_API_SUCCESS = 'FETCHING_API_SUCCESS';
export const FETCHING_API_FAILURE = 'FETCHING_API_FAILURE';

export const fetchAPI = () => dispatch => {
  dispatch({ type: FETCHING_API_START });
  axios
    .get('https://api.spacexdata.com/v3/launches/latest')
    .then(res => {
        console.log('API:', res);
        // dispatch({ type: FETCHING_API_SUCCESS, payload: res.data });
    })
    .catch(err => {
    //   dispatch({ type: FETCHING_API_FAILURE, payload: err.response });
    });
};
