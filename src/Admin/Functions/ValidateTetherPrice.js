// Tether price should be a real number and don't accept any characters

export default function Validate(values) {
  let errors = {}; // First, we create an object
  // const justNumbers = /(^[0-9\b]+$)/;
  const justNumbers = /^[+-]?([0-9]{1,3}(,[0-9]{3})*(\.[0-9]+)?|\d*\.\d+|\d+)$/;

  if (!values.tetherValue) {
    errors.tetherValue = "این فیلد اجباری است!";
  } else if (values.tetherValue && !justNumbers.test(values.tetherValue)) {
    errors.tetherValue = "فقط عدد وارد کنید.";
  }
  if (!values.email) {
    errors.email = "این فیلد اجباری است!";
  } else if (
    !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
      values.email
    )
  ) {
    errors.email = "آدرس ایمیل معتبر نمی باشد!";
  }
  if (!values.password) {
    errors.password = "این فیلد اجباری است!";
  } else if (values.password.length < 8) {
    errors.password = "رمز عبور باید بیشتر 8 کاراکتر باشد!";
  }
  return errors; // Finally we return that object
}
