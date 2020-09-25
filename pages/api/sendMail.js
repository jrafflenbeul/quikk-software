const nodemailer = require("nodemailer");
require("dotenv").config();

export default async (req, res) => {
  const { firstName, lastName } = req.body;
  const info = await sendViaNodemailerAndReturnInfo({ firstName, lastName });
  res.json(info.messageId);
};

async function sendViaNodemailerAndReturnInfo({ firstName, lastName }) {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PW,
    },
  });

  let info = await transporter.sendMail({
    from: '"QUIKK Software und Webdesign" <noreply@quikk.de>',
    to: "info@quikk.de, lukas@quikk.de, joyce@quikk.de",
    subject: firstName,
    text: lastName,
  });

  return info;
}
