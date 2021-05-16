import React from 'react';
import {
  Grid,
  Card,
  Form,
  Button,
} from "semantic-ui-react";

const NotificationAddView = ({onChange, onSubmit, formInvalid, notification}) => {
  console.log('from add view '+ formInvalid)
  return (
      <Grid centered>
        <Grid.Column className="form-column">
          <Card fluid>
            <Card.Content>
              <Form unstackable>
                <Form.Group widths='equal'>
                  <Form.Input
                      fluid
                      label='Number of kms to notify'
                      placeholder='Number of kms to notify'
                      name='km'
                      onChange={onChange}
                      defaultValue={notification?.km}

                  />
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input
                      fluid
                      label='Number of days to notify'
                      placeholder='Number of days to notify'
                      name='day'
                      type='number'
                      defaultValue={notification?.day}
                      onChange={onChange}
                  />
                </Form.Group>
                <Button
                    disabled={formInvalid}
                    primary type='submit'
                    onClick={onSubmit}
                >
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
  )
}

export default NotificationAddView;