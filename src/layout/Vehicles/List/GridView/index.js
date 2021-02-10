import React from 'react';
import {Image, Grid} from "semantic-ui-react";

const getImage = ({images} ) => {
  console.log('image length', images);
  if (images && JSON.parse(images).length > 0){
    return JSON.parse(images)[0]
  } else {
    return "https://images.unsplash.com/photo-1570733577524-3a047079e80d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
  }
}

const getImageGridArray = (vehicles) => {

  let vehiclesGrid = []
  let vehicleRow= [];
  let vehiclesCopy = [...vehicles];

  while(vehiclesCopy[0]){
    for(let i=0; i<3;i++){
      if (vehiclesCopy[0]){
        vehicleRow.push(vehiclesCopy.shift())
      }
    }
    vehiclesGrid.push(vehicleRow);
    vehicleRow = [];
  }

  console.log('grid ',vehiclesGrid);
  return vehiclesGrid;
}
const VehicleGridView = ({vehicles}) => {
  return (
      <div>
        <Grid columns={3} >

        {
          getImageGridArray(vehicles).map((vehicleRow,rowIdx) => {
            return (
                <Grid.Row key={rowIdx}>
                  {
                    vehicleRow.map((vehicle,id) => {
                      return (
                          <Grid.Column textAlign='center' key={id}>
                            <div>
                              <Image src={getImage(vehicle)} wrapped width={100} height={100}/>
                              <br/>
                              <span>{vehicle.description}</span>
                            </div>

                          </Grid.Column>
                      )
                    })
                  }
                </Grid.Row>
            )
          })
        }
        </Grid>
      </div>
  )}


export default VehicleGridView;