import * as Yup from "yup";

export const validations = Yup.object({
      fname: Yup.string()
      .test("capitalizeFirstLetter", "Name should start with a capital letter", function (value) {
        if (value) {
          const firstLetter = value[0];
          return firstLetter === firstLetter.toUpperCase();
        }
        return true; // Return true if the field is empty
      })
        .required("Please enter your First name"),
    lname: Yup.string()
        .test("capitalizeFirstLetter", "Name should start with a capital letter", function (value) {
          if (value) {
            const firstLetter = value[0];
            return firstLetter === firstLetter.toUpperCase();
          }
          return true; // Return true if the field is empty
        })
        .required("Please enter your Last name"),
        password: Yup.string()
        .min(6, "Password should be at least 6 characters")
        .matches(/[A-Z]/, "Password must contain at least one capital letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[!@#\$%^&*]/, "Password must contain at least one special character [!@#\$%^&*]")
        .required("Please enter your password"),
        c_password: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords must match")
            .required("Please confirm your password"),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required')
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Invalid email format'),
        street: Yup.string()
              .min(5,"minimum 5 letters")            
              .required("Please enter street"), 
        mobile: Yup.string()
              .matches(/^[6-9][0-9]{9}$/, "Mobile number should start with 6, 7, 8, or 9 and have a total of 10 digits")
              .required("Please enter your mobile number"),
        address: Yup.string()
              .min(5, "Name should be at least 5 characters")
              .required("Please enter your address"),
        city: Yup.string()
              .min(5,"minimum 5 letters")            
              .required("Please enter city"), 
        state: Yup.string()
              .min(5,"minimum 5 letters")            
              .required("Please enter state"), 
    });