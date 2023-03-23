import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstud = (props) => {
  var [students, setstudents] = useState(props.data)
  console.log("add page props" + props.data)


  const handleChange = (e) => {
    const { name, value } = e.target
    setstudents({ ...students, [name]: value })
    console.log(students)
  }
  const saveData = () => {
    console.log("Button Clicked")
    if (props.method === "post") {
      axios.post("http://localhost:3005/students", students)
        .then(response => {
          alert("Successfully added")
        })
        .catch(error => {
          alert("Failed")
        })
    } else if (props.method === "put")
      axios.put("http://localhost:3005/students/" + students.id, students)
        .then((response) => {
          console.log("put data" + response.data)
          alert("success")
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err)
        })
  }
  return (
    <div align='center'>
      <br></br>
      <Typography variant='h3'>Add students {props.method}</Typography>
      <br></br>
      <br></br>
      <TextField label='id'
        variant='outlined'
        name='id' value={students.id}
        onChange={handleChange}><br><br></br></br></TextField>
      <br></br>
      <br></br>
      <TextField label='name' color='primary' name='Name' value={students.Name} onChange={handleChange}
        variant='standard'></TextField>
      <br></br>
      <br></br>
      <TextField label='Grade' variant='standard' color='primary' name='Grade' value={students.Grade}
        onChange={handleChange}>
      </TextField>
      <br></br>
      <br></br>
      <Button variant='contained' color='primary' onClick={saveData}>Submit</Button>
    </div>

  )
}

export default Addstud
