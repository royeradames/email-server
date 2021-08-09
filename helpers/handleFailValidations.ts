/* express types */
import {Response, Request, NextFunction} from "express"

/* libraries */
import {validationResult} from "express-validator"

const handleFailtValidations = (req:Request, res:Response , next:NextFunction) => {
    /* capture the validation resutls */
    const error_list = validationResult(req).array()

    /* check if there is errors */
    const is_errors = error_list.length > 0

    if(is_errors){
        /* resp with the list of errors */
        return res.status(404).json(error_list)
    }
    else{
        /* no fail validation, then go to the next middleware */
        next()
    }

}
export default handleFailtValidations