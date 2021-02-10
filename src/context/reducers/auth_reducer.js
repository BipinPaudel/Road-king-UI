import {
  AUTH_FAILURE, CLEAR_ALERTS,
  LOGIN_FAILED,
  LOGIN_USER,
  SHOW_LOGIN,
  SHOW_SIGNUP, SIGNUP_USER
} from '../../actions'

const auth_reducer = (state, action) => {
  if (action.type === LOGIN_USER){
    console.log('login is success ',action.payload)
    return {
      ...state,
      auth:{
        ...state.auth,
        loginInfo: action.payload,
        alerts:[]
      }
    }
  }

  if (action.type === AUTH_FAILURE){
    console.log('inside reduer auth fail',action.payload)
    return {...state,
      auth:{
        ...state.auth,
        alerts:[action.payload]
      }
    }
  }

  if (action.type === CLEAR_ALERTS){
    return {...state, alerts: []}
  }

  if (action.type === SIGNUP_USER){
    return { ...state, loginInfo: action.payload}
  }

  throw new Error(`No Matching "${action.type}" - action type`)

}

export default auth_reducer