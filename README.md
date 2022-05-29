# CRUD_REACT

This project is CRUD (Create, Read, Update, Delete) application created using React JS.

## Description
### Fields in the UI 
- Layout (Dropdown Menu)
- Name (Char input)
- Capacity (Char Input)
- Status (Checkbox)
- Image (File Upload)

You can enter input data through UI and on clicking Create Table button those data will be added to the table where you can also update and delete the data using buttons.<br/>
Data will also be simultaneously added to db.json file through which API is generated using JSON Server. Here custom API is generated because there were no readily available data on the internet to exactly satisfy the above mentioned fields (layout, name, capacity, status, image). 

## To run the project

Firstly, in the project directory, you can run:

### `json-server --watch db.json --port 3333`

Open [http://localhost:3333](http://localhost:3333) to view it in your browser.
Here port number 3333 is used for API because port no. 3000 is used by our react app. Any of the available port number can be used. Keep this running throughout the app runtime to dynamically update data.

Secondly, using another terminal in the project directory, you can run:

### `npm start`

_Note: Donot stop above API from running while running 'npm start'; Use other terminal for this_

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Demo
### To see the demo of project on youtube
[Click Here](https://www.youtube.com/watch?v=GVLalr61oWg)
