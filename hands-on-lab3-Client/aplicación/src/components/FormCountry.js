import React, {useState} from 'react';
import '../App.css';
import '../index.css';
import {Box, TextField, Button} from "@mui/material"

const FormCountry = (props) => {

    const {formCountry, setformCountry} = props

    const handleChange = (event) => {
        const { name, value } = event.target
        setformCountry({ ...formCountry, [name]: value})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    
    return (
        
        <form>

            <Box 
                sx={{
                    width: '30%',
                    height: '90%',
                    marginLeft:'auto',
                    marginRight:'auto',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingLeft:'20px',
                    paddingRight:'20px',
                    background: '#fff',  /* fallback for old browsers */
                    borderRadius: '15px',
                    boxShadow: '1px 1px 20px #333'
                }}
            >
                <br/>
        

                {/* Country */}
                <TextField fullWidth 
                    name='country' 
                    id="country" 
                    value={formCountry.country}
                    onChange={handleChange}
                    placeholder="Country" 
                    label="Country" 
                />
                <br/>
            </Box>
            
        </form>
            
    );
    
};
export default FormCountry;