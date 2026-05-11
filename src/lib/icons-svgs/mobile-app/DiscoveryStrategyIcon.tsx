'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface DiscoveryStrategyIconProps {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const DiscoveryStrategyIcon = ({
  isActive = false,
  width = 60,
  height = 60,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#ffffff',
}: DiscoveryStrategyIconProps) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
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
        d="M23 29.25H35.5"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.25 35.5V23"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.75 52.5C41.8668 52.5 52.5 41.8668 52.5 28.75C52.5 15.6332 41.8668 5 28.75 5C15.6332 5 5 15.6332 5 28.75C5 41.8668 15.6332 52.5 28.75 52.5Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 55L50 50"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DiscoveryStrategyIcon;
