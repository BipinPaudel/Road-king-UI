import React, {useState, useContext, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {GlobalContext} from "../../context/Provider";
import {login} from "../../context/actions/auth/login";
import {CLEAR_ALERTS} from "../../constants/actions";


export default () => {
  const [form, setForm] = useState({});
  const history = useHistory();
  const {authDispatch, authState: {auth: {errors,loginInfo, loading}}} = useContext(GlobalContext);

  useEffect(() => {
    if (loginInfo){
      history.push('/vehicles')
    }
  },[loginInfo])

  useEffect(() => {
    if (errors && errors.length > 0){
      setTimeout(()=> {
        authDispatch({type: CLEAR_ALERTS})
      }, 3000)
    }
  }, [errors]);

  const onChange = (e, {name, value}) => {
    setForm({...form, [name]: value})
  };

  const onSubmit = () => {
    login(form)(authDispatch);
  }

  const loginFormValid =
      !form.email?.length ||
      !form.password?.length

  return {form, onChange, onSubmit, loginFormValid, errors, loading}

}