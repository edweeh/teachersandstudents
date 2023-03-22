import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {
  var [students, setstudents] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3005/students")
      .then(response => {
        console.log(response.data)
        setstudents(students = response.data)
      })
      .catch(err => console.log(err))
  } )
  const deletestudents=(id)=>{
    console.log("delete clicked"+id)
    axios.delete("http://localhost:3005/students/"+id)
    .then("deleted")
    window.location.reload(false)
  } 
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((value, index) => {
              return <TableRow>
                <TableCell>{value.id}</TableCell>
                <TableCell>{value.Name}</TableCell>
                <TableCell>{value.Grade}</TableCell>
                <TableCell>
                  <Button onClick={()=>deletestudents(value.id)}>Delete</Button>
                </TableCell>
                <TableCell>
                  <Button>Update</Button>
                </TableCell>
              </TableRow>
            })}

          </TableBody>
        </Table>
      </TableContainer>
    </div>

  )
}

export default Read
