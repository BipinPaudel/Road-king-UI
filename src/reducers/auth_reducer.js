import {
  AUTH_FAILURE, CLEAR_ALERTS,
  LOGIN_FAILED,
  LOGIN_USER,
  SHOW_LOGIN,
  SHOW_SIGNUP, SIGNUP_USER
} from '../actions'

const auth_reducer = (state, action) => {
  if (action.type === SHOW_LOGIN){
    return {...state, isLoginOpen: true}
  }

  if (action.type === SHOW_SIGNUP){
    return {...state, isLoginOpen: false}
  }

  if (action.type === LOGIN_USER){
    return {...state, loginInfo: action.payload, isLoggedIn: true}
  }

  if (action.type === AUTH_FAILURE){
    return {...state, alerts: action.payload, isAlert: true}
  }

  if (action.type === CLEAR_ALERTS){
    return {...state, alerts: null, isAlert: false}
  }

  if (action.type === SIGNUP_USER){
    return { ...state, loginInfo: action.payload , isLoggedIn: true}
  }

  throw new Error(`No Matching "${action.type}" - action type`)

}

export default auth_reducer