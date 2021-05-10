import React from "react";
import CreateVehicle from "../../../layout/Vehicles/Add";
import {Header} from "../../index";
import useForm from "./useForm";

const UpdateVehicleContainer = () => {
  return (
      <div>
        <Header/>
        <CreateVehicle form={useForm()}/>
      </div>
  )
}

export default UpdateVehicleContainer;