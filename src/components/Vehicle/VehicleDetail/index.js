import React, {useContext, useEffect} from "react";
import VehicleDetailView from "../../../layout/Vehicles/Detail";
import getVehicleDetail from "../../../context/actions/vehicles/getVehicleDetail";
import {GlobalContext} from "../../../context/Provider";
import {useHistory, useParams} from "react-router-dom";
import {Header} from "../../index";

const VehicleDetailContainer = () => {
  const {vehiclesState, vehiclesDispatch} = useContext(GlobalContext);
  const history = useHistory();
  const {id} = useParams();
  const {vehicle} = vehiclesState;

  useEffect(() => {
    if (id) {
      getVehicleDetail(history, id)(vehiclesDispatch)
    }
  }, []);
  return (
      <div>
        <Header/>
        <VehicleDetailView vehicle={vehicle}/>
      </div>

  )
}

export default VehicleDetailContainer;