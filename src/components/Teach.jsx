import { Button, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Teach = () => {
    var [teachers, setteachers] = useState([])
    useEffect(() => {
      axios.get(" http://localhost:3006/teachers")
        .then(response => {
          console.log(response.data)
          setteachers(teachers = response.data)
        })
        .catch(err => console.log(err))
    }, []);
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <Button color="inherit" variant="outlined"><Link to='/students' 
        style={{color:'white', textDecoration:'none'}}>Students</Link></Button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>class</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers.map((value, index) => {
                return <TableRow>
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.Name}</TableCell>
                  <TableCell>{value.class}</TableCell>
                </TableRow>
              })}
  
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  
    )
  }
  

export default Teach
