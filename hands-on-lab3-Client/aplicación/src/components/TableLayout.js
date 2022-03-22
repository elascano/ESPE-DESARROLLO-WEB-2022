import Table from './Table'
import FormCountry from './FormCountry'
import {getCountry} from '../services/countryAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';

const TableLayout = () => {

    const [formCountry, setformCountry] = useState({
        country: ""
    })

    const [countries, setCountries] = useState([])
    console.log(formCountry.country)
    useEffect(() => {
        async function loadCountries() {
            const response = await getCountry(formCountry.country)

            if (response.status === 200) {
                setCountries(response.data)
            }
        }

        loadCountries()
        
    }, [formCountry])


    return (
        <>
            <Box>
                <img src='../public/logo.png'></img>
            <br/><br/> <br/><br/>
                <FormCountry formCountry={formCountry} setformCountry={setformCountry} />
                <br/><br/>
                <Table countries={countries} />
            </Box>
        
        </>
    )
}
export default TableLayout