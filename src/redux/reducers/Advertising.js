import { FETCH_ADVERTISING_REQUEST } from "../actions/Advertising";
import { FETCH_DATA_SUCCESS } from "../actions/Advertising";
import { FETCH_DATA_FAILURE } from "../actions/Advertising";

const initState = {
  loading: false,
  advertisings: [],
  error: ""
};

 const Advertising = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ADVERTISING_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        advertisings: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default Advertising