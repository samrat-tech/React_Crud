import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Container, Grid } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Update() {

    const [layout, setLayout] = useState('');
    const [mName, setName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [image, setImage] = useState([]);
    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setLayout(localStorage.getItem('Layout'));
        setName(localStorage.getItem('Name'));
        setCapacity(localStorage.getItem('Capacity'));
        setCheckbox(localStorage.getItem('Status'))
        setImage(localStorage.getItem('Image'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:3333/data/${id}`, {
            layout,
            mName,
            capacity,
            checkbox,
            image,
        })

    }

    return (
        <Container>
            <div className="main">
                <h2>Update Table</h2>
                <hr />
            </div>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={6}>
                        <Form id="main_form">
                            <Form.Field>
                                <div className="inline-field">
                                    <label>Layout</label>
                                    <select id="layout" name="layout" value={layout} onChange={(e) => setLayout(e.target.value)}>
                                        <option>Click here to select layout</option>
                                        <option value="car">Car</option>
                                        <option value="bus">bus</option>
                                        <option value="bike">Bike</option>
                                    </select>
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div className="inline-field">
                                    <label>Name</label>
                                    <input placeholder='Enter Name' value={mName} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div className="inline-field">
                                    <label>Capacity</label>
                                    <input placeholder='Enter number of capacity' value={capacity} onChange={(e) => setCapacity(e.target.value)} />
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div className="inline-field">
                                    <label>Status</label>
                                    <Checkbox checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div className="inline-field">
                                    <label>Image</label>
                                    <input type='file' name='myfile' onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
                                </div>
                            </Form.Field>
                            <Link to='/read'>
                                <Button type='submit' onClick={updateAPIData}>Update</Button>
                            </Link>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )

}