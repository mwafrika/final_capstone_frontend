import axios from 'axios';
import { bikesURL } from '../../helpers/api';

const FETCH_DATA = 'bikes/FETCH_DATA';
const POST_DATA = 'bikes/POST_DATA';
const initialState = [];

export const fetchBikes = async () => {
  const response = await axios.get(bikesURL);
  return response;
};

export const postBikesToApi = (data) => async (dispatch) => {
  await axios.post(bikesURL, data)
    .then((response) => {
      dispatch({ type: POST_DATA, payload: response });
    });
};

const bikeReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        bikes: action.payload,
      };
    case POST_DATA:
      return action.payload;
    default:
      return state;
  }
};
export default bikeReducers;
