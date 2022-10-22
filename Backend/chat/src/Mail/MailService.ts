import { Injectable } from '@nestjs/common';
const nodemailer = require('nodemailer');

@Injectable()
export class MailService {
  transporter: any;
  mailOptions: any

  constructor(){}

  async sendMail(email, token){
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        access_type: 'offline',
        type: "OAuth2",
        user: "vova123555@gmail.com",
        pass: "Vova47836512332122",
        clientId: "807939746637-fia998ra4ljrjp1r4s7d0ar8cij97b3m.apps.googleusercontent.com",
        clientSecret: "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",
        accessToken: "1//04sucmFwsKF-qCgYIARAAGAQSNwF-L9IrQgaix4lLQC9-Xy2jfa96D_XYHX18_AjbRKRkza92IvINtIdc7x0Geif0tTnwT7yBdAU",
        refreshToken: "ya29.a0Aa4xrXPujw-NqoVMVJo_rjAuBTrUut6bP2Q2dnAHrHmvCf2rC-zE_VOTL712MFjG2hXorQNam-MzHb2t3hovo5UD9PvJmE2czm3fUf62g_PD2SwOsfNQHgk9c6pwJvdtldujsXAKlroYSF8__pnZUrmqDCM7aCgYKATASARISFQEjDvL9VkW35EMVNV_pmRUNXy74VQ0163",
      },
    });
    let mailOptions = {
      to: email,
      subject: 'Подтверждение почты',
      text: `Подтвердите почту по ссылке - http://localhost:4000/confirm?${token}`
    };
    transporter.sendMail(mailOptions,function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}