import React from 'react';
import {
  Grid,
  Card,
  Form,
  Button,
} from "semantic-ui-react";
import MyAlert from "../../../components/Myalert";

const MaintenanceAddView = ({onChange, formInvalid, onSubmit, maintenance, loading, errors}) => {
  return (
      <div>
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
      </div>
  )
}

export default MaintenanceAddView;