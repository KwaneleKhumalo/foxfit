import nodemailer from "nodemailer";

export const sendEmail = async ({email, subject, emailBody}) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  });
  let info = await transporter.sendMail({
    from: process.env.NO_REPLY, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: emailBody, // plain text body
    html: `<b>${emailBody}</b>`, // html body
  });
};
