import React from 'react';
import {Table, Button, Container} from 'semantic-ui-react';
import AddNotificationContainer from "../../../components/Notification/Add";
import UpdateNotificationContainer from "../../../components/Notification/Udpate";

const NotificationListView = ({vehicle, notification, deleteNotification}) => {
  return (
      <div>
        <Container>
          <h1>Notification Setting</h1>
        {
          notification && notification.length === 0 && (
            <AddNotificationContainer vehicle={vehicle}/>
          )
        }
        {
          notification && notification?.length > 0 && (

              <Table celled padded>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>KM</Table.HeaderCell>
                    <Table.HeaderCell>Day</Table.HeaderCell>
                    <Table.HeaderCell>Created At</Table.HeaderCell>
                    <Table.HeaderCell>Updated At</Table.HeaderCell>
                    <Table.HeaderCell> Action </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {notification?.length > 0 && notification.map(noti => {
                    return (
                        <Table.Row key={noti.id}>
                          <Table.Cell>{noti.km}</Table.Cell>
                          <Table.Cell>{noti.day}</Table.Cell>
                          <Table.Cell>{noti.created_at}</Table.Cell>
                          <Table.Cell>{noti.updated_at}</Table.Cell>
                          <Table.Cell>
                            <Button negative
                                    onClick={() => deleteNotification(noti.id)}>
                              Delete
                            </Button>
                            <UpdateNotificationContainer
                                notification={noti} vehicle={vehicle}/>
                          </Table.Cell>
                        </Table.Row>
                    )
                  })}
                </Table.Body>
              </Table>
          )
        }
        </Container>
      </div>

  )
}

export default NotificationListView;