import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, message } = req.body;

    // Nodemailer setup
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // use environment variables
        pass: process.env.EMAIL_PASS
      }
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact - ${fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`
      });

      res.status(200).json({ success: true, msg: "Message sent successfully!" });
    } catch (error) {
      res.status(500).json({ success: false, msg: "Error sending message", error });
    }
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
