import React from "react";

function Button({
  children,
  type = "button",
  bgcolor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`pr-4 pl-2 rounded-xl ${bgcolor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
