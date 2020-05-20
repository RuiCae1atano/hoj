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
                  Agarre essa oportunidade de fazer parte da família TGTR e juntos faremos com que o seu infoproduto seja o reflexo do que de melhor tem a oferecer a quem o segue. 
                  Entre em contato hoje e teremos o maior prazer em colaborar consigo!
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