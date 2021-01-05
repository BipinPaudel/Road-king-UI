import React, { useContext, useEffect, useState, useReducer } from 'react'
import reducer from '../reducers/auth_reducer';

import {
  SHOW_LOGIN,
  SHOW_SIGNUP
} from '../actions';

const AuthContext = React.createContext()

const initialState = {
  isLoginOpen: true,

}
export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openLogin = () => {
    dispatch({type: SHOW_LOGIN})
  }

  const openSignup = () => {
    console.log('open signup here')
    dispatch({type: SHOW_SIGNUP})
  }

  return (
      <AuthContext.Provider value={{...state, openLogin, openSignup}}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}