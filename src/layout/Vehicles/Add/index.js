import React, {useRef} from 'react';
import {
  Grid,
  Header as SemanticHeader,
  Card,
  Form,
  Button,
  Select,
  Icon,
  Image,
} from "semantic-ui-react";
import './index.css';
import {vehicleYearList} from "../../../utils/vehicleUtils";

const CreateVehicle = ({onChange, onImageChange, tempFile,onSubmit,formInvalid, loading}) => {
  const imagePickRef = useRef(null);
  const chooseImage = () => {
    if (imagePickRef.current) {
      imagePickRef.current.click();
    }
  }

  return (
      <Grid centered>
        <Grid.Column className="form-column">
          <SemanticHeader> Create Vehicle </SemanticHeader>
          <Card fluid>
            <Card.Content>
              <Form unstackable>
                <input onChange={onImageChange} ref={imagePickRef} type="file" hidden/>


                <div className="image-wrapper">
                  {tempFile && <Image className="vehicle-picture" src={tempFile}/>}
                  {
                    !tempFile && (
                        <div onClick={chooseImage} className="vehicle-picture">
                          <span>Choose Picture</span>
                        </div>
                    )
                  }
                </div>
                <Icon name="pencil" onClick={chooseImage}/>

                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    label='Title'
                    placeholder='Title'
                    name='title'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                      fluid
                      label='Category'
                      placeholder='Category'
                      name='category_id'
                      control={Select}
                      options={vehicleYearList()}
                      onChange={onChange}
                  />

                  <Form.Input
                      fluid
                      label='Make year'
                      placeholder='Make year'
                      name='make_year'
                      control={Select}
                      options={vehicleYearList()}
                      onChange={onChange}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                      fluid
                      label='Buy Date'
                      placeholder='Buy Date'
                      name='buy_date'
                      onChange={onChange}
                      type='date'
                  />
                  <Form.Input
                      fluid
                      label='Price'
                      placeholder='Price'
                      name='price'
                      type='number'
                      onChange={onChange}
                  />
                  <Form.Input
                      fluid
                      label='Km Driven'
                      placeholder='Km Driven'
                      name='km_driven'
                      type='number'
                      onChange={onChange}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    label='Description'
                    placeholder='Description'
                    name='description'
                    onChange={onChange}
                    type='text'
                    />
                </Form.Group>
                <Button
                    loading={loading}
                    disabled={formInvalid}
                    primary type="submit"
                    onClick={onSubmit}>
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
  )
}

export default CreateVehicle;