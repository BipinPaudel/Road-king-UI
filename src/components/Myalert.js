import React from "react";
import {Message} from 'semantic-ui-react';
import {useAuthContext} from "../context/auth_context";

const MyAlert = ({type}) => {
  const {isAlert, alerts, clearAlerts} = useAuthContext();

  setTimeout(()=>{
    clearAlerts();
  }, 3000);

  if (isAlert && alerts && alerts.length > 0) {
    return (
        <div>
          <Message.List>
            {
              alerts.map(alert => {
                return (
                    <Message.Item key={alert}>
                      <span className={type}>{alert}</span>
                    </Message.Item>
                )
              })
            }
          </Message.List>
        </div>)

  }
}

export default MyAlert;