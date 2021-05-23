import React, {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../../context/Provider";
import updateMaintenance from "../../../context/actions/maintenances/updateMaintenance";
import {CLEAR_ALERTS} from "../../../constants/actions";

export default ({vehicle}) => {
  const [form, setForm] = useState({})
  const {maintenanceState: {updateMaintenance: {loading, errors}}, maintenanceDispatch} = useContext(GlobalContext);
  const [maintenanceUpdateOpen, setMaintenanceUpdateOpen] = React.useState(false);

  const onChange = (e, {name, value}) => {
    e.preventDefault();
    setForm({...form, [name]: value})
  }

  const formInvalid = !form.description?.length ||
      !form.km ||
      !form.date?.length ||
      !form.price;

  useEffect(() => {
    if (errors && errors.length > 0){
      setTimeout(()=> {
        maintenanceDispatch({type: CLEAR_ALERTS})
      }, 3000)
    }
  }, [errors]);

  useEffect(() => {
    if (loading === false && errors.length === 0){
      setMaintenanceUpdateOpen(false);
    }
  }, [loading])

  const onSubmit = () => {
    form.vehicle_id = vehicle.id
    updateMaintenance(form)(maintenanceDispatch)
  }

  return {setForm, loading,errors, onChange, formInvalid, onSubmit, maintenanceUpdateOpen, setMaintenanceUpdateOpen}
}