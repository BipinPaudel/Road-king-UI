import React from 'react';
import {
  Grid,
  Card,
  Form,
  Button,
} from "semantic-ui-react";

const MaintenanceAddView = ({onChange,formInvalid, onSubmit, maintenance}) => {
  console.log('this is form invalid '+formInvalid)
  return (
      <Grid centered>
        <Grid.Column className="form-column">
          <Card fluid>
            <Card.Content>
              <Form unstackable>
                <Form.Group widths='equal'>
                  <Form.Input
                      fluid
                      label='Description'
                      placeholder='Description'
                      name='description'
                      onChange={onChange}
                      defaultValue={maintenance?.description}

                  />
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input
                      fluid
                      label='Km driven'
                      placeholder='Km driven'
                      name='km'
                      type='number'
                      defaultValue={maintenance?.km}
                      onChange={onChange}
                  />
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input
                      fluid
                      label='Maintenance Date'
                      placeholder='Maintenance Date'
                      name='date'
                      type='date'
                      defaultValue={maintenance?.date}
                      onChange={onChange}
                  />
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input
                      fluid
                      label='Price'
                      placeholder='Maintenance Cost'
                      name='price'
                      type='number'
                      defaultValue={maintenance?.price}
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

export default MaintenanceAddView;