/* import */
require("dotenv").config();
import {Response, NextFunction} from "express"
import {body} from "express-validator"
import nodemailer from "nodemailer"
import handleFailValidations from "../helpers/handleFailValidations"

/* init express router */
import {Router} from "express"
const router = Router()

/* end points */
router.post("/", [
  // validate incoming request data
  body("name").notEmpty().isAlpha(),
  body("email").notEmpty().isEmail().normalizeEmail(),
  body("message").notEmpty().trim(),
], 
  //if validation fails respond with error and data of what and why it fail 
  handleFailValidations, 
  async (req:{body: {name: string, email:string, message:string}}, res:Response, next: NextFunction) => {
   /* get form data */
  const {name, email, message} = req.body

  

  

  
})

// module.exports = router
export default router
