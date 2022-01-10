import React from "react";
import './App.css';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
   <Router>
     <Navbar /> 
     <Switch>
       <Route path="/" exact component={Home} />
     </Switch>
   </Router>
  )
}