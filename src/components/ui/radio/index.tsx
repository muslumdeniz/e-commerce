import classNames from "classnames";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
};

export const Radio: React.FC<Props> = ({ label, error, ...props }) => {
  return (
    <fieldset className="flex gap-3.5 relative">
      <input
        className={classNames(
          // Default
          "appearance-none border border-px rounded-full w-6 h-6 cursor-pointer transition-all",
          // Active
          " checked:border-[7px] checked:border-primary",
          // Disabled
          "disabled:border-none disabled:bg-form-element-disabled-bg disabled:cursor-not-allowed",
          error
            ? "border-danger"
            : "border-form-element-border hover:border-primary"
        )}
        type="radio"
        {...props}
      />
      <label className="text-base font-extralight text-text-secondary">
        {label}
      </label>
    </fieldset>
  );
};
