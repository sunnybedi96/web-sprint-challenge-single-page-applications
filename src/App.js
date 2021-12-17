import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage"
import PizzaForm from "./PizzaForm.js";


const App = () => {




  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>

      <Router>

        <a><Link to="/">HOME</Link></a>
        <a><Link to="/pizza">Pizza</Link></a>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/pizza">
            <PizzaForm />
          </Route>
        </Switch>
      </Router>


    </>
  );
};
export default App;
