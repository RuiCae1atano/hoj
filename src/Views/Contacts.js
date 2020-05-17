import React, {Component} from 'react';
import App from '../App';
import '../myform.css';


class Contacts extends React.Component{
    render(){
        return(
            <div className="myform mb-5" data-spy="scroll" data-target="#myNav" data-offset="0">
            <div className="container d-flex">
              <div id="contatos" className="row">
                  <div className="text-center">
                  <h2 className="p-higher text-center cor-attbr">Contatos</h2>
                  <p className="col-12 text-center mb-5">
                    Nos conta a sua história, vamos fazer essa parceria dar certo!
                  </p>
                  <form className="col-12">
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label for="inputAddress">Nome Completo</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                        </div> 
                        <div className="form-group col-6">
                            <label for="inputAddress">Email</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                        </div> 
                        <div className="form-group col-6">
                            <label for="inputAddress">Telefone</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                        </div> 
                        <div className="form-group col-6">
                            <label for="inputAddress">Mídia Social</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                        </div> 
                        <div className="form-group col-6">
                            <label for="inputAddress">Instagram</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                        </div> 
                        <div className="form-group col-12 text-center">
                            <div className="col-8 text-center" style={{display:"inline-block"}}>
                            <label for="inputAddress">Mensagem</label>
                                <textarea  type="text" class="form-control" id="inputAddress" placeholder=""/>
                            </div>
                        </div>
                        <div className="form-group col-12 text-center mb-5">
                            <div className="col-8 text-center" style={{display:"inline-block"}}>
                            <button type="submit" className="btn btn-primary btn-lg" style={{width:"30%"}}>Enviar</button>
                            </div>
                        </div>                                                                                                                        
                    </div>
                  </form>    
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


export default Contacts;