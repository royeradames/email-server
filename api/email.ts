/* import */
require("dotenv").config();
import {Response, NextFunction} from "express"
import {body} from "express-validator"
import nodemailer from "nodemailer"
import handleFailValidations from "../helpers/handleFailValidations"


