import {Container, Box, Button, TextField} from '@material-ui/core'
import usersStore from "../store/usersStore"
import { observer } from "mobx-react-lite"
import { Redirect } from "react-router-dom"
import './components.css'

const Signin = observer(() => {

    if (usersStore.isAuth) {
      return <Redirect to={'/'} />
    }
    if (!usersStore.regisrationToggle) {
      return <Redirect to={'/login'} />
    }

    return(
      
      <Container>
          <div className="topBox"></div>
          <Box>
            <h3>Sign in: </h3>
          </Box>
          <Box m={1}>
            <TextField  
                        label="Login"
                        error = {usersStore.errorLogin}
                        helperText = {usersStore.helperText} 
                        variant="outlined"
                        value={usersStore.loginInput} 
                        onChange={(event)=>{usersStore.loginTextChange(event.target.value)}} />
          </Box>
          <Box m={1}>
            <TextField 
                        label="Password"
                        error = {usersStore.errorPassword}                         
                        variant="outlined" 
                        type="password"
                        value={usersStore.passwordInput} 
                        onChange={(event)=>{usersStore.passwordTextChange(event.target.value)}} />
          </Box>
          <Box m={1}>
            <TextField  id="outlined-basic" 
                        label="Confirm password"
                        error = {usersStore.errorPassword}
                        helperText = {usersStore.helperText1}  
                        variant="outlined" 
                        type="password"
                        value={usersStore.passwordConfirm} 
                        onChange={(event)=>{usersStore.passwordConfirmTextChange(event.target.value)}} />
          </Box>
          <Box m={2}></Box>
          <Box component="span" m={1}> 
            <Button     variant="contained" 
                        color="primary" 
                        onClick={()=>usersStore.addUser()}
                        className="standartButton" >
                        Sign In
            </Button>
          </Box>

          <Box m={1}>
            <Button     variant="contained" 
                        onClick={()=>usersStore.regisrationToggleSwitch()} 
                        className="standartButton"> 
                        Back</Button>
          </Box>
      </Container>   
      
      
      
        
    )
})

export default Signin 