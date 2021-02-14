import React, {useEffect, useContext, useReducer} from 'react'
import reducer from './reducers/vehicle_reducer'
import axiosInstance from "../helpers/axiosInstance";
import {
  GET_VEHICLES_BEGIN,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_ERROR
} from '../constants/actions';

const initialState = {
  vehicles: [],
  single_vehicle: {},
  vehicles_error: false,
}

const VehicleContext = React.createContext({})

export const VehicleProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchVehicles = async (url) => {
    try {
      const response = await axiosInstance().get(url);
      const vehicles = response.data.data;
      dispatch({type: GET_VEHICLES_SUCCESS, payload: vehicles })
    } catch (error){
      dispatch({type:GET_VEHICLES_ERROR})
    }
  }

  useEffect(()=> {
    console.log('vehicle also running');
    fetchVehicles('/api/v1/vehicles')
  }, [])

  return (
      <VehicleContext.Provider value={{...state, fetchVehicles}}>
        {children}
      </VehicleContext.Provider>
  )
}

export const useVehicleContext = () => {
  return useContext(VehicleContext)
}
