/* express types */
import {Response, Request, NextFunction} from "express"

/* libraries */
import {validationResult} from "express-validator"

const handleFailtValidations = (req:Request, res:Response , next:NextFunction) => {
    /* capture the validation resutls */
    const error_list = validationResult(req).array()

    

    
    

}
export default handleFailtValidations