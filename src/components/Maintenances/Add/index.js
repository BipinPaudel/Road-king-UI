import React,  {useContext, useEffect,useState}  from 'react'
import {Button, Modal} from "semantic-ui-react";
import MaintenanceAddView from "../../../layout/Maintenances/Add";
import createMaintenance from "../../../context/actions/maintenances/createMaintenance";
import {GlobalContext} from "../../../context/Provider";
import {CLEAR_ALERTS} from "../../../constants/actions";

const AddMaintenanceContainer = ({vehicle}) => {
  const [maintenanceAddOpen, setMaintenanceAddOpen] = React.useState(false)
  const {maintenanceState: {addMaintenance: {loading, errors}}, maintenanceDispatch} = useContext(GlobalContext);
  const [form, setForm] = useState({})

  const onChange = (e,{name, value}) => {
    setForm({...form, [name]: value})
  }

  const formInvalid =
      !form.description?.length ||
      !form.km?.length ||
      !form.date?.length ||
      !form.price?.length;

  useEffect(() => {
    if (errors && errors.length > 0){
      setTimeout(()=> {
        maintenanceDispatch({type: CLEAR_ALERTS})
      }, 3000)
    }
  }, [errors]);

  useEffect(() => {
    if (loading === false && errors.length === 0){
      setMaintenanceAddOpen(false);
    }
  }, [loading])

  const onSubmit = () => {
    form.vehicle_id = vehicle.id
    createMaintenance(form)(maintenanceDispatch)
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
            errors={errors}
            loading={loading}
            />
          </Modal.Content>
        </Modal>
    )
}

export default AddMaintenanceContainer;