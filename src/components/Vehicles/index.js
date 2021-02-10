import React, {useContext, useEffect} from "react";
import {GlobalContext} from "../../context/Provider";
import {useHistory} from "react-router-dom";
import VehiclesListUI from "../../layout/Vehicles/List";
import getVehicles from "../../context/actions/vehicles/getVehicles";

const VehiclesContainer = () => {
  const {vehiclesState, vehiclesDispatch} = useContext(GlobalContext);
  const history = useHistory();

  const {
    vehicles: {vehicles}
  } = vehiclesState;

  useEffect(()=>{
    if (vehicles.length === 0){
      getVehicles(history)(vehiclesDispatch);
    }
  },[])

  return (
      <VehiclesListUI state={vehiclesState}/>
  )
}

export default VehiclesContainer;