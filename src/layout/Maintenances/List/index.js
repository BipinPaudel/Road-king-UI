import React, {useContext, useEffect} from "react";
import {Button, Container, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
const MaintenanceListView = ({maintenances:{maintenances,maintenancesError},vehicle,deleteMaintenance}) => {
  console.log('list of vehicle ',vehicle);

  return (
      <div>
        {
          vehicle && (
              <Link to={`/vehicles/${vehicle.id}`} className="link">
                {vehicle.title}
              </Link>
          )
        }

        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Service date</Table.HeaderCell>
              <Table.HeaderCell>Km</Table.HeaderCell>
              <Table.HeaderCell>Cost</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {maintenances.length>0 && maintenances.map(maintenance => {
              return (
                  <Table.Row key={maintenance.id}>
                    <Table.Cell>{maintenance.date}</Table.Cell>
                    <Table.Cell>{maintenance.km}</Table.Cell>
                    <Table.Cell>{maintenance.price}</Table.Cell>
                    <Table.Cell>{maintenance.description}</Table.Cell>
                    <Table.Cell>
                      <Button negative
                        onClick={()=>deleteMaintenance(maintenance.id)}
                      >Delete</Button>
                    </Table.Cell>
                  </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>
  )
}

export default MaintenanceListView;