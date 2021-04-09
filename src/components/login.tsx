import {Container, Box, Button, TextField} from '@material-ui/core'
import usersStore from "../store/usersStore"
import {observer} from "mobx-react-lite"
import { Redirect } from "react-router-dom"

const Login = observer(() => {

  if (usersStore.isAuth) {
    return <Redirect to={'/'} />
  }
  if (usersStore.regisrationToggle) {
    return <Redirect to={'/signin'} />
  }

    return(      
      <Container>
          <Box>
            <h3>Login: </h3>
          </Box>
          <Box m={1}>
            <TextField  id="outlined-basic"  
                        label="Login"
                        error = {usersStore.inputError} 
                        variant="outlined" 
                        value={usersStore.loginInput} 
                        onChange={(event)=>{usersStore.loginTextChange(event.target.value)}} />
          </Box>
          <Box m={1}>
            <TextField  id="outlined-basic" 
                        type="password"
                        label="Password"
                        error = {usersStore.inputError} 
                        variant="outlined" 
                        value={usersStore.passwordInput} 
                        onChange={(event)=>{usersStore.passwordTextChange(event.target.value)}} />
          </Box>

          <Box m={1}>
            <Button variant="contained" color="primary" onClick={()=>usersStore.logIn()} >Log in</Button>
          </Box>

          <Box component="span" m={1}> 
            <Button variant="contained" onClick={()=>usersStore.regisrationToggleSwitch()}> Sign In </Button>
          </Box>
      </Container>        
    )
})

export default Login;