import React from 'react'
import styled from 'styled-components'
import {useAuthContext} from "../context/auth_context";
import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthPage = () => {
  const { isLoginOpen } = useAuthContext();

  if (isLoginOpen){
    return <Login/>
  } else {
    return <Signup/>
  }
}

export default AuthPage;