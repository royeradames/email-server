/* express types */
import {Response, Request, NextFunction} from "express"

/* libraries */
import {validationResult} from "express-validator"

const handleFailtValidations = (req:Request, res:Response , next:NextFunction) => {
    /* capture the validation resutls */
    const error_list = validationResult(req).array()

    /* check if there is errors */
    const is_errors = error_list.length > 0

    
    

}
export default handleFailtValidations