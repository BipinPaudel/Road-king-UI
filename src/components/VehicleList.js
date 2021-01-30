import React from 'react';
import VehicleGridView from "./VehicleGridView";
import {useFilterContext} from "../context/filter_context";

const VehicleList = () => {
  const {filtered_vehicles: vehicles} = useFilterContext();

  if (vehicles && vehicles.length < 1){
    return (
        <h5 style={{textTransform: 'none'}}>
          sorry no vehicles available.
        </h5>
    )
  }

  return <VehicleGridView vehicles={vehicles}/>
}

export default VehicleList