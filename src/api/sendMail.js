// Import the Nodemailer library
// const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer' 

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use SSL
  auth: {
    user: 'sujin.seo.200',
    pass: 'ujvypwonydpgnzup',
  }
});

// Configure the mailoptions object
const mailOptions = {
  // from: 'sujin.seo.200@gmail.com',
  to: 'info@senacustoms.com',
  subject: 'Email from SENA WEB by Client Named :',
  text: '문의'
};

// Send the email
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log('Error:', error);
//   } else {
//     console.log('Email sent:', info.response);
//   }
// });


const sendMailer = (req, res)=>{
  const user = req.body;
  // console.log("user : ", user)
  // mailOptions.to = 
  // console.log("mail option", mailOptions.to)
  mailOptions.from = user.Email;
  mailOptions.subject = mailOptions.subject + " " + user.Name;
  mailOptions.text = user.MailText;

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      // console.log('post request');
      // console.log(info)
      // res.json(info);
    } else {
      console.log('Email sent:', info.response);
      res.json(info);
      // res.status(200).send("mail sent");
    }
  });
}

export default sendMailer;