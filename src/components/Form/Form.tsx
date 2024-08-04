import React from "react";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { FormInput } from "../FormInput/FormInput";
import { FormPassword } from "../FormPassword/FormPassword";
import { Spinner } from "../Spinner/Spinner";
import { getEmailError, getPasswordError, mockFetch } from "./utils";

import "./Form.css";

interface LoginFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface LoginFormElement extends HTMLFormElement {
  elements: LoginFormElements;
}

export const Form = () => {
  const [emailValidationError, setEmailValidationError] = React.useState("");
  const [passwordValidationError, setPasswordValidationError] = React.useState("");
  const [isFormSubmitting, setIsFormSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as LoginFormElement;

    if (!form.elements.email.validity.valid) {
      setEmailValidationError(getEmailError(form.elements.email.validity));
    }
    if (!form.elements.password.validity.valid) {
      setPasswordValidationError(getPasswordError(form.elements.password.validity));
    }

    if (form.checkValidity()) {
      setIsFormSubmitting(true);
      mockFetch("/login", {
        method: "POST",
        body: JSON.stringify({
          email: form.elements.email.value,
          password: form.elements.password.value,
        }),
      })
        .catch(() => {})
        .finally(() => setIsFormSubmitting(false));
    }
  };

  const handleEmailChange = React.useCallback(() => {
    setEmailValidationError("");
  }, []);

  const handlePasswordChange = React.useCallback(() => {
    setPasswordValidationError("");
  }, []);

  return (
    <Card>
      <h2 className="form__header">Login to your account</h2>
      <form className="form" noValidate onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          name="email"
          placeholder="Email"
          required
          error={emailValidationError}
          autoFocus
          onChange={handleEmailChange}
          aria-label="Enter your email"
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="email"
        />

        <FormPassword error={passwordValidationError} onChange={handlePasswordChange} />

        <Button type="submit">
          <div className="form__submit-button-content">
            {isFormSubmitting && <Spinner />}
            Login now
          </div>
        </Button>
      </form>
      <p className="form__bottom-text">
        Don&apos;t have an account? <a href="#">Sign up</a>
      </p>
    </Card>
  );
};
