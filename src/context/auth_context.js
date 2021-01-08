import React, {useContext, useEffect, useState, useReducer} from 'react'
import reducer from '../reducers/auth_reducer';
import { useHistory } from "react-router-dom";

import axios from 'axios'

import {
  SHOW_LOGIN,
  SHOW_SIGNUP,
  LOGIN_USER,
  SIGNUP_USER, LOGIN_FAILED, AUTH_FAILURE, CLEAR_ALERTS,
} from '../actions';

const AuthContext = React.createContext()

const initialState = {
  isLoginOpen: true,
  loginInfo: null,
  isLoggedIn: false,
  isAlert: false,
  alerts:[],
}
export const AuthProvider = ({children}) => {
  let history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);

  const openLogin = () => {
    dispatch({type: SHOW_LOGIN})
  }

  const openSignup = () => {
    console.log('open signup here')
    dispatch({type: SHOW_SIGNUP})
  }

  const clearAlerts = () => {
    dispatch({type: CLEAR_ALERTS});
  }

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/v1/sign_in', {
        email: email,
        password: password
      })
      const res = response.data;
      console.log('before dispatch')
      dispatch({type: LOGIN_USER, payload: res.data});
      console.log('after dispatch')
    } catch (e) {
      dispatch({type: AUTH_FAILURE, payload: ['Invalid email or password']});
    }
  }

  const signup = async (email, password, confirm_password) => {
    dispatch({type:SIGNUP_USER})
    try {
      const response = await axios.post('/api/v1/sign_up', {
        email: email,
        password: password,
        password_confirmation: confirm_password
      })
      const loginInfo = response.data;
      dispatch({type: SIGNUP_USER, payload: loginInfo.data});
    } catch (e) {
      dispatch({type: AUTH_FAILURE, payload: [e.response.data.messages]});
    }
  }

  return (
      <AuthContext.Provider value={{...state,
        openLogin,
        openSignup,
        login,
        signup,
        clearAlerts}}>
        {children}
      </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}