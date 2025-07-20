import React from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonAs = "button" | "a";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  as?: ButtonAs;
};

type ButtonProps =
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
  | (CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" });

const Button: React.FC<ButtonProps> = ({
  as = "button",
  children,
  className = "",
  ...props
}) => {
  const classes = `button ${className}`.trim();

  if (as === "a") {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;
