export default function User1stStepSignUpValidator(
  value1,
  value2,
  value3,
  value4
) {
  let errors = {}; // First, we create an object
  var p = /^[\u0600-\u06FF\s]+$/;
  const justNumbers = /^[+-]?([0-9]{1,3}(,[0-9]{3})*(\.[0-9]+)?|\d*\.\d+|\d+)$/;

  if (!value1.UserName) {
    errors.firstName = "این فیلد اجباری است!";
  } else if (value1.UserName && !p.test(value1.UserName)) {
    errors.firstName = "نام خود را فارسی وارد کنید.";
  }
  if (!value2.UserLastName) {
    errors.lastName = "این فیلد اجباری است!";
  } else if (value2.UserLastName && !p.test(value2.UserLastName)) {
    errors.lastName = "نام خانوادگی خود را فارسی وارد کنید.";
  }
  if (!value3.PhoneNumber) {
    errors.phoneNumber = "این فیلد اجباری است!";
  } else if (value3.PhoneNumber && !justNumbers.test(value3.PhoneNumber)) {
    errors.phoneNumber = "شماره تلفن شامل حروف نمی باشد.";
  } else if (
    value3.PhoneNumber &&
    justNumbers.test(value3.PhoneNumber) &&
    value3.PhoneNumber.length < 11
  ) {
    errors.phoneNumber = "شماره خود را بصورت 09121234567 وارد کنید.";
  }

  if (
    value4.Email &&
    // eslint-disable-next-line
    !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
      value4.Email
    )
  )
    errors.email = "آدرس ایمیل معتبر نمی باشد!";

  return errors; // Finally we return that object
}
