var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'susidharan.cs21@bitsathy.ac.in',
    pass: 'bitsathypr'
  }
});

var mailOptions = {
  from: 'susidharan.cs21@bitsathy.ac.in',
  to: 'susidharan.cs21@bitsathy.ac.in',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});