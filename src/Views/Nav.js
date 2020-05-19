

import React, {Component} from 'react';
import App from '../App';
import mylogo from '../tgtrlogo.png';
// import 'bootstrap/dist/css/bootstrap.css';
import '../css/nav.css';




class Nav extends React.Component{
    render(){
        return(
            <nav id="myNav" className="navbar navbar-expand-lg fixed-top">
            <div className="container">
          <a className="navbar-brand" href="#">
          <img src={mylogo} className="icon brand" alt="logo" />  
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link ml-2 color-link" href="#">home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link ml-2 color-link" href="#howWorks">como funciona</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ml-2 color-link" href="#services">serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ml-2 color-link" href="#quemsomos">quem somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ml-2 color-link" href="#contatos">contatos</a>
              </li>
            </ul>
          </div>
          </div>
          </nav>
        );
    }
}


export default Nav;