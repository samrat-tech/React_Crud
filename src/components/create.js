import React, { useState } from 'react';
import { Button, Checkbox, Form, Container, Grid } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Create() {

    const [layout, setLayout] = useState('');
    const [mName, setName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [image, setImage] = useState([]);
    const postData = () => {
        axios.post(`http://localhost:3333/data`, {
            layout,
            mName,
            capacity,
            checkbox,
            image
        })

    }

    return (
        <Container>
            <div className="main">
                <h2 id='h2'>Create Table</h2>
                <hr />
            </div>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={6}>
                        <Form id="main_form">
                            <Form.Field>
                                <div id="form-div" className="inline-field">
                                    <label>Layout</label>
                                    <select id="layout" name="layout" onChange={(e) => setLayout(e.target.value)}>
                                        <option>Click here to select layout</option>
                                        <option value="car">Car</option>
                                        <option value="bus">bus</option>
                                        <option value="bike">Bike</option>
                                    </select>
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div id="form-div" className="inline-field">
                                    <label>Name</label>
                                    <input placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div id="form-div" className="inline-field">
                                    <label>Capacity</label>
                                    <input placeholder='Enter number of capacity' onChange={(e) => setCapacity(e.target.value)} />
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div id="form-div" className="inline-field">
                                    <label>Status</label>
                                    <Checkbox onChange={(e) => setCheckbox(!checkbox)} />
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div id="form-div" className="inline-field">
                                    <label>Image</label>
                                    <input type='file' name='myfile' onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
                                </div>
                            </Form.Field>
                            <Link to='/read'>
                                <Button type='submit' id="create-btn" onClick={postData}>Create Table</Button>
                            </Link>
                            <Link to='/'>
                                <Button type='submit' id ='cancel-btn'>Cancel</Button>
                            </Link>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    )

}