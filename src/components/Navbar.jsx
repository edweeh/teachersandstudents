import { AppBar, Button, Typography, Toolbar, IconButton, Box } from "@mui/material"
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >

            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="left">
              <Link to='/add' style={{ color: 'white', textDecoration: 'none' }}>Add</Link>
            </Typography>
            <Button color="inherit" variant="outlined"><Link to='/'
              style={{ color: 'white', textDecoration: 'none' }}>View</Link></Button>
            {/* <Button color="inherit" variant="outlined"><Link to='/teach' 
            style={{color:'white', textDecoration:'none'}}>Teachers</Link></Button> */}
          </Toolbar>
        </AppBar>
      </Box>

    </div>
  )
}
export default Navbar