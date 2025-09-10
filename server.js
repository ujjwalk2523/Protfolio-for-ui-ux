const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Contact Form API
app.post("/contact", async (req, res) => {
  const { fullName, email, message } = req.body;

  // Log incoming request data
  console.log("📩 New contact form submission:");
  console.log("Name:", fullName);
  console.log("Email:", email);
  console.log("Message:", message);

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ujjwalbhumi0@gmail.com",   // 👉 replace with your Gmail
        pass: "kmfrlqjuittalfkj"       // 👉 your App Password (no spaces)
      }
    });

await transporter.sendMail({
  from: "ujjwalbhumi0@gmail.com",   // ✅ must be your Gmail
  replyTo: email,                   // ✅ so replies go to the user
  to: "ujjwalbhumi0@gmail.com",     // ✅ your Gmail inbox
  subject: `Portfolio Contact - ${fullName}`,
  text: `
    Name: ${fullName}
    Email: ${email}
    Message: ${message}
  `
});


    console.log("✅ Email sent successfully!");
    res.json({ success: true, msg: "Message sent successfully!" });

  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, msg: "Error sending message", error });
  }
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
