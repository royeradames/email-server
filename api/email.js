/* import */
const { body } = require("express-validor")
require("dotenv").config();
const nodemailer = require("nodemailer");

/* init express router */
const router = require("express").Router()

/* end points */
router.post("/", [
  body("name").notEmpty().isAlpha(),
  body("email").notEmpty().isEmail().normalizeEmail(),
  body("message").notEmpty().trim(),
], async (req, res, next) => {
   /* get form data */
  const {name, email, message} = req

  /* send email */
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // send mail with defined transport object
  try {
    await transporter.sendMail({
      from: `${name} <${email}>`, // sender address
      to: process.env.RECEIVER_EMAIL, // list of receivers
      subject: "Contact form", 
      text: message, // plain text body
    });
  } catch (error) {
    next(error)
  }
  /* response with a valid status */
  res.status(200).json("Message send")
})


