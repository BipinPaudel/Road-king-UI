import React from 'react';
import {Link} from "react-router-dom";
import {LOGO} from "../../constants";
import './index.css';
import {Button, Form, Grid, Header as SemanticHeader, Segment} from "semantic-ui-react";

const LoginUI = ({form: {onChange, form, onSubmit,loginFormValid}}) => {
  console.log("from loginm ui")
  return (
      <div>
        <Grid centered>
          <Grid.Column style={{maxWidth: 550, marginTop: 20}}>
            <Link to="/auth/login">
              <img className={"logo"}
                   src={LOGO}
                   alt=""
              />
            </Link>
            {/*{*/}
            {/*  isAlert && <MyAlert type={'invalid'}/>*/}
            {/*}*/}
            <SemanticHeader className="login__container">
              Sign up
            </SemanticHeader>
            <Segment>
              <Form>
                <Form.Field>
                  <Form.Input
                      onChange={onChange}
                      type="email"
                      name='email'
                      value={form.email || ""}
                      label={"Email"}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                      onChange={onChange}
                      type="password"
                      name='password'
                      value={form.password || ""}
                      label={"Password"}
                  />
                </Form.Field>
                <Button
                    type="submit"
                    disabled={loginFormValid}
                    className="login__signInButton"
                    onClick={onSubmit}>Sign Up
                </Button>
              </Form>

              <p>
                By continuing, you agree to RoadKing's Conditions of Use and Privacy Notice.
              </p>

              <Link to='/auth/register' className="login__registerButton">Create your RoadKing account</Link>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
  )
}

export default LoginUI;