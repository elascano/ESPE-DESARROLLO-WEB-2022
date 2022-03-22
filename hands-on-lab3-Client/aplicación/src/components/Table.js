import React, { useState } from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import '../index.css'

const TableCountries = (props) => {

    const countries = props.countries

    console.log(countries)
    const columns = [
        { field: 'country', headerName: 'Country', width: 200 },
        { field: 'domains', headerName: 'Domain', width: 200 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'webPages', headerName: 'Web page', width: 200 },
        { field: 'alphaTwoCode', headerName: 'Code', width: 200 }
        
    ]
    
    return (
        <Box
            sx={{
                width: '70%',
                height: '82vh',
                marginLeft:'auto',
                marginRight:'auto',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                paddingLeft:'20px',
                paddingRight:'20px',
                background: '#fff', 
                borderRadius: '15px',
                boxShadow: '1px 1px 20px #333'
            }}
        >

            <h1>Lista de Universidades</h1><br/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        countries.map(item => (
                            {
                                id: Math.random() * (100000 - 1) + 1,
                                country: item.country,
                                domains: item.domains,
                                name: item.name,
                                webPages: item.web_pages,
                                alphaTwoCode: item.alpha_two_code

                            }
                        )) 
                    }
                    
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </Box>
    );
}
export default TableCountries