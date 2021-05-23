import React, {useState, useContext, useEffect}  from 'react';
import {GlobalContext} from "../../context/Provider";
import {useHistory} from "react-router";
import {register} from "../../context/actions/auth/register";
import authInitialState from "../../context/initialstates/authInitialState";
import {CLEAR_ALERTS} from "../../constants/actions";


export default () => {
  const [form, setForm] = useState({});
  const history = useHistory();
  const {authDispatch, authState:{auth : {loginInfo, errors}}} = useContext(GlobalContext);

  const onChange=(e, {name, value}) => {
    setForm({...form, [name]:value})
  };

  useEffect(()=> {
    if (errors && errors.length > 0){
      setTimeout(()=>{
        authDispatch({type: CLEAR_ALERTS})
      }, 3000)
    }
  }, [errors])

  const registerFormValid =
      !form.email?.length ||
      !form.password?.length ||
      !form.confirmPassword?.length ||
      !(form.confirmPassword === form.password)

  const onSubmit = () => {
    register(form, history)(authDispatch);
  }

  return {form, onChange,registerFormValid,onSubmit, errors}
}