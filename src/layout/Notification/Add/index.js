import React from 'react';
import {
  Grid,
  Card,
  Form,
  Button,
} from "semantic-ui-react";
import MyAlert from "../../../components/Myalert";

const NotificationAddView = ({onChange, onSubmit, formInvalid, notification, errors, loading}) => {
  return (
      <Grid centered>
        <Grid.Column className="form-column">
          <Card fluid>
            <Card.Content>
              <Form unstackable>
                {
                  errors && errors.length > 0 && <MyAlert alerts={errors} type={'invalid'}/>
                }
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
                    loading={loading}
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