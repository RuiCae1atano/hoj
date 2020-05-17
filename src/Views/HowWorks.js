import React, {Component} from 'react';
import App from '../App';
import '../css/howWorks.css';
import logo from '../img/image2.png';

class HowWorks extends React.Component{
    render(){
        return(
            <div className="App-header-Works">
            <div class="container d-flex">
              <div id="howWorks" class="flex-row justify-content-end">
                  <div className="col-6 text-left">
                  <h2  className="p-higher cor-attbr">GANHE DINHEIRO COM A SUA INFLUÊNCIA</h2>
                  <h4  className="sectionh4 mb-5">Chega de parcerias pouco lucrativas</h4>
                  <p className="">
                  Somos uma freelance consultancy com o objetivo de fazer crescer
                  o seu negócio, ajudando na criação de infoprodutos, e-learning,
                  ebooks e aplicando estratégias de marketing para melhorar o seu alcance nas vendas.
                  </p>
                  <p className="">
                  Somos uma freelance consultancy com o objetivo de fazer crescer
                  o seu negócio, ajudando na criação de infoprodutos, e-learning,
                  ebooks e aplicando estratégias de marketing para melhorar o seu alcance nas vendas.
                  </p>                  
                      {/* <div class="mb-5">
                      <button className="style-button">Saiba Mais</button>
                      </div> */}
                  </div>
              </div>
              <div className="flex">
                 {/* <img class="" src={logo}/> */}
              </div>
            </div>
          </div>
        );
    }
}


export default HowWorks;