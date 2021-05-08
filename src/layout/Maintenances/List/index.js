import React, {useContext, useState} from "react";
import {Button, Modal, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import MaintenanceAddView from "../Add";
import {GlobalContext} from "../../../context/Provider";
import updateMaintenance from "../../../context/actions/maintenances/updateMaintenance";

const MaintenanceListView = ({maintenances: {maintenances, maintenancesError}, vehicle, deleteMaintenance}) => {

  const [maintenanceUpdateOpen, setMaintenanceUpdateOpen] = React.useState(false);
  const [form, setForm] = useState({})
  const {maintenanceDispatch} = useContext(GlobalContext);


  const onChange = (e, {name, value}) => {
    e.preventDefault();
    setForm({...form, [name]: value})
  }

  const formInvalid = !form.description?.length ||
      !form.km ||
      !form.date?.length ||
      !form.price;

  const onSubmit = () => {
    form.vehicle_id = vehicle.id
    updateMaintenance(form)(maintenanceDispatch)
    setMaintenanceUpdateOpen(false);
  }
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
                          trigger={<Button onClick={() => setForm(maintenance)}>Edit</Button>}>
                        <Modal.Header>Update Maintenance</Modal.Header>
                        <Modal.Content>
                          <MaintenanceAddView
                              onChange={onChange}
                              onSubmit={onSubmit}
                              formInvalid={formInvalid}
                              maintenance={maintenance}
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