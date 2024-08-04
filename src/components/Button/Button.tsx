import type React from "react";

import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return (
    <button className="button" {...buttonProps}>
      {children}
    </button>
  );
};
