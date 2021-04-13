import { Container, Box, Button } from "@material-ui/core"
import { observer } from "mobx-react-lite"
import React from "react"
import { Redirect, withRouter } from "react-router-dom"
import usersStore from "../store/usersStore"
import './components.css'
import ToursList from "../components/ToursList/ToursList"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


let WithRouterToursList = withRouter(ToursList)

const Dashboard = observer(() => {

    const classes = useStyles();    

if (!usersStore.isAuth) {
        return <Redirect to={'/login'} />        
    }

    return (
        <div>
        <Container>
        
            <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                {/*<MenuIcon />*/}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Make your adventure, {usersStore.users[usersStore.userIndex].login}!
            </Typography>
            <Button color="inherit"
                    onClick={()=>usersStore.logOut()}>
                    Logout</Button>
            </Toolbar>
            </AppBar>
            {/* <h3>{usersStore.users[usersStore.userIndex].login}</h3> */}
            {/* <Box>
                <Button     variant="contained" 
                            color="primary" 
                            onClick={()=>usersStore.logOut()}
                            className="standartButton" >
                            Log out
                </Button>
            </Box>  */}

            <WithRouterToursList />       

        </Container>
        </div>    
    )

})

export default Dashboard