import {
  LOAD_VEHICLES,
  FILTER_VEHICLES, UPDATE_FILTERS
} from '../../constants/actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_VEHICLES){
    return {
      ...state,
      all_vehicles: [...action.payload],
      filtered_vehicles: [...action.payload],
      filters: {
        ...state.filters,
      }
    }
  }
  if (action.type === UPDATE_FILTERS){
    const {name, value} = action.payload;
    console.log('there there')
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value
      }
    }
  }
  if (action.type === FILTER_VEHICLES){
    let {all_vehicles} = state
    const {text} = state.filters
    let tempVehicles = [...all_vehicles]
    if (text) {

      tempVehicles = tempVehicles.filter((v) => {
        return v.description.toLowerCase().startsWith(text);
      })
    }
    return { ...state, filtered_vehicles: tempVehicles}
  }
}

export default filter_reducer;