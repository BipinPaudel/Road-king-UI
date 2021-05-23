import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from "../../../context/Provider";
import {Button, Modal} from "semantic-ui-react";
import NotificationAddView from "../../../layout/Notification/Add";
import updateNotification from "../../../context/actions/notiication/updateNotification";
import {CLEAR_ALERTS} from "../../../constants/actions";


const UpdateNotificationContainer = ({notification, vehicle}) => {
  const [notificationUpdateOpen, setNotificationUpdateOpen] = React.useState(false);
  const {notificationState:{updateNotification: {errors, loading}},notificationDispatch} = useContext(GlobalContext);
  const [form, setForm] = useState({})

  const onChange = (e, {name, value}) => {
    e.preventDefault();
    console.log('updated form '+ JSON.stringify(form) + " : : : : " + form['day'])
    setForm({...form, [name]: value})
  }

  const formInvalid =
      !form['day'] ||
      !form.km

  useEffect(() => {
    if (errors && errors.length > 0){
      setTimeout(()=> {
        notificationDispatch({type: CLEAR_ALERTS})
      }, 3000)
    }
  }, [errors]);

  useEffect(() => {
    if (loading === false && errors.length === 0){
      setNotificationUpdateOpen(false);
    }
  }, [loading])

  const onSubmit = () => {
    updateNotification(form)(notificationDispatch);
    // setNotificationUpdateOpen(false);
  }

  return (
      <Modal
        basic
        onClose={() => setNotificationUpdateOpen(false)}
        onOpen={() => setNotificationUpdateOpen(true)}
        open={notificationUpdateOpen}
        size='small'
        trigger={<Button onClick={() => {
          setForm(notification);
          console.log('inside click '+!form.km?.length);
        } }>Update Notification</Button>}
      >
        <Modal.Header>Notification</Modal.Header>
        <Modal.Content>
          <NotificationAddView
            onChange={onChange}
            onSubmit={onSubmit}
            formInvalid={formInvalid}
            notification={notification}
            errors={errors}
            loading={loading}
          />
        </Modal.Content>

      </Modal>
  )
}

export default UpdateNotificationContainer;