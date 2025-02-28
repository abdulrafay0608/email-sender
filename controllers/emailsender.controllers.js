import nodemailer from "nodemailer";
import generateEmailHtml from "../helpers/emailtemplategenerate.helper.js";

export const EmialSenderController = async (req, res) => {
  const { name, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Email From Portfolio: ${subject}`,
    html: generateEmailHtml({ name, email, subject, message }),
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ success: false, message: "Email sending failed!" });
  }
};
