import React from "react";
import { FormInput, type FormInputProps } from "../FormInput/FormInput";
import OpenEyeIcon from "../../assets/open-eye/24.svg";
import ClosedEyeIcon from "../../assets/closed-eye/24.svg";

import "./FormPassword.css";

type PasswordInputField = Extract<FormInputProps["type"], "password" | "text">;

interface FormPasswordProps
  extends Omit<FormInputProps, "label" | "placeholder" | "name" | "required" | "type"> {}

export const FormPassword = ({ ...inputProps }: FormPasswordProps) => {
  const [type, setType] = React.useState<PasswordInputField>("password");

  const handleTogglePasswordVisibility = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <FormInput
      label="Password"
      placeholder="Password"
      name="password"
      required
      type={type}
      aria-label="Enter your password"
      autoCapitalize="off"
      autoCorrect="off"
      autoComplete="current-password"
      spellCheck="false"
      labelHint={<a href="#">Forgot password?</a>}
      suffix={
        <button
          className="password__visibility-toggle"
          type="button"
          tabIndex={-1}
          aria-label="Toggle password visibility"
          onClick={handleTogglePasswordVisibility}
        >
          {type === "password" ? <OpenEyeIcon /> : <ClosedEyeIcon />}
        </button>
      }
      {...inputProps}
    />
  );
};
