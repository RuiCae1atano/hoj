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
                  Acreditamos no potencial do marketing digital, existem 3.80 BILHÕES de usuários de redes sociais em 2020 e este número só tende a crescer. Para si, isto pode significar muitos competidores. Para nós, isto também pode significar um universo de clientes. 

Com o nosso traquejo de vida digital, treinamento formal, consciência crítica e conhecimento técnico, detemos ferramentas necessárias para fazer chegar ao mundo aquilo que o torna mais especial.

                  </p>
                      <div className="col-6">
                      {/* <button className="style-button">Saiba Mais</button> */}
                      </div>
                  </div>
              </div>
              <div class="d-flex justify-content-sm-start justify-content-md-end flex-sm-row row">
                  <div className="col-md-5 col-sm-8 mb-5">
                  <h2 className="cor-attbr text-left p-higher">CRIE CONTEÚDO PAGO</h2>
                  <h4 className="text-left sectionh4 mb-3">Desenvolvendo o seu produto</h4>
                  <p className="text-left">
                  Faça o que goste, deixe o resto connosco. A nossa equipe criativa trabalhará dedicadamente em transformar a sua personalidade e qualidades únicas em conteúdo que os seus seguidores possam se interessar, comprar, consumir e valorizar. 

Acreditamos no poder da colaboração. Aproximamos a sua marca a outros criadores para que se produza resultados ainda mais imagináveis, multiplicando audiências, e quem sabe, agradar a gregos e troianos sem deixar de ser autêntico.

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