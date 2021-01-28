export default function User1stStepSignUpValidator(
    value1,
    value2
  ) {
    let errors = {}; // First, we create an object
    
  
    if (!value1.Password) {
      errors.Password = "این فیلد اجباری است!";
    } else if (value1.Password && value1.Password.length < 8) {
      errors.Password = "رمز عبور باید حداقل 8 کاراکتر و شامل اعداد و حروف باشد.";
    }
    if (!value2.Password2) {
      errors.Password2 = "این فیلد اجباری است!";
    } else if (value2.Password2 !== value1.Password) {
      errors.Password2 = "مقادیر وارد شده باهم یکسان نیستند";
    }
    
    return errors; // Finally we return that object
  }
  