import {
  AUTH_FAILURE, CLEAR_ALERTS, LOGIN_BEGIN,
  LOGIN_FAILED,
  LOGIN_USER, LOGOUT,
  SHOW_LOGIN,
  SHOW_SIGNUP, SIGNUP_FAILED, SIGNUP_USER
} from '../../constants/actions'

const auth_reducer = (state, action) => {
  if (action.type === LOGIN_BEGIN){
    return {
      ...state,
      auth: {
        ...state.auth,
        loading: true,
      }
    }
  }
  if (action.type === LOGIN_USER) {
    return {
      ...state,
      auth: {
        ...state.auth,
        loginInfo: action.payload,
        errors: [],
        loading: false
      }
    }
  }

  if (action.type === AUTH_FAILURE) {
    return {
      ...state,
      auth: {
        ...state.auth,
        errors: [action.payload],
        loading: false
      }
    }
  }

  if (action.type === CLEAR_ALERTS) {
    return {...state,
      auth: {
        ...state.auth,
        errors: []
      }
    }
  }

  if (action.type === SIGNUP_USER) {
    return {
      ...state,
      loginInfo: action.payload

    }
  }
  if (action.type === SIGNUP_FAILED){
    return {
      ...state,
      auth: {
        ...state.auth,
        loginInfo: null,
        errors: action.payload
      }
    }
  }

  if (action.type === LOGOUT){
    localStorage.removeItem('token');
    return {
      ...state,
      auth: {
        ...state.auth,
        loginInfo: null,
        errors: []
      }
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)

}

export default auth_reducer