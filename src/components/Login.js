import React, {useState} from "react";
import {LOGO} from "../constants";
import styled from 'styled-components'
import {Link, useHistory} from "react-router-dom";
import {useAuthContext} from "../context/auth_context";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('password')
  const {openSignup} = useAuthContext();

  return (
      <Wrapper>
        <div className="login">
          <Link to="/">
            <img
                className="login__logo"
                src={LOGO}
                alt=""
            />
          </Link>

          <div className="login__container">
            <h1> Sign in </h1>
            <form>
              <h5>E-mail</h5>
              <input type="email"/>

              <h5>Password</h5>
              <input type="password"/>
              <button type="submit" className="login__signInButton">Sign In</button>
            </form>

            <p>
              By continuing, you agree to RoadKing's Conditions of Use and Privacy Notice.
            </p>

            <button type='button' onClick={ openSignup} className="login__registerButton">Create your RoadKing account</button>
          </div>
        </div>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  .login__logo {
    width: 100px;
    object-fit: contain;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .login {
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login__container {
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid lightgray;
  }

  .login__container > h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  .login__container > form > h5 {
    margin-bottom: 5px;
  }

  .login__container > form > input {
    margin-bottom: 10px;
    height: 30px;
    background-color: white;
    width: 98%;
  }

  .login__container > p {
    margin-top: 15px;
    font-size: 12px;
  }

  .login__signInButton {
    background: #4bc1f0;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #4bc1f0 #32B6E5 #1686AB;
  }

  .login__registerButton {
    border-radius: 2px;
    width: 100%;
    height: 30px;
    margin-top: 10px;
    border: 1px solid darkgray;
  }
`
export default Login;