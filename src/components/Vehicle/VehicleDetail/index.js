import React, {useContext, useEffect} from "react";
import VehicleDetailView from "../../../layout/Vehicles/Detail";
import getVehicleDetail from "../../../context/actions/vehicles/getVehicleDetail";
import {GlobalContext} from "../../../context/Provider";
import {useHistory, useParams} from "react-router-dom";
import {Header} from "../../index";
import deleteVehicle from "../../../context/actions/vehicles/deleteVehicle"

const VehicleDetailContainer = () => {
  const {vehiclesState, vehiclesDispatch} = useContext(GlobalContext);
  const history = useHistory();
  const {id} = useParams();
  const {vehicle, deleteVehicle: {loading:deleteVehicleLoading}} = vehiclesState;

  const deleteSingleVehicle = (id) => {
    if (window.confirm('Are you sure you want to delete this data?')){
      deleteVehicle(id, vehicle.images, history)(vehiclesDispatch);
    }
  }
  useEffect(() => {
    if (id) {
      getVehicleDetail(history, id)(vehiclesDispatch)
    }
  }, []);

  return (
      <div>
        <Header/>
        <VehicleDetailView vehicle={vehicle} deleteVehicle={deleteSingleVehicle}/>
      </div>

  )
}

export default VehicleDetailContainer;