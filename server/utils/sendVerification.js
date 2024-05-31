import { sendEmail } from "./sendEmail.js"


export const sendVerificationEmail = async (name, email, verificationToken, origin) => {
    const verifyLink = `${origin}/about`
    const message = `Your Registration is almost complete! Please confirm your email by clicking on the following link: `
return sendEmail(email, "Verify Email", `<h3>Hello ${name}, </h3> <br /> ${message} <a href=${verifyLink}>Verify Email</a>`)
}