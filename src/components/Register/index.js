import React from "react";
import useForm from "./useForm";
import RegisterUI from "../../layout/Register";

const RegisterContainer = () => {
  return (
      <RegisterUI form={useForm()}/>
  )
}

export default RegisterContainer;