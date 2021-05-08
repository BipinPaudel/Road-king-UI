import React, {useContext, useEffect} from "react";
import {GlobalContext} from "../../../context/Provider";
import {Link, useHistory} from "react-router-dom";
import VehiclesListUI from "../../../layout/Vehicles/List";
import getVehicles from "../../../context/actions/vehicles/getVehicles";
import {Button} from "semantic-ui-react";
import {Header} from "../../index";
import './index.css'
const VehiclesContainer = () => {
  const {vehiclesState, vehiclesDispatch} = useContext(GlobalContext);
  const history = useHistory();

  const {
    vehicles: {vehicles}
  } = vehiclesState;

  useEffect(() => {
    getVehicles(history)(vehiclesDispatch);
  }, [])

  return (
      <div>
        <Header/>
        <div className={'vehicles___container'}>
          <Link to="/vehicles/create" className="link">
            <Button basic color='red'>
              Add another vehicle
            </Button>
          </Link>
          <VehiclesListUI state={vehiclesState}/>
        </div>
      </div>
  )
}

export default VehiclesContainer;