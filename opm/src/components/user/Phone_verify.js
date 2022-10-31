import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import '../../components/user/Phone_verify.css'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function Phone_verify() {
  return (
    <div>
        <Container className='loginbody'>
        <Form className='login_form'>
        <Form.Label>Enter Phone Number</Form.Label>

      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className=''><p className='dropdown'>Hospital</p></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Enter city"
        
        >
          {/* {city.map((obj)=> */}
          <MenuItem value=''></MenuItem>
          {/* )} */}
        </Select>
      </FormControl><br/>
    </Box><br/>




    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"><p className='dropdown'>Doctor</p></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Enter city"
        
        >
          {/* {city.map((obj)=> */}
          <MenuItem value=''></MenuItem>
          {/* )} */}
        </Select>
      </FormControl><br/>
    </Box><br/>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Phone Number" />
      </Form.Group><br/>

    
      <Button variant="primary" type="submit">
        Submit
      </Button><br/>

    </Form>

        </Container>


    </div>
  )
}

export default Phone_verify