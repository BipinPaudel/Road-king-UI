import React from "react";
import {Button, Modal, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import MaintenanceAddView from "../Add";

const MaintenanceListView = ({
                               maintenances: {maintenances, maintenancesError},
                               vehicle,
                               deleteMaintenance,
                               updateOps: {
                                 setForm: updateSetForm,
                                 onChange: updateOnChange,
                                 formInvalid: updateFormInvalid,
                                 onSubmit: updateOnSubmit,
                                 maintenanceUpdateOpen,
                                 setMaintenanceUpdateOpen,
                                 loading: updateLoading,
                                 errors: updateErrors
                               }
                             }) => {

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
            {maintenances?.length > 0 && maintenances.map(maintenance => {
              return (
                  <Table.Row key={maintenance.id}>
                    <Table.Cell>{maintenance.date}</Table.Cell>
                    <Table.Cell>{maintenance.km}</Table.Cell>
                    <Table.Cell>{maintenance.price}</Table.Cell>
                    <Table.Cell>{maintenance.description}</Table.Cell>
                    <Table.Cell>
                      <Button negative
                              onClick={() => deleteMaintenance(maintenance.id)}>
                        Delete
                      </Button>

                      <Modal
                          basic
                          onClose={() => setMaintenanceUpdateOpen(false)}
                          onOpen={() => setMaintenanceUpdateOpen(true)}
                          open={maintenanceUpdateOpen}
                          size='small'
                          trigger={<Button onClick={() => updateSetForm(maintenance)}>Edit</Button>}>
                        <Modal.Header>Update Maintenance</Modal.Header>
                        <Modal.Content>
                          <MaintenanceAddView
                              onChange={updateOnChange}
                              onSubmit={updateOnSubmit}
                              formInvalid={updateFormInvalid}
                              maintenance={maintenance}
                              loading={updateLoading}
                              errors={updateErrors}
                          />
                        </Modal.Content>
                      </Modal>
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