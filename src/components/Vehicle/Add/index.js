import React, {useState, useContext, useEffect} from "react";
import {GlobalContext} from "../../../context/Provider";
import CreateVehicle from "../../../layout/Vehicles/Add";
import {Header} from "../../index";
import createVehicle from "../../../context/actions/vehicles/createVehicle";
import {useHistory} from "react-router-dom";

const CreateVehicleContainer = () => {
  const {vehiclesState, vehiclesDispatch} = useContext(GlobalContext);
  const [form, setForm] = useState({})
  const [tempFile, setTempFile] = useState(null)

  const onChange = (e, {name, value}) => {
    setForm({...form, [name]: value})
  }

  const history = useHistory();
  const {addVehicle: {loading, vehicle}} = vehiclesState;

  useEffect(()=>{
    console.log('this is loading '+loading)
    if (vehicle){
      history.push('/vehicles')
    }
  },[vehicle])

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
    form.category_id = 3
    console.log('form form ',form);
    createVehicle(form)(vehiclesDispatch)
  }

  return (
      <div>
        <Header/>
        <CreateVehicle
            loading={loading}
            onChange={onChange}
            formInvalid={formInvalid}
            onImageChange={onImageChange}
            onSubmit={onSubmit}
            form={form}
            tempFile={tempFile}/>
      </div>
  )
}

export default CreateVehicleContainer;