'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ProductArchitectureIcon {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const ProductArchitectureIcon = ({
  isActive = false,
  width = 60,
  height = 60,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#ffffff',
}: ProductArchitectureIcon) => {
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
        d="M5 42.6504H30"
        stroke={strokeColor}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5499 33.75H24.4501C28.9001 33.75 30 34.85 30 39.25V49.525C30 53.925 28.9001 55.025 24.4501 55.025H10.5499C6.09993 55.025 5 53.925 5 49.525V39.25C5 34.85 6.09993 33.75 10.5499 33.75Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 37.5C55 47.175 47.175 55 37.5 55L40.125 50.625"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 22.5C5 12.825 12.825 5 22.5 5L19.875 9.375"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.25 27.5C52.4632 27.5 57.5 22.4632 57.5 16.25C57.5 10.0368 52.4632 5 46.25 5C40.0368 5 35 10.0368 35 16.25C35 22.4632 40.0368 27.5 46.25 27.5Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProductArchitectureIcon;
