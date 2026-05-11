// CustomAndroidAppicons
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface CustomAndroidAppicons {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const CustomAndroidAppicons = ({
  isActive = false,
  width = 40,
  height = 40,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#ffffff',
}: CustomAndroidAppicons) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const strokeColor = isActive
    ? activeColor
    : resolvedTheme === 'light'
    ? lightColor
    : darkColor;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300 group-hover:[&_*]:stroke-[#FFE100]"
    >
      {/* Outer Shape */}
      <path
        d="M16.6667 36.6667H23.3333C31.6667 36.6667 35 33.3334 35 25V15C35 6.66671 31.6667 3.33337 23.3333 3.33337H16.6667C8.33333 3.33337 5 6.66671 5 15V25C5 33.3334 8.33333 36.6667 16.6667 36.6667Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inner Shape */}
      <path
        d="M28.75 13.8167C23.7667 9.38337 16.2333 9.38337 11.25 13.8167L14.8833 19.65C17.8 17.05 22.2 17.05 25.1167 19.65L28.75 13.8167Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CustomAndroidAppicons;
