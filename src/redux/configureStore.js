import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bikeReducers from './Bikes/bikes';
import reservationReducers from './Reservations/reservation';
import userReducer from './user/user';

const reducers = combineReducers({
  bikeReducers, userReducer, allReservation: reservationReducers,
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
