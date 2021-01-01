import { useState, useEffect } from "react";
// This is custom hook we created to use several times in several components
// As we use this hook for admin forms, so we can add everything we need in forms, such as error states for error handeling and ...
const useForm = (callback, Validate) => {
  const [values, setValues] = useState({ tetherValue: "" });
  const [errors, setErrors] = useState({ tetherValue: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handelChange = (event) => {
    setValues({
      //   ...values, // Here, we keep the original array, and next we just update the parts we need (we have just one field yet, so we shouldnt copy original array here)
      [event.target.name]: event.target.value, // Here, we create an object and push it to array
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    // handeling errors
    setErrors(Validate(values));
    setIsSubmitting(true);
    // callback();
  };

  useEffect(() => {
    //Check if there is no error and then call th callback()
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    values,
    handelChange,
    handelSubmit,
    errors,
  };
};

export default useForm;
