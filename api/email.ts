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
router.post("/", 
  )

// module.exports = router
export default router
