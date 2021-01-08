import React, {useState, useEffect} from "react";
import {LOGO} from "../constants";
import styled from 'styled-components'
import {Link,useHistory} from "react-router-dom";
import {useAuthContext} from "../context/auth_context";
import MyAlert from "./Myalert";

function Login() {
  const [email, setEmail] = useState('admin123@admin.com');
  const [password, setPassword] = useState('admin123')
  const {openSignup, login, isAlert, loginInfo, isLoggedIn} = useAuthContext();
  let history = useHistory();
  const submitForm =async (e) => {
    e.preventDefault();
    await login(email, password);
    console.log('down submit ',loginInfo);
  }

  useEffect(()=>{
    if (isLoggedIn && loginInfo){
      history.push('/vehicles')
    } else{
      history.push('/')
    }
  }, [loginInfo, isLoggedIn])
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
          {
            isAlert && <MyAlert type={'invalid'}/>
          }
          <div className="login__container">
            <h1> Sign in </h1>
            <form>
              <h5>E-mail</h5>
              <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>

              <h5>Password</h5>
              <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button type="submit" className="login__signInButton" onClick={submitForm}>Sign In</button>
            </form>

            <p>
              By continuing, you agree to RoadKing's Conditions of Use and Privacy Notice.
            </p>

            <button type='button' onClick={openSignup} className="login__registerButton">Create your RoadKing account
            </button>
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