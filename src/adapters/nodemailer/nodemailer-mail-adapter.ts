import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c91462501c6e42",
    pass: "e30de313d8457b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Thiago Faccipieri <thiago.faccipieri@gmail.com>',
        subject:subject,
        html: body,
      })
  }
}