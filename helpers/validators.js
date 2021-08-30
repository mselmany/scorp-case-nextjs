const validators = {
  name(value) {
    return value && value.toString().length >= 4;
  },
  email(value) {
    return value && value?.includes("@");
  },
  phone(value) {
    return value && value.toString().length == 11;
  },
  password(value) {
    return value && value.toString().length >= 4;
  },
  text(value) {
    const length = value && value.toString().length;
    return length > 11 && length < 50;
  }
}

export default validators;