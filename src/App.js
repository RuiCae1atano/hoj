import React, { Component } from 'react';
import logo from './logo.svg';
import mylogo from '../src/tgtrlogo.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.slim.js'
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Home from './Views/Home';
import Nav from './Views/Nav';
import Services from './Views/Services';
import HowWorks from './Views/HowWorks';
import Contacts from './Views/Contacts';
import QuemSomos from './Views/QuemSomos';


class App extends Component{
  render(){
    return (
      <div data-spy="scroll" data-target="#myNav" data-offset="0">
      <Nav /> 
      <Home />
      <HowWorks/>
      <Services/>
      <QuemSomos/>
      <Contacts/>
      </div>
    ) 
  }
}



export default App;
