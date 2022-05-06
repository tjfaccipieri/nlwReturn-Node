import express from  'express';
import nodemailer from  'nodemailer';
import { prisma } from './prisma';

// parei em 1/06/10    lembrar de descomentar o gitignore

export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c91462501c6e42",
    pass: "e30de313d8457b"
  }
});

routes.post('/feedbacks', async (req, res) =>{
  const {type, comment, screenshot} = req.body

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot, 
    }
  })

await transport.sendMail({
  from: 'Equipe Feedget <oi@feedget.com>',
  to: 'Thiago Faccipieri <thiago.faccipieri@gmail.com>',
  subject:'Novo feedback',
  html: [
    `<div style='font-family: sans-serif; font-size: 16px; color: #111'>`,
    `<p>Tipo do feedback: ${type}</p>`,
    `<p>Comentário: ${comment}</p>`,
    `</div>`
  ].join('\n')
})

  return res.status(201).json({data: feedback})
})