import classNames from "classnames";
import Icons from "../icons";
import { IconTypes } from "../icons/_model";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  prefixIcon?: IconTypes;
  suffixIcon?: IconTypes;
  variant?: "primary" | "outline";
  size?: "sm" | "base" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "light"
    | "success"
    | "warning"
    | "danger";
  isRounded?: boolean;
  isIconButton?: boolean;
  className?: string;
  iconSize?: number;
};

const Button = ({
  label,
  prefixIcon,
  suffixIcon,
  variant = "primary",
  size = "base",
  color = "primary",
  isRounded,
  isIconButton,
  className,
  iconSize,
  children,
  ...props
}: Props) => {
  const calculatedIconSize =
    iconSize ?? (size === "lg" ? 18 : size === "base" ? 16 : 12);

  const buttonVariant = {
    variant: {
      primary: "text-light-bg",
      outline: "bg-transparent border border-px ",
    },
    size: {
      icon: {
        sm: "p-4",
        base: "p-4",
        lg: "p-4 text-2xl",
      },
      label: {
        sm: "py-2.5 px-4 ",
        base: "py-4 px-8",
        lg: "py-4 px-8 text-2xl",
      },
    },
    color: {
      primary: {
        primary: "bg-primary hover:bg-primary-400 active:bg-primary-600",
        outline:
          "text-primary border-primary hover:border-primary-400 active:border-primary-600",
      },
      secondary: {
        primary: "bg-secondary hover:bg-secondary-400 active:bg-secondary-600",
        outline:
          "text-secondary border-secondary hover:border-secondary-400 active:border-secondary-600",
      },
      tertiary: {
        primary: "bg-tertiary hover:bg-tertiary-400 active:bg-tertiary-600",
        outline:
          "text-tertiary border-tertiary hover:border-tertiary-400 active:border-tertiary-600",
      },
      light: {
        primary: "bg-light-bg text-tertiary",
        outline: "text-light-bg border-light-bg",
      },
      success: {
        primary: "bg-success hover:bg-success-400 active:bg-success-600",
        outline:
          "text-success border-success hover:border-success-400 active:border-success-600",
      },
      warning: {
        primary: "bg-warning hover:bg-warning-400 active:bg-warning-600",
        outline:
          "text-warning border-warning hover:border-warning-400 active:border-warning-600",
      },
      danger: {
        primary: "bg-danger hover:bg-danger-400 active:bg-danger-600",
        outline:
          "text-danger border-danger hover:border-danger-400 active:border-danger-600",
      },
    },
  };

  return (
    <button
      className={classNames(
        "flex items-center cursor-pointer transition-all font-medium text-sm h-fit",
        buttonVariant.variant[variant],
        buttonVariant.size[!isIconButton && label ? "label" : "icon"][size],
        buttonVariant.color[color][variant],
        isIconButton ? "gap-1 border-none" : "gap-2.5",
        isRounded ? "rounded-full" : "rounded-md",
        className
      )}
      {...props}
    >
      {prefixIcon && <Icons name={prefixIcon} size={calculatedIconSize} />}
      {label}
      {suffixIcon && <Icons name={suffixIcon} size={calculatedIconSize} />}
    </button>
  );
};

export { Button };
