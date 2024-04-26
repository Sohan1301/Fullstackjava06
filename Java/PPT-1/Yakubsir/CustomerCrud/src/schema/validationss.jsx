import * as Yup from "yup";

export const validationss = Yup.object({
        id: Yup.string()
              .min(3,"minimum 3 letters")            
              .required("Please enter id"), 
        password: Yup.string()           
              .required("Enter Password"), 
    });