
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface Healthcareicon {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const Healthcareicon = ({
  isActive = false,
  width = 80,
  height = 80,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#FFE100',
}: Healthcareicon) => {
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
        d="M29.8997 73.3332H49.8997C66.5664 73.3332 73.2331 66.6665 73.2331 49.9998V29.9998C73.2331 13.3332 66.5664 6.6665 49.8997 6.6665H29.8997C13.2331 6.6665 6.56641 13.3332 6.56641 29.9998V49.9998C6.56641 66.6665 13.2331 73.3332 29.8997 73.3332Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.56641 42.3334L26.5664 42.2667C29.0664 42.2667 31.8664 44.1667 32.7997 46.5L36.5997 56.1C37.4664 58.2667 38.8331 58.2667 39.6997 56.1L47.3331 36.7334C48.0664 34.8667 49.4331 34.8 50.3664 36.5667L53.8331 43.1334C54.8664 45.1 57.5331 46.7 59.7331 46.7H73.2664"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Healthcareicon;
