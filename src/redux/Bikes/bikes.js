import axios from 'axios';
import { bikesURL } from '../../helpers/api';

const FETCH_DATA = 'bikes/FETCH_DATA';
const POST_DATA = 'bikes/POST_DATA';
const DELETE_BIKE = 'bikes/DELETE_BIKES';
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

export const deleteBike = (id) => async (dispatch) => {
  await axios.delete(`${bikesURL}/${id}`)
    .then((response) => {
      dispatch({ type: DELETE_BIKE, payload: response });
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
    case DELETE_BIKE:
      return {
        ...state,
        bikes: state.cars.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default bikeReducers;
