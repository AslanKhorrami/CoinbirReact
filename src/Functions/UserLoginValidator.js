export default function UserLoginValidator(value) {
  let errors = {}; // First, we create an object

  if (!value.username) {
    errors.username = "این فیلد اجباری است!";
  }
  if (!value.password) {
    errors.password = "این فیلد اجباری است!";
  }
  return errors; // Finally we return that object
}
