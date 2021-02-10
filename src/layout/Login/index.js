import React from 'react';
import {Link} from "react-router-dom";
import {LOGO} from "../../constants";
import './index.css';
import {Button, Form, Grid, Header as SemanticHeader, Segment} from "semantic-ui-react";
import {Header} from "../../components";
import MyAlert from "../../components/Myalert";

const LoginUI = ({form: {onChange, form, onSubmit,loginFormValid, alerts}}) => {
  console.log("from loginm ui");
  console.log(alerts);
  return (
      <div>
        <Header/>
        <Grid centered>
          <Grid.Column style={{maxWidth: 550, marginTop: 20}}>
            <Link to="/auth/login">
              <img className={"logo"}
                   src={LOGO}
                   alt=""
              />
            </Link>
            {
              alerts && alerts.length > 0 && <MyAlert alerts={alerts} type={'invalid'}/>
            }
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
                    onClick={onSubmit}>Sign In

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