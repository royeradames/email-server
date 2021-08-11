/* import */
import {Response, NextFunction} from "express"
import {body} from "express-validator"
import nodemailer from "nodemailer"
import handleFailValidations from "../helpers/handleFailValidations"

/* init express router */
import {Router} from "express"
const router = Router()

/* end points */
router.post("/", [
  /* validate incoming request data */
  // ignore white space in names
  body("name").notEmpty().isAlpha('en-US', {ignore: ' '}),
  body("email").notEmpty().isEmail().normalizeEmail(),
  body("message").notEmpty().trim(),
], 
  //if validation fails respond with error and data of what and why it fail 
  handleFailValidations, 
 async (req:{body: {name: string, email:string, message:string}}, res:Response, next: NextFunction) => {
   /* get form data */
  const {name, email, message} = req.body

  /* 1: login*/
  let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false
        },
      logger: true,
      debug: true
    });

  /* 2: email data */
  const mailData = {
    from: `${name} <${email}>`, // sender address
    to: process.env.RECEIVER_EMAIL, // list of receivers
    subject: "Contact form", 
    text: `email: ${email}\nmessage: ${message}\n`, // plain text body,
    }

  /* 3: send email */
  let info
  try {
    info = await transporter.sendMail(mailData)
  } catch (error) {
    res.status(500).json({error})
  }
  res.status(200).json(info)
  
})

// module.exports = router
export default router
