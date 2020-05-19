import React, {Component} from 'react';
import App from '../App';


class Home extends React.Component{
    render(){
        return(
            <div className="App-header-Home">
            <div className="container d-flex">
              <div className="row">
                  <div className="col-sm-8">
                  <h2 class="col-md-7 text-left p-higher">FREELANCE MARKETING</h2>
                  <p class="col-md-6 text-left">
                  Somos uma freelance consultancy com o objetivo de fazer crescer
                  o seu negócio, ajudando na criação de infoprodutos, e-learning,
                  ebooks e aplicando estratégias de marketing para melhorar o seu alcance nas vendas.
                  </p>
                      <div className="col-6">
                      <a className="style-button">Aproveite!</a>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        );
    }
}


export default Home;