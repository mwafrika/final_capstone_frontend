import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/user';
import bikeReducer from './reducers/bike';
import reservationReducer from './reducers/reservation';

const rootReducer = combineReducers({
  user: userReducer,
  bike: bikeReducer,
  reservation: reservationReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
