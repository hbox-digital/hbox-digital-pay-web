'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface AgileDevelopmentIcon {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const AgileDevelopmentIcon = ({
  isActive = false,
  width = 60,
  height = 60,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#ffffff',
}: AgileDevelopmentIcon) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const strokeColor = isActive
    ? activeColor
    : resolvedTheme === 'dark'
    ? darkColor
    : lightColor;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300"
    >
      <path
        d="M16.1 5H43.875C52.775 5 55 7.225 55 16.1V31.925C55 40.825 52.775 43.025 43.9 43.025H16.1C7.225 43.05 5 40.825 5 31.95V16.1C5 7.225 7.225 5 16.1 5Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 43.0498V54.9998"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 32.5H55"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 55H41.25"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AgileDevelopmentIcon;
