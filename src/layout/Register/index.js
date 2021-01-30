import React from 'react';
import {Link} from "react-router-dom";
import {LOGO} from "../../constants";
import './index.css';
import {
  Button,
  Form,
  Grid,
  Header as SemanticHeader,
    Segment
} from "semantic-ui-react";
import {Header} from "../../components";

const RegisterUI = ({form: {onChange, form, registerFormValid, onSubmit, fieldErrors}}) => {
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

                <Form.Field>
                  <Form.Input
                      type="password"
                      name='confirmPassword'
                      value={form.confirmPassword || ""}
                      onChange={onChange}
                      label={"Confirm Password"}
                  />
                </Form.Field>
                <Button
                    type="submit"
                    disabled={registerFormValid}
                    className="login__signInButton"
                    onClick={onSubmit}>Sign Up
                </Button>
              </Form>

              <p>
                By continuing, you agree to RoadKing's Conditions of Use and Privacy Notice.
              </p>

              <Link to="/auth/login" className="login__registerButton"> Login to your RoadKing account </Link>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
  )
}

export default RegisterUI;