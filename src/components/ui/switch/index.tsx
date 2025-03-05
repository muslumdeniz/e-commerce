import classNames from "classnames";
import { useEffect, useState } from "react";

type Props = {
  label?: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: (check: boolean) => void;
};

const Switch = ({ label, disabled, error, onChange }: Props) => {
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    disabled && setCheck(false);
  }, [disabled]);

  const handleChange = () => {
    const newValue = check === true ? false : true;
    !disabled && setCheck(newValue);
    onChange && onChange(newValue);
  };

  return (
    <fieldset className="flex gap-3.5 relative">
      <span
        onClick={handleChange}
        className={classNames(
          // Default
          "flex items-center  border border-px rounded-full w-11 h-6 transition-all",
          // Active
          !disabled && check && "bg-primary border-primary",
          // Disabled
          disabled
            ? "border-none bg-form-element-disabled-bg cursor-not-allowed"
            : "cursor-pointer",
          error
            ? "border-danger"
            : "border-form-element-border hover:border-primary"
        )}
      >
        <span
          className={classNames(
            "flex w-4.5 h-4.5 bg-gray border border-px border-form-element-border rounded-full transition-all",
            check ? "ml-[21px] " : "ml-0.5"
          )}
        ></span>
      </span>
      <label className="text-base font-extralight text-text-secondary">
        {label}
      </label>
    </fieldset>
  );
};

export { Switch };
