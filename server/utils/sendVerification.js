import { sendEmail } from "./sendEmail";

export const sendVerificationEmail = async (
  name,
  email,
  verificationToken,
  origin
) => {
  const message = `Please confirm your email by clicking on the following link: `;
  return sendEmail(email, "Confirm Your Account", `Hello ${name}, ${message}`);
};
