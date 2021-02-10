import React from "react";
import {Message} from 'semantic-ui-react';

const MyAlert = ({type, alerts}) => {


  setTimeout(()=>{
  }, 3000);

  if (alerts && alerts.length > 0) {
    return (
        <div>
          <Message.List>
            {
              alerts.map(alert => {
                return (
                    <Message key={alert} negative>
                      <span className={type}>{alert}</span>
                    </Message>
                )
              })
            }
          </Message.List>
        </div>)

  }
}

export default MyAlert;