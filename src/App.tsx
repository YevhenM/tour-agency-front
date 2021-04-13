import "./App.css";
import {Container} from "@material-ui/core"
import Login from "../src/components/login"
import Signup from "./components/signup"
import Dashboard from "../src/components/dashboard"
import Tour from "../src/components/Tour/Tour"
//import "../public/background.jpg"
import {
  BrowserRouter as Router,
  Switch,
  Route,  
  Redirect
} from "react-router-dom";
import usersStore from "./store/usersStore";
import React from "react";

function App() {  
  
  usersStore.initializeApp()    
  
  return (

    <Router>
      <div className="mainContainer"></div>
      <Container className="App">
        
        <Switch>
          <Route path = "/"  exact = {true}> <Redirect to={'/tours'} /> </Route>
        </Switch>

        <Switch>
          <Route path = "/tours" exact = {true} > <Dashboard/ > </Route>
        </Switch>

        <Switch>
          <Route path = "/tours/id/:id" > <Tour/ > </Route>
        </Switch>

        <Switch>
          <Route path = "/login" exact = {true}> <Login/ > </Route>
        </Switch>

        <Switch>
          <Route path = "/signup" exact = {true}> <Signup/ > </Route>
        </Switch>

      </Container>      
    </Router>    
  );
}

export default App;
