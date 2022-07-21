import * as API from '../service';

const actionTypes = {
  BIKES_FETCH_SUCCESS: 'BIKES_FETCH_SUCCESS',
  BIKES_FETCH_FAILURE: 'BIKES_FETCH_FAILURE',
  BIKE_FETCH_SUCCESS: 'BIKE_FETCH_SUCCESS',
  BIKE_FETCH_FAILURE: 'BIKE_FETCH_FAILURE',
  BIKE_CREATE_SUCCESS: 'BIKE_CREATE_SUCCESS',
  BIKE_CREATE_FAILURE: 'BIKE_CREATE_FAILURE',
  BIKE_UPDATE_SUCCESS: 'BIKE_UPDATE_SUCCESS',
  BIKE_UPDATE_FAILURE: 'BIKE_UPDATE_FAILURE',
  BIKE_DELETE_SUCCESS: 'BIKE_DELETE_SUCCESS',
  BIKE_DELETE_FAILURE: 'BIKE_DELETE_FAILURE',
};

export const newCar = (car, navigate, e) => (dispatch) => {
  API.createCar(car, e)
    .then((car) => {
      dispatch({
        type: actionTypes.BIKE_CREATE_SUCCESS,
        payload: car,
      });
      navigate('/');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.BIKE_CREATE_FAILURE,
        payload: error,
      });
    });
};

export const fetchCars = () => (dispatch) => {
  API.fetchCars()
    .then((cars) => {
      dispatch({
        type: actionTypes.BIKES_FETCH_SUCCESS,
        payload: cars,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.BIKES_FETCH_FAILURE,
        payload: error,
      });
    });
};
