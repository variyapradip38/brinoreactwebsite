import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';




class Routes extends Component {	
  render() {
    return (
    	<Navbar />

      <Switch>
      
              <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/service" exact component={Service} />
        <Route path="/contact" exact component={Contact} />

        


      </Switch>
    );
  }
}

export default Routes;
