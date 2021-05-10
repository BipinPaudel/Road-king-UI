import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext} from "../../../context/Provider";
import {useHistory} from "react-router-dom";
import createVehicle from "../../../context/actions/vehicles/createVehicle";
import getCategories from "../../../context/actions/categories/getCategories";

export default () => {
  const {vehiclesState, vehiclesDispatch, categoryState, categoryDispatch} = useContext(GlobalContext);
  const [form, setForm] = useState({})
  const [tempFile, setTempFile] = useState(null)

  const onChange = (e, {name, value}) => {
    setForm({...form, [name]: value})
  }

  const history = useHistory();
  const {addVehicle: {loading, vehicle}} = vehiclesState;
  const {listCategories: {categories}} = categoryState;

  useEffect( ()=> {
    getCategories(history)(categoryDispatch);
  },[])

  const formInvalid =
      !form.title?.length ||
      !form.make_year?.length ||
      !form.buy_date?.length ||
      !form.price?.length ||
      !form.description?.length

  const onImageChange = (e) => {
    e.persist();
    const fileUrl = e.target.files[0];
    setForm({...form,images:[fileUrl]});
    if (fileUrl)
      setTempFile(URL.createObjectURL(fileUrl));
  }

  const onSubmit = () => {
    createVehicle(form, history)(vehiclesDispatch)
  }

  return {loading, onChange, formInvalid, onImageChange, onSubmit, form, tempFile, categories, isCreate:true}
}