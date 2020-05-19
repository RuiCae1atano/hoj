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
// import {Router} from '@reach/router';
import { browserHistory, Router, Route } from 'react-router-dom';





class App extends Component{

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/send');
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) throw Error(body.message);

    return body;
  };



  render(){
    return (
      <div data-spy="scroll" data-target="#myNav" data-offset="0">
      <Nav /> 
      <Home />        
      {/* <Router> */}
      <HowWorks/>
      <Services/>
      <QuemSomos/>
      <Contacts/>
      {/* </Router> */}
      </div>
    ) 
  }
}



export default App;
