import React, {useContext, useState, useEffect} from "react";
import {GlobalContext} from "../../../context/Provider";
import {useHistory, useParams} from "react-router-dom";
import getVehicleDetail from "../../../context/actions/vehicles/getVehicleDetail";
import updateVehicle from "../../../context/actions/vehicles/updateVehicle";
import getCategories from "../../../context/actions/categories/getCategories";

export default () => {
  const {vehiclesState, vehiclesDispatch, categoryState, categoryDispatch} = useContext(GlobalContext);
  const [tempFile, setTempFile] = useState(null)
  const {vehicle, updateVehicle:{loading, vehicle: updatedVehicle}} = vehiclesState;

  const {listCategories: {categories}} = categoryState;
  const [form, setForm] = useState({});


  const onChange = (e, {name, value}) => {
    e.preventDefault();
    setForm({...form, [name]: value})
  }

  const history = useHistory();
  const {id} = useParams();

  useEffect(()=> {
    if (id){
      getVehicleDetail(history, id)(vehiclesDispatch);
      getCategories(history)(categoryDispatch);
    }
  }, []);

  useEffect(()=>{
    if (vehicle){
      setForm(vehicle)
    }
  },[vehicle])

  const formInvalid =
      !form?.title?.length ||
      !form.make_year ||
      !form.buy_date ||
      !form.price ||
      !form?.description?.length

  const onImageChange = (e) => {
    e.persist();
    const fileUrl = e.target.files[0];
    setForm({...form,images:[fileUrl]});
    if (fileUrl)
      setTempFile(URL.createObjectURL(fileUrl));
  }

  const onSubmit = () => {
    updateVehicle(form, id, vehicle.images ,history)(vehiclesDispatch);
  }



  return {loading, onChange, formInvalid, onSubmit, form, categories, vehicle, isUpdate:true, tempFile, onImageChange}
}