import React from 'react';
import VehicleGridView from "./GridView";

const VehiclesListUI = ({state: {vehicles: {vehicles}}}) => {
  console.log("vehicles list ui ",vehicles);
  return (
      <div>
        <VehicleGridView vehicles={vehicles}/>
      </div>
  )
}

export default VehiclesListUI;