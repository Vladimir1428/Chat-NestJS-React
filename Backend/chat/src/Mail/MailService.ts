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
        accessToken: "ya29.a0Aa4xrXM8qr7_bQLkfNFR7NTbAQkTcrC77OTXhbN8n-L4aJPXXed8j2lVix5Vp6VqWlrPBJVE2BXHQGULNtEGGFoSFg104mRsqB-K7rHmiMx56_9SWenZnAjabNt2QrEFJ1pdV_H35OF5wLNZrVxR8-LxevdQaCgYKATASARASFQEjDvL9OHHWz01UIG-Uu3kjGSjAGQ0163",
        refreshToken: "1//041iwVt15SfP0CgYIARAAGAQSNwF-L9IrRJf5QCF-ldHg0Yv-7GKbShnYAMHuf_YaGcSgluEmiY7O743ewAxIfB7U5mgwRZW3XmY",
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