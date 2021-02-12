export default function StatusID1RegValidator(value) {
  let errors = {}; // First, we create an object
  var p = /^[\u0600-\u06FF\s]+$/;
  const justNumbers = /^[+-]?([0-9]{1,3}(,[0-9]{3})*(\.[0-9]+)?|\d*\.\d+|\d+)$/;

  if (!value.FatherName) {
    errors.FatherName = "این فیلد اجباری است!";
  } else if (value.FatherName && !p.test(value.FatherName)) {
    errors.FatherName = "نام پدر را فارسی وارد کنید.";
  }
  if (!value.HomeTel) {
    errors.HomeTel = "این فیلد اجباری است!";
  } else if (value.HomeTel && !justNumbers.test(value.HomeTel)) {
    errors.HomeTel = "فقط عدد وارد کنید.";
  } else if (
    value.HomeTel &&
    justNumbers.test(value.HomeTel) &&
    value.HomeTel.length < 11
  ) {
    errors.HomeTel = "شماره تلفن خود را بهمراه کد استان وارد کنید";
  }
  if (!value.Birthday) {
    errors.Birthday = "انتخاب این فیلد اجباری است!";
  }
  // if (!value.BirthMonth) {
  //   errors.BirthMonth = "انتخاب این فیلد اجباری است!";
  // }
  // if (!value.BirthYear) {
  //   errors.BirthYear = "انتخاب این فیلد اجباری است!";
  // }
  if (!value.IDnumber) {
    errors.IDnumber = "انتخاب این فیلد اجباری است!";
  } else if (value.IDnumber && !justNumbers.test(value.IDnumber)) {
    errors.IDnumber = "فقط عدد وارد کنید.";
  } else if (
    value.IDnumber &&
    justNumbers.test(value.IDnumber) &&
    value.IDnumber.length !== 10
  ) {
    errors.IDnumber = "شماره ملی می باست دقیقا ده رقم باشد.";
  }
  if (!value.BankName) {
    errors.BankName = "انتخاب این فیلد اجباری است!";
  }
  if (!value.BankCardNumber) {
    errors.BankCardNumber = "انتخاب این فیلد اجباری است!";
  } else if (value.BankCardNumber && !justNumbers.test(value.BankCardNumber)) {
    errors.BankCardNumber = "فقط عدد وارد کنید.";
  } else if (
    value.BankCardNumber &&
    justNumbers.test(value.BankCardNumber) &&
    value.BankCardNumber.length !== 16
  ) {
    errors.BankCardNumber = "شماره کارت بانکی می باست دقیقا 16 رقم باشد.";
  }

  return errors; // Finally we return that object
}
