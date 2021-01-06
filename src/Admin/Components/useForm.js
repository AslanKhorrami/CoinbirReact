import { useState, useEffect } from "react";
// This is custom hook we created to use several times in several components
// As we use this hook for admin forms, so we can add everything we need in forms, such as error states for error handeling and ...
const useForm = (callback, Validate) => {
  const [loginValues, setLoginValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  // const [loginErrors, setLoginErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handelChange = (event) => {
    setLoginValues({
      ...loginValues,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    // handeling errors
    setErrors(Validate(loginValues));
    setIsSubmitting(true);
    // callback();
  };

  // Formatting input number
  // const addCommas = (num) =>
  //   num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

  useEffect(() => {
    //Check if there is no error and then call th callback()
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line
  }, [errors, isSubmitting]);

  return {
    handelChange,
    handelSubmit,
    errors,
    loginValues,
  };
};

export default useForm;
