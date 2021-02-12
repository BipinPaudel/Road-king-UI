import React from 'react';
import {Image, Grid, Container} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {extractImagesFromVehicle} from "../../../../utils/vehicleUtils";

const getImageGridArray = (vehicles) => {

  let vehiclesGrid = []
  let vehicleRow = [];
  let vehiclesCopy = [...vehicles];

  while (vehiclesCopy[0]) {
    for (let i = 0; i < 3; i++) {
      if (vehiclesCopy[0]) {
        vehicleRow.push(vehiclesCopy.shift())
      }
    }
    vehiclesGrid.push(vehicleRow);
    vehicleRow = [];
  }
  return vehiclesGrid;
}
const VehicleGridView = ({vehicles}) => {
  return (
      <div>
        <Container>
          <Grid columns={3}>
            {
              getImageGridArray(vehicles).map((vehicleRow, rowIdx) => {
                return (
                    <Grid.Row key={rowIdx}>
                      {
                        vehicleRow.map((vehicle, id) => {
                          return (
                              <Grid.Column textAlign='center' key={id}>
                                <Link to={`/vehicles/${vehicle.id}`} className="link">
                                  <div>
                                    <Image src={extractImagesFromVehicle(vehicle)[0]} wrapped width={100} height={100}/>
                                    <br/>
                                    <span>{vehicle.title}</span>
                                  </div>
                                </Link>
                              </Grid.Column>
                          )
                        })
                      }
                    </Grid.Row>
                )
              })
            }
          </Grid>
        </Container>
      </div>
  )
}


export default VehicleGridView;