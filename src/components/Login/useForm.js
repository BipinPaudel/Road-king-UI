import React, {useState, useContext, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {GlobalContext} from "../../context/Provider";
import {login} from "../../context/actions/auth/login";


export default () => {
  const [form, setForm] = useState({});
  const history = useHistory();
  const {authDispatch, authState: {auth: {loginInfo}}} = useContext(GlobalContext);

  const onChange = (e, {name, value}) => {
    setForm({...form, [name]: value})
  };

  const onSubmit = () => {
    login(form)(authDispatch);
  }

  const loginFormValid =
    !form.email?.length ||
    !form.password?.length

  return {form, onChange, onSubmit, loginFormValid}

}