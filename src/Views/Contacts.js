import React, {Component} from 'react';
import App from '../App';
import MailSend from '../MailSend';
import '../myform.css';
import axios from 'axios'; 
// import axios from 'axios/dist/axios';



class Contacts extends React.Component{

    constructor(props) {
        super(props);
        this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }


    render(){
        return(
            <div className="myform mb-5 contact-form" data-spy="scroll" data-target="#myNav" data-offset="0">
            <div className="container d-flex">
              <div id="contatos" className="row">
                  <div className="text-center">
                  <h2 className="p-higher text-center cor-attbr">Contatos</h2>
                  <p className="col-12 text-center mb-5">
                    Nos conta a sua história, vamos fazer essa parceria dar certo!
                  </p>
                  <form className="col-12" onSubmit={this.handleSubmit.bind(this)} method="POST">
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
                            <button type="submit"  className="btn btn-primary btn-lg" style={{width:"30%"}}>Enviar</button>
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




    handleSubmit(e){
        e.preventDefault();
        const templateId = 'template_d21REFgt';

	this.sendFeedback(templateId, {
        message_html: "this.state.feedback", from_name: "this.state.name", reply_to: "this.state.email"

        // const name = document.getElementById('name').value;
        // const email = document.getElementById('email').value;
        // const message = document.getElementById('message').value;
        // axios({
        //     method: "POST", 
        //     url:"http://localhost:3000/send", 
        //     data: {
        //         name: "name",   
        //         email: "ruikabal@gmail.com",  
        //         messsage: "yah"
        //     }
        // }).then((response)=>{
        //     if (response.data.msg === 'success'){
        //         alert("Message Sent."); 
        //         this.resetForm()
        //     }else if(response.data.msg === 'fail'){
        //         alert("Message failed to send.")
        //     }
        })
    }


    sendFeedback (templateId, variables) {
        window.emailjs.send("teste", templateId, 
        variables, "user_NIM0hnS2Gqvz1qXRqqwQj")
        .then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));

        // window.emailjs.send(
        //   'gmail', templateId,
        //   variables
        //   ).then(res => {
        //     console.log('Email successfully sent!')
        //   })
        //   // Handle errors here however you like, or use a React error boundary
        //   .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    resetForm(){
        document.getElementById('contact-form').reset();
    }



}


export default Contacts;