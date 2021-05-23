import React from "react";
import {Message} from 'semantic-ui-react';

const MyAlert = ({type, alerts}) => {
  if (alerts && alerts.length > 0) {
    return (
        <div className={"vehicle_alerts"}>
          <Message.List>
            <Message negative>
              {
                alerts.map((alert) => {
                  return (
                      <div key={alert}>
                        <span className={type}>{alert}</span>
                      </div>
                  )
                })
              }
            </Message>
          </Message.List>
        </div>)
  }
}

export default MyAlert;