import { ButtonHTMLAttributes } from "react";
import "./Button.css";

type Props = {
  text: string;
  variant?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant, text, ...props }: Props) => {
  return (
    <button {...props} className={variant}>
      {text}
    </button>
  );
};

export default Button;
