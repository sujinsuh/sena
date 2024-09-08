import { Router } from "express";
import fetch from 'node-fetch';
import nodemailer from 'nodemailer'
// const nodemailer = require('nodemailer');
const mailRouter = Router();
import sendMailer from "../api/sendMail.js"
// export const sendMail = (req, res) => {
//     // const { token } = req.body;
//     // const secret = process.env.REACT_APP_CAPTCHA_SECRET; // Replace with your own reCAPTCHA secret key
//     // const uri = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;

// // Create a transporter object
// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false, // use SSL
//   auth: {
//     user: 'sujin.seo.200',
//     pass: 'ujvypwonydpgnzup',
//   }
// });

// // Configure the mailoptions object
// const mailOptions = {
//   from: 'momoxx505@gmail.com',
//   to: 'momoxx505@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// // Send the email
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     return res.send({ response: "Failed" });
//   } else {
//     console.log('Email sent:', info.response);
//     return res.send({ response: info.response});
//   }
// });
// }


mailRouter.get('/', (req, res, next) => {
    console.log('mail page ')
    res.render('contact'); 
});

mailRouter.post('/', sendMailer);

export default mailRouter;