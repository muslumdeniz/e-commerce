import classNames from "classnames";
import { IconTypes } from "../icons/_model";
import Icons from "../icons";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options?: { value: string; label: string }[];
  label?: string;
  name?: string;
  icon?: IconTypes;
  selectSize?: "base" | "lg";
  info?: string;
  error?: string;
};

const Select = ({
  options,
  label,
  name,
  icon,
  selectSize = "base",
  info,
  error,
  ...props
}: Props) => {
  const selectVariant = {
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
          selectVariant.size[selectSize]
        )}
      >
        {icon && (
          <Icons className="text-text-secondary" name={icon} size={16} />
        )}
        <select
          className="flex-[1] h-full text-base font-extralight text-text-secondary"
          name={name}
          {...props}
        >
          {options &&
            options.map((i, key) => (
              <option key={key} value={i.value}>
                {i.label}
              </option>
            ))}
        </select>
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

export { Select };
