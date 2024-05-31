import nodemailer from "nodemailer";

const sendEmail = async () => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  });
  let info = await transporter.sendMail({
    from: "",
    to: "",
    subject: "No-reply: Test Email",
    text: "",
    html: "",
  });
};
