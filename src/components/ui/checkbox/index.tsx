import classNames from "classnames";
import { IconTypes } from "../icons/_model";
import Icons from "../icons";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: IconTypes;
  error?: boolean;
};

export const Checkbox: React.FC<Props> = ({ label, icon, error, ...props }) => {
  return (
    <fieldset className="flex gap-3.5 relative">
      <input
        className={classNames(
          // Default
          "peer appearance-none border border-px rounded-md w-6 h-6 cursor-pointer transition-all",
          // Active
          "checked:bg-primary checked:border-primary",
          // Disabled
          "disabled:border-none disabled:bg-form-element-disabled-bg disabled:cursor-not-allowed",
          error
            ? "border-danger"
            : "border-form-element-border hover:border-primary"
        )}
        type="checkbox"
        {...props}
      />
      <Icons
        className="text-white absolute top-[3px] left-[3px] pointer-events-none transition-opacity opacity-0 peer-checked:opacity-100"
        name="Check"
        size={18}
      />
      <label className="text-base font-extralight text-text-secondary">
        {label}
      </label>
    </fieldset>
  );
};
