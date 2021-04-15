import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Login from "./Components/Appointment/Login/Login/Login";
import AddDoctor from "./Components/AddDoctor/AddDoctor";

import AllPatient from "./Components/AllPatient/AllPatient";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>

          </Route>

          <Route path='/allPatient'>
            <AllPatient></AllPatient>
          </Route>
          
          


          
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
