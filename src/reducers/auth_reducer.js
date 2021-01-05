import {
  SHOW_LOGIN,
  SHOW_SIGNUP
} from '../actions'

const auth_reducer = (state, action) => {
  if (action.type === SHOW_LOGIN){
    return {...state, isLoginOpen: true}
  }

  if (action.type === SHOW_SIGNUP){
    console.log('open signup there')
    return {...state, isLoginOpen: false}
  }

  throw new Error(`No Matching "${action.type}" - action type`)

}

export default auth_reducer