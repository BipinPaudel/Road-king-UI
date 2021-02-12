import React, {useContext, useEffect} from 'react'
import MaintenanceListView from "../../layout/Maintenances/List";
import {Header} from "../index";
import {GlobalContext} from "../../context/Provider";
import {useHistory, useParams} from "react-router-dom";
import getMaintenances from "../../context/actions/maintenances/getMaintenances";
import getVehicleDetail from "../../context/actions/vehicles/getVehicleDetail";
import AddMaintenanceContainer from "./Add";
import {Button, Container, Modal} from "semantic-ui-react";

const MaintenancesContainer = () => {
  const {maintenanceState, maintenanceDispatch} = useContext(GlobalContext);
  const {vehiclesState, vehiclesDispatch} = useContext(GlobalContext);
  const history = useHistory();
  const {id} = useParams();
  const {vehicle} = vehiclesState;
  console.log('don maintenance state' ,maintenanceState);
  const {maintenances} = maintenanceState;


  useEffect(() => {
    if (id) {
      getMaintenances(history, id)(maintenanceDispatch);
      getVehicleDetail(history, id)(vehiclesDispatch);
    }
  }, []);

  console.log('from maintenance container', vehicle)

  return (
      <div>
        <Header/>
        <Container>
          <h1>Maintenance list</h1>

          <AddMaintenanceContainer vehicle={vehicle}/>

          <MaintenanceListView maintenances={maintenances} vehicle={vehicle}/>
        </Container>
      </div>

  )
}

export default MaintenancesContainer;