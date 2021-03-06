const actionTypes = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
  USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_FAILURE: 'USER_LOGOUT_FAILURE',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
};

const user = localStorage.getItem('user');
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case actionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.USER_LOGOUT_FAILURE:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case actionTypes.USER_REGISTER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
