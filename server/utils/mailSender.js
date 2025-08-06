const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST, // e.g. smtp.gmail.com
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER, // your email (sender)
        pass: process.env.MAIL_PASS, // your app password
      },
    });

    let info = await transporter.sendMail(
       {
      from: "Study Notion by- Vedant" ,
      to:` ${email}`,
      subject: `${title}`,
      html:`${body}`,
    }
   )
    
     console.log(info);
    return info;
  } catch (error) {
    console.error("Error while sending email:", error.message);
    throw error;
  }
};

module.exports = mailSender;
