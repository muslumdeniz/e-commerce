import classNames from "classnames";
import { IconTypes } from "../icons/_model";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name?: string;
  icon?: IconTypes;
  inputSize?: "base" | "lg";
};

export const Input = ({ label, name, inputSize = "base", ...props }: Props) => {
  const inputVariant = {
    size: {
      base: "h-12 py-0 px-5",
      lg: "h-24",
    },
  };
  return (
    <div className="flex gap-3 items-center">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={classNames(
          "border border-px border-form-element-border rounded-md bg-transparent text-base font-extralight text-text-secondary",
          inputVariant.size[inputSize]
        )}
        type="text"
        name={name}
        {...props}
      />
    </div>
  );
};
