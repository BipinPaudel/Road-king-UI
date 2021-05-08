import React,  {useContext, useEffect,useState}  from 'react'
import {Button, Modal} from "semantic-ui-react";
import MaintenanceAddView from "../../../layout/Maintenances/Add";
import createMaintenance from "../../../context/actions/maintenances/createMaintenance";
import {GlobalContext} from "../../../context/Provider";

const AddMaintenanceContainer = ({vehicle}) => {
  const [maintenanceAddOpen, setMaintenanceAddOpen] = React.useState(false)
  const { maintenanceDispatch} = useContext(GlobalContext);
  const [form, setForm] = useState({})

  const onChange = (e,{name, value}) => {
    setForm({...form, [name]: value})
  }

  const formInvalid =
      !form.description?.length ||
      !form.km?.length ||
      !form.date?.length ||
      !form.price?.length;

  const onSubmit = () => {
    form.vehicle_id = vehicle.id
    createMaintenance(form)(maintenanceDispatch)
    setMaintenanceAddOpen(false);
  }

  return (
        <Modal
            basic
            onClose={() => setMaintenanceAddOpen(false)}
            onOpen={() => setMaintenanceAddOpen(true)}
            open={maintenanceAddOpen}
            size='small'
            trigger={<Button>Add Maintenance</Button>}>
          <Modal.Header>Create Maintenance</Modal.Header>
          <Modal.Content>
            <MaintenanceAddView
            onChange={onChange}
            onSubmit={onSubmit}
            formInvalid={formInvalid}
            />
          </Modal.Content>
        </Modal>
    )
}

export default AddMaintenanceContainer;