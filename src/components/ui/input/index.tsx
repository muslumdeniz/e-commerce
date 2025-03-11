import classNames from "classnames";
import Icons from "../icons";
import { IconTypes } from "../icons/_model";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name?: string;
  icon?: IconTypes;
  inputSize?: "base" | "lg";
  info?: string;
  error?: string;
  className?: string;
};

const Input = ({
  label,
  name,
  icon,
  info,
  error,
  inputSize = "base",
  className,
  ...props
}: Props) => {
  const inputVariant = {
    size: {
      base: "h-12",
      lg: "h-24",
    },
  };
  return (
    <fieldset className="flex flex-col gap-1.5">
      {label && (
        <label className="text-lg text-text-primary" htmlFor={name}>
          {label}
        </label>
      )}
      <label
        className={classNames(
          "flex gap-3 items-center border border-px border-form-element-border px-5 rounded-md bg-transparent",
          inputVariant.size[inputSize],
          className
        )}
      >
        {icon && (
          <Icons className="text-text-secondary" name={icon} size={16} />
        )}
        <input
          className="flex-[1] h-full text-base font-extralight text-text-secondary"
          name={name}
          {...props}
        />
      </label>
      {(info || error) && (
        <p
          className={`text-xs ${error ? "text-danger" : "text-text-secondary"}`}
        >
          {error || info}
        </p>
      )}
    </fieldset>
  );
};

export { Input };
