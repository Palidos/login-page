import React from "react";
import "./FormInput.css";

export interface FormInputProps
  extends Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "ref"
  > {
  label: string;
  error?: string;
  suffix?: React.ReactNode;
}

export const FormInput = React.memo(
  ({ label, error, suffix, name, className, ...inputProps }: FormInputProps) => {
    return (
      <div className="form-input">
        <div className="form-input__label-container">
          <label className="form-input__label" htmlFor={name}>
            {label}
          </label>
        </div>

        <span
          className={`form-input__input-container ${error ? "form-input__input-container--error" : ""}`}
        >
          <input
            id={name}
            name={name}
            className={`form-input__input ${className}`}
            aria-invalid={Boolean(error)}
            {...inputProps}
          />
          {suffix && <span className="form-input__input-suffix">{suffix}</span>}
        </span>

        {error && (
          <span className="form-input__error" aria-live="polite">
            {error}
          </span>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
