import classNames from "classnames";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon?: string;
  variant?: "primary" | "outline";
  size?: "sm" | "base" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger";
  isRounded?: boolean;
  className?: string;
};
const Button: React.FC<Props> = ({
  label,
  variant = "primary",
  size = "base",
  color = "primary",
  isRounded,
  className,
  children,
  ...props
}) => {
  const buttonVariant = {
    variant: {
      primary:
        "bg-primary text-light-bg hover:bg-primary-400 active:bg-primary-600",
      outline:
        "bg-transparent text-primary border border-px border-primary hover:border-primary-400 active:border-primary-600",
    },
    size: {
      sm: "px-2.5 py-5",
      base: "px-8 py-4",
      lg: "px-6 py-5 text-2xl",
    },
    color: {
      primary: "",
      secondary: "",
      tertiary: "",
      success: "",
      warning: "",
      danger: "",
    },
  };

  return (
    <button
      className={classNames(
        "flex items-center gap-2.5 cursor-pointer transition-all font-medium text-sm",
        buttonVariant.variant[variant],
        buttonVariant.size[size],
        buttonVariant.color[color],
        isRounded ? "rounded-full" : "rounded-md",
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};
export { Button };
