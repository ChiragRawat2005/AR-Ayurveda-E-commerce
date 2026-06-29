import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  icon,
  to,
  onClick,
  type = "button",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-green-700 text-white hover:bg-green-800",

    secondary:
      "bg-gray-900 text-white hover:bg-black",

    outline:
      "border border-green-700 text-green-700 hover:bg-green-700 hover:text-white",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-3",

    lg: "px-8 py-4 text-lg",
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "cursor-not-allowed opacity-50" : ""}
  `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;