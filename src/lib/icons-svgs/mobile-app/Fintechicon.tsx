'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface Fintechicon {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const Fintechicon = ({
  isActive = false,
  width = 80,
  height = 80,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#FFE100',
}: Fintechicon) => {
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
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300"
    >
      <path
        d="M28.9062 47.7663C28.9062 52.0663 32.2063 55.533 36.3063 55.533H44.6729C48.2396 55.533 51.1396 52.4996 51.1396 48.7663C51.1396 44.6996 49.3729 43.2663 46.7396 42.333L33.3062 37.6663C30.6729 36.733 28.9062 35.2996 28.9062 31.233C28.9062 27.4996 31.8062 24.4663 35.3729 24.4663H43.7396C47.8396 24.4663 51.1396 27.933 51.1396 32.233"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 20V60"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.0013 73.3332H30.0013C13.3346 73.3332 6.66797 66.6665 6.66797 49.9998V29.9998C6.66797 13.3332 13.3346 6.6665 30.0013 6.6665H50.0013C66.668 6.6665 73.3346 13.3332 73.3346 29.9998V49.9998C73.3346 66.6665 66.668 73.3332 50.0013 73.3332Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Fintechicon;
