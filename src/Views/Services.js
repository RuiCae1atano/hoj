import React, {Component} from 'react';
import App from '../App';
import '../css/services.css';


class Services extends React.Component{
    render(){
        return(
            <div className="App-header-Services">
            <div class="container">
              <div id="services" class="d-flex justify-content-sm-start justify-content-md-end flex-sm-row row">
                  <div className="col-md-5 col-sm-8 ">
                  <h2 className="cor-attbr text-left p-higher">CONSULTORIA DE MARKETING</h2>
                  <h4 className="text-left sectionh4 mb-3">Agregando valor ao seu negócio</h4>
                  <p className="text-left">
                  Somos uma freelance consultancy com o objetivo de fazer crescer
                  o seu negócio, ajudando na criação de infoprodutos, e-learning,
                  ebooks e aplicando estratégias de marketing para melhorar o seu alcance nas vendas.
                  </p>
                      <div className="col-6">
                      {/* <button className="style-button">Saiba Mais</button> */}
                      </div>
                  </div>
              </div>
              <div class="d-flex justify-content-sm-start justify-content-md-end flex-sm-row row">
                  <div className="col-md-5 col-sm-8">
                  <h2 className="cor-attbr text-left p-higher">CRIE CONTEÚDO PAGO</h2>
                  <h4 className="text-left sectionh4 mb-3">Time de especialistas desenvolvendo o seu produto</h4>
                  <p className="text-left">
                  Somos uma freelance consultancy com o objetivo de fazer crescer
                  o seu negócio, ajudando na criação de infoprodutos, e-learning,
                  ebooks e aplicando estratégias de marketing para melhorar o seu alcance nas vendas.
                  </p>
                      <div className="col-6">
                      {/* <button className="style-button">Saiba Mais</button> */}
                      </div>
                  </div>
              </div>              
            </div>
          </div>
        );
    }
}


export default Services;