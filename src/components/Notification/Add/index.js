import React,  {useContext, useEffect,useState}  from 'react'
import {Button, Modal} from "semantic-ui-react";
import NotificationAddView from "../../../layout/Notification/Add";
import {GlobalContext} from "../../../context/Provider";
import createNotification from "../../../context/actions/notiication/createNotification";

const AddNotificationContainer = ({vehicle}) => {

  const [notificationAddOpen, setNotificationAddOpen] = React.useState(false);
  const {notificationDispatch} = useContext(GlobalContext);
  const [form, setForm] = useState({});

  const onChange = (e, {name, value}) => {
    console.log(form['day'])
    setForm({...form, [name]: value})
  }

  const formInvalid =
      !form['day'] ||
      !form.km?.length

  const onSubmit = () => {
    form.vehicle_id = vehicle.id
    createNotification(form)(notificationDispatch)
    setNotificationAddOpen(false);
  }
  return (
      <Modal
        basic
        onClose={() => setNotificationAddOpen(false)}
        onOpen={() => setNotificationAddOpen(true)}
        open={notificationAddOpen}
        size='small'
        trigger={<Button> Add notification </Button>}>
        <Modal.Header> Notification</Modal.Header>
        <Modal.Content>
          <NotificationAddView
            onChange={onChange}
            onSubmit={onSubmit}
            formInvalid={formInvalid}
            />
        </Modal.Content>
      </Modal>
  )
}
export default AddNotificationContainer;