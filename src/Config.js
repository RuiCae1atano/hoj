
var nodemailer = require('nodemailer');
const creds = require('./config/config.js');

var transport = {
  host: 'mail.togethertgtr.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});


router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${content} `
  
    var mail = {
      from: name,
      to: 'relacionamento@togethertgtr.com',  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
          console.log('Erro', data);
        res.json({
          msg: 'fail'
        })
      } else {
        console.log('Erro', data);
        res.json({
          msg: 'success'
        })
      }
    })
  })
