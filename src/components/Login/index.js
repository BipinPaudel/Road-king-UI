import React from "react";
import useForm from "./useForm";
import LoginUI from "../../layout/Login";

const LoginContainer = () => {

  return (
      <LoginUI form={useForm()}/>
  )
}

export default LoginContainer;