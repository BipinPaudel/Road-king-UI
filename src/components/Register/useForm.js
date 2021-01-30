import React, {useState, useContext}  from 'react';
import {GlobalContext} from "../../context/Provider";
import {useHistory} from "react-router";
import {register} from "../../context/actions/auth/register";


export default () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const {authDispatch, authState:{auth : {loginInfo}}} = useContext(GlobalContext);

  const history = useHistory();

  const onChange=(e, {name, value}) => {
    setForm({...form, [name]:value})
  };

  const registerFormValid =
      !form.email?.length ||
      !form.password?.length ||
      !form.confirmPassword?.length ||
      !(form.confirmPassword === form.password)

  const onSubmit = () => {
    setFieldErrors({});
    register(form)(authDispatch);
  }

  return {form, onChange,registerFormValid,onSubmit,fieldErrors}
}