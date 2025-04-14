import classNames from "classnames";
import Icons from "../icons";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
};

export const Checkbox: React.FC<Props> = ({ label, error, ...props }) => {
  return (
    <fieldset className="flex items-start gap-3.5 relative">
      <div className="relative flex-shrink-0">
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
      </div>
      <label className="text-base font-extralight text-text-secondary leading-snug">
        {label}
      </label>
    </fieldset>
  );
};
