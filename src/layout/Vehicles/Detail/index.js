import {Button, Container, Grid, Image} from "semantic-ui-react";
import {extractImagesFromVehicle} from "../../../utils/vehicleUtils";
import "./index.css";
import {Link} from "react-router-dom";
const VehicleDetailView = ({vehicle, deleteVehicle}) => {
  return (
      <div>
        <Container>
          {!vehicle && (
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={8}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
          )}

          {
            vehicle && (
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <Image className="mainImage" src={extractImagesFromVehicle(vehicle)[0]} />
                    </Grid.Column>

                    <Grid.Column width={8}>
                      <div className="row">
                        <div>
                          <h1>{vehicle.title}</h1>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <h3>{vehicle.category_title}</h3>
                        </div>
                      </div>

                      <div className="row">
                        <b>Price: </b> {vehicle.price}
                      </div>

                      <div className="row">
                        <b>Buy date: </b> {vehicle.buy_date}
                      </div>

                      <div className="row">
                        <b>Make Year: </b> {vehicle.make_year}
                      </div>

                      <div className="row">
                        <p>
                          {vehicle.description}
                        </p>
                      </div>
                      <div className="row">

                        <Link to={`/maintenances/vehicles/${vehicle.id}`} className="link">
                          <Button basic color='red'>
                            Maintenance
                          </Button>
                        </Link>

                        <Link to={`/vehicles/update/${vehicle.id}`} className="link">
                          <Button primary>
                            Edit Vehicle
                          </Button>
                        </Link>

                        <Link to={`#`} className="link">
                          <Button basic color='red' onClick={() => deleteVehicle(vehicle.id)}>
                            Delete Vehicle
                          </Button>
                        </Link>
                      </div>

                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <h1>Notify me</h1>
                  </Grid.Row>
                  <Grid.Row>

                  </Grid.Row>
                </Grid>
            )
          }
        </Container>
      </div>
  )
}

export default VehicleDetailView;