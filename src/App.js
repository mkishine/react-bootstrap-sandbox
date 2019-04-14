import React, {Component} from 'react';
import './App.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';


import rowData from './olympicWinners';

const gridClassName = "ag-theme-balham";


const changeHandler = (fn, name) => (event) => fn(name, event);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {
                    headerName: "Athlete",
                    field: "athlete",
                    minWidth: 150
                },
                {
                    headerName: "Age",
                    field: "age",
                    minWidth: 90
                },
                {
                    headerName: "Country",
                    field: "country"
                },
                {
                    headerName: "Year",
                    field: "year"
                },
                {
                    headerName: "Date",
                    field: "date"
                },
                {
                    headerName: "Sport",
                    field: "sport"
                },
                {
                    headerName: "Gold",
                    field: "gold"
                },
                {
                    headerName: "Silver",
                    field: "silver"
                },
                {
                    headerName: "Bronze",
                    field: "bronze"
                },
                {
                    headerName: "Total",
                    field: "total"
                }
            ],
            rowData: rowData,
            portfolio: 'ISHT7-10',
            date: '3-Jan-2019'
        };
        this.onFormControlChange = this.onFormControlChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onFormControlChange(id, event) {
        console.log(id + " " + event.target.value);
        this.setState({[id]: event.target.value})
    }

    onSubmit(event) {
        const {portfolio, date} = this.state;
        console.log(portfolio + " " + date);
        event.preventDefault();
    }

    render() {
        return (
            <div style={{width: "100%", height: "100%"}}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline onSubmit={this.onSubmit}>
                            <FormControl type="text"
                                         placeholder="Portfolio"
                                         className="mr-sm-2"
                                         value={this.state.portfolio}
                                         onChange={changeHandler(this.onFormControlChange, 'portfolio')}
                            />
                            <FormControl type="text"
                                         placeholder="Date"
                                         className="mr-sm-2"
                                         value={this.state.date}
                                         onChange={changeHandler(this.onFormControlChange, 'date')}
                            />
                            <Button variant="outline-success" type="submit">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div className={gridClassName} style={{height: '100%', width: '100%'}}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            </div>
        );
    }
}

export default App;