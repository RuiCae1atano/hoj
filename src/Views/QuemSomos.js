import React, {Component} from 'react';
import App from '../App';


class QuemSomos extends React.Component{
    render(){
        return(
            <div className="App-header">
            <div className="container d-flex">
              <div id="quemsomos" className="row">
                  <div>
                  <h2 class="col-md-7 text-left p-higher">Nós Somos</h2>
                  <p class="col-md-6 text-left">
                  Somos uma freelance consultancy com o objetivo de fazer crescer
                  o seu negócio, ajudando na criação de infoprodutos, e-learning,
                  ebooks e aplicando estratégias de marketing para melhorar o seu alcance nas vendas.
                  </p>
                      <div className="col-md-6">
                      <a href="#contatos" className="style-button">Saiba Mais</a>
                      </div>
                  </div>
              </div>
              <div className="flex">
                {/* <img class="" src={mylogo2}/> */}
              </div>
            </div>
          </div>
        );
    }
}


export default QuemSomos;