import React, {useContext, useEffect , useReducer} from 'react'
import reducer from './reducers/auth_reducer';
import axiosInstance from "../helpers/axiosInstance";

import axios from 'axios'

import {
  SHOW_LOGIN,
  SHOW_SIGNUP,
  LOGIN_USER,
  SIGNUP_USER, AUTH_FAILURE, CLEAR_ALERTS,
} from '../constants/actions';

const AuthContext = React.createContext()

const getLoginInfo = () => {
  let loginInfo = localStorage.getItem('loginInfo');
  if (loginInfo){
    return JSON.parse(loginInfo)
  } else {
    return null;
  }
}

const initialState = {
  isLoginOpen: true,
  loginInfo: getLoginInfo(),
  isAlert: false,
  alerts:[],
}


export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openLogin = () => {
    dispatch({type: SHOW_LOGIN})
  }

  const openSignup = () => {
    dispatch({type: SHOW_SIGNUP})
  }

  const clearAlerts = () => {
    dispatch({type: CLEAR_ALERTS});
  }

  const login = async (email, password) => {
    try {
      const response = await axiosInstance().post('/api/v1/sign_in', {
        email: email,
        password: password
      })
      const res = response.data;
      console.log('before dispatch')
      dispatch({type: LOGIN_USER, payload: res.data});
      localStorage.token = res.data.token;
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

  // useEffect(()=>{
  //   localStorage.setItem('loginInfo',JSON.stringify(state.loginInfo));
  // }, [state.loginInfo])

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