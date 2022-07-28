const actionTypes = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
  USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_FAILURE: 'USER_LOGOUT_FAILURE',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
  USER_REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
};

const user = localStorage.getItem('user');
const initialState = user
  ? {
    isLoggedIn: true,
    user,
    error: null,
    loading: false,
  }
  : {
    isLoggedIn: false,
    user: null,
    error: null,
    laoding: false,
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loading: false,
      };
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: action.payload,
        laoding: false,
      };
    case actionTypes.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loading: false,
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
        loading: false,
      };
    case actionTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.USER_REGISTER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        laoding: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
