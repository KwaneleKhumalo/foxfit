import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
    }
});