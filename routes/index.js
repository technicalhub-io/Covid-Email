var express = require('express');
var nodemailer=require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  
res.render('index');
});
router.post('/form',function(req,res){
  console.log(req.body.mail);
  var transporter = nodemailer.createTransport({
    // create reusable transporter object using the default SMTP transport
     host: 'host',
    port: 25,
    secure : true, // true for 465, false for other ports
    auth: {
        user: 'user',
        pass: 'password'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
  service: 'gmail',
  auth: {
    user: 'your mail',
    pass: 'your password'
  }
});

var mailOptions = {
  from: 'your mail',
  to: req.body.mail,
  subject: 'This is link to check how many covid cases are registered in our country',
  text: 'click on the link and know about the pendamic causing right now https://www.mygov.in/covid-19'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
res.redirect('/')
});
module.exports = router;
