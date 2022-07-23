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

export const newBike = (bike, navigate, e) => (dispatch) => {
  API.createBike(bike, e)
    .then((bike) => {
      dispatch({
        type: actionTypes.BIKE_CREATE_SUCCESS,
        payload: bike,
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

export const fetchbikes = () => (dispatch) => {
  API.fetchBikes()
    .then((bikes) => {
      dispatch({
        type: actionTypes.BIKES_FETCH_SUCCESS,
        payload: bikes,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.BIKES_FETCH_FAILURE,
        payload: error,
      });
    });
};

export const fetchbike = (id) => (dispatch) => {
  API.getBike(id)
    .then((bike) => {
      console.log(bike, 'check for bike');
      dispatch({
        type: actionTypes.BIKE_FETCH_SUCCESS,
        payload: bike,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.BIKE_FETCH_FAILURE,
        payload: error,
      });
    });
};

export const deleteBike = (id, navigate) => (dispatch) => {
  API.deleteBike(id)
    .then(() => {
      dispatch({
        type: actionTypes.BIKE_DELETE_SUCCESS,
        payload: id,
      });
      navigate('/bikes');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.BIKE_DELETE_FAILURE,
        payload: error,
      });
    });
};
