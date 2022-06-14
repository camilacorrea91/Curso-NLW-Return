import nodemailer from 'nodemailer';
import { MailAdapter, SendMailDate } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "95a5786e5a9e88",
    pass: "08861e3d537327"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailDate) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Camila Corrêa <camilatrabalhofaculdade@gmail.com>',
      subject,
      html: body,
    });
  }
}