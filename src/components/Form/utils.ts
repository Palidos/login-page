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

export const mockFetch = async (
  input: RequestInfo | URL,
  init: Omit<RequestInit, "body"> & { body: string }
) => {
  return new Promise((resolve) => {
    const parsedBody = JSON.parse(init.body) as object;
    const result = { endpoint: input, ...parsedBody };
    console.log(result);
    resolve(result);
  });
};
