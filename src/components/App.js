import "bootstrap/dist/css/bootstrap.css";
import "./style.css";


import {Switch, Route, Redirect} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import React, { Component } from "react";


const App = () => {

    return (
      <>
        <Navbar />

      <Switch>
      
              <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/service" exact component={Service} />
        <Route path="/contact" exact component={Contact} />
        <Redirect to="/" />

        


      </Switch>
      <Footer />
      </>
    );
  };

export default App;
