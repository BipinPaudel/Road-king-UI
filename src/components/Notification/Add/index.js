import React,  {useContext, useEffect,useState}  from 'react'
import {Button, Modal} from "semantic-ui-react";
import NotificationAddView from "../../../layout/Notification/Add";
import {GlobalContext} from "../../../context/Provider";
import createNotification from "../../../context/actions/notiication/createNotification";
import {CLEAR_ALERTS} from "../../../constants/actions";

const AddNotificationContainer = ({vehicle}) => {

  const [notificationAddOpen, setNotificationAddOpen] = React.useState(false);
  const {notificationState: { addNotification: {loading, errors}} ,notificationDispatch} = useContext(GlobalContext);
  const [form, setForm] = useState({});

  const onChange = (e, {name, value}) => {
    e.preventDefault();
    setForm({...form, [name]: value})
  }

  const formInvalid =
      !form['day'] ||
      !form.km?.length

  useEffect(() => {
    if (errors && errors.length > 0){
      setTimeout(()=> {
        notificationDispatch({type: CLEAR_ALERTS})
      }, 3000)
    }
  }, [errors]);

  useEffect(() => {
    if (loading === false && errors.length === 0){
      setNotificationAddOpen(false);
    }
  }, [loading])

  const onSubmit = () => {
    form.vehicle_id = vehicle.id
    createNotification(form)(notificationDispatch)
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
            loading={loading}
            errors={errors}
            />
        </Modal.Content>
      </Modal>
  )
}
export default AddNotificationContainer;