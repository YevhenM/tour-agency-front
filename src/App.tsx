import React from 'react';
import './App.css';
import {Container, Box, Button, TextField} from '@material-ui/core'

function App() {
  return (
    <div className="App">

      <Container>
        <Box>
          <h2>Hello world app</h2>
        </Box>
        <Box m={3}>
          <TextField id="outlined-basic" label="Login" variant="outlined" />
        </Box>
        <Box m={1}>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </Box>
        <Box m={1}>
          <Button variant="contained" >Log in</Button>
        </Box>

        <Box component="span" m={1}>        
          
          
          <Button variant="contained" color="primary">
              Sign In
          </Button>
        </Box>
      </Container>
      
    </div>
  );
}

export default App;
