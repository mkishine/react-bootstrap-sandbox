import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import rowData from './olympicWinners';

const gridClassName = "ag-theme-balham";

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
            rowData: rowData
        };
    }

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <div
                    className={gridClassName}
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                >
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