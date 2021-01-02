export default function loginValidate(values) {
  let errors = {}; // First, we create an object

  if (!values.email) {
    errors.email = "این فیلد اجباری است!";
    // } else if (
    //   // eslint-disable-next-line
    //   !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
    //     values.email
    //   )
    // ) {
    //   errors.email = "آدرس ایمیل معتبر نمی باشد!";
    // }
  }
  if (!values.password) {
    errors.password = "این فیلد اجباری است!";
  }
  return errors; // Finally we return that object
}
