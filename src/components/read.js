import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Read() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3333/data`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    const setData = (data) => {
        let { layout, mName, capacity, checkbox, image, id } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Layout', layout);
        localStorage.setItem('Name', mName);
        localStorage.setItem('Capacity', capacity);
        localStorage.setItem('Status', checkbox);
        localStorage.setItem('Image', image);
    }
    const getData = () => {
        axios.get(`http://localhost:3333/data`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    const onDelete = (id) => {
        axios.delete(`http://localhost:3333/data/${id}`)
            .then(() => {
                getData();
            })
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Layout</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Capacity</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.layout}</Table.Cell>
                                <Table.Cell>{data.mName}</Table.Cell>
                                <Table.Cell>{data.capacity}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Table.Cell>
                                    <img id="table-img" src={data.image} alt="no_image_preview" />
                                </Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <Link to='/'>
                <Button id='home-btn' type='submit'>Back to Home</Button>
            </Link>
        </div>
    )
}