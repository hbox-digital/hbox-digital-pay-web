// Icon.tsx
import React from "react";
import { iconMap} from "./Icon";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  onClick,
  disabled = false,
}) => {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) return null;

  return (
    <LucideIcon
      size={size}
      color={disabled ? "#9CA3AF" : color} // gray-400 fallback
      className={`${className} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
    />
  );
};

export default Icon;
