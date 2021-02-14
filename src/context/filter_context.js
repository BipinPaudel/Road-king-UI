import React, { useEffect, useContext, useReducer } from 'react'
import reducer from './reducers/filter_reducer'
import {FILTER_VEHICLES, LOAD_VEHICLES, UPDATE_FILTERS} from "../constants/actions";

const initialState = {
  filtered_vehicles: [],
  all_vehicles: [],
  sort:'price-lowest',
  filters: {
    text: ''
  }
}

const FilterContext = React.createContext();

export const FilterProvider = ({children}) => {
  // const {vehicles} = useVehicleContext();
  const [state, dispatch] = useReducer(reducer, initialState)

  // useEffect(() => {
  //   dispatch({type: LOAD_VEHICLES, payload: vehicles})
  // }, [vehicles])
  //
  // useEffect(()=>{
  //   dispatch({type: FILTER_VEHICLES})
  // }, [vehicles,state.sort,state.filters])

  useEffect(()=>{
    console.log('filter also running');
  },[])

  const updateFilters = (e) => {
    console.log('pdate filter hai',e.target.value)
    let name = e.target.name;
    let value = e.target.value;
    dispatch({type: UPDATE_FILTERS, payload:{name, value}})
  }

  return (
      <FilterContext.Provider value={{...state, updateFilters}}>
        {children}
      </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}