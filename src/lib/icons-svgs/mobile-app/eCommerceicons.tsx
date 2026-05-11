'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ECommerceicons {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const ECommerceicons = ({
  isActive = false,
  width = 80,
  height = 80,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#FFE100',
}:ECommerceicons) => {
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
        d="M25 25.5667V22.3334C25 14.8334 31.0333 7.4667 38.5333 6.7667C47.4667 5.90003 55 12.9334 55 21.7V26.3"
        stroke={strokeColor}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.0014 73.3332H50.0014C63.4014 73.3332 65.8014 67.9665 66.5014 61.4332L69.0014 41.4332C69.9014 33.2998 67.568 26.6665 53.3347 26.6665H26.668C12.4347 26.6665 10.1014 33.2998 11.0014 41.4332L13.5014 61.4332C14.2014 67.9665 16.6014 73.3332 30.0014 73.3332Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.6523 40.0002H51.6822"
        stroke={strokeColor}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.3163 40.0002H28.3463"
        stroke={strokeColor}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ECommerceicons;
