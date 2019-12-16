import axios from "axios";
export const FETCH_ADVERTISING_REQUEST = "FETCH_ADVERTISING_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchAdvertisingRequest = () => {
  return {
    type: FETCH_ADVERTISING_REQUEST
  };
};

export const fetchDataSuccess = advertisings => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: advertisings
  };
};

export const fetchDataFailure = error => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  };
};

export const fetchData = () => {
  return dispatch => {
    axios
      .get("http://api.asanshahr.com/api/offers?pageSize=10&pageNumber=1")
      .then(response => {
        console.log("sdsd",response.data);
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(err => {
        dispatch(fetchDataFailure(err.message))
        console.log(err.message);
      });
  };
};
