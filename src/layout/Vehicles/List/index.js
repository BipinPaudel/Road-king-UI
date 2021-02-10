import React from 'react';
import {Header} from "../../../components";
import VehicleGridView from "./GridView";

const VehiclesListUI = ({state: {vehicles: {vehicles}}}) => {
  console.log("vehicles list ui ",vehicles);
  return (
      <div>
        <Header/>
        <VehicleGridView vehicles={vehicles}/>
      </div>
  )
}

export default VehiclesListUI;