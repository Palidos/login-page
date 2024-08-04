export const getEmailError = (emailValidity: ValidityState) => {
  if (emailValidity.valueMissing) {
    return "Email address required";
  }
  if (emailValidity.typeMismatch) {
    return "Invalid email address";
  }

  return "";
};

export const getPasswordError = (passwordValidity: ValidityState) => {
  if (passwordValidity.valueMissing) {
    return "Password required";
  }

  return "";
};
