// Retailsicons
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface Retailsicons {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const Retailsicons = ({
  isActive = false,
  width = 80,
  height = 80,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#FFE100',
}: Retailsicons) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
      className="transition-colors duration-300 group-hover:[&_*]:stroke-[#FFE100]"
    >
      <path
        d="M10.0332 37.3999V52.3666C10.0332 67.3332 16.0332 73.3332 30.9999 73.3332H48.9665C63.9332 73.3332 69.9332 67.3332 69.9332 52.3666V37.3999"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.0009 39.9998C46.1009 39.9998 50.6009 35.0332 50.0009 28.9332L47.8009 6.6665H32.2343L30.0009 28.9332C29.4009 35.0332 33.9009 39.9998 40.0009 39.9998Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M61.0327 39.9998C67.766 39.9998 72.6993 34.5332 72.0327 27.8332L71.0993 18.6665C69.8993 9.99984 66.566 6.6665 57.8327 6.6665H47.666L49.9993 30.0332C50.566 35.5332 55.5327 39.9998 61.0327 39.9998Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8006 39.9998C24.3006 39.9998 29.2673 35.5332 29.8006 30.0332L30.5339 22.6665L32.1339 6.6665H21.9673C13.2339 6.6665 9.90058 9.99984 8.70058 18.6665L7.80058 27.8332C7.13392 34.5332 12.0673 39.9998 18.8006 39.9998Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.9993 56.6665C34.4327 56.6665 31.666 59.4332 31.666 64.9998V73.3332H48.3327V64.9998C48.3327 59.4332 45.566 56.6665 39.9993 56.6665Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Retailsicons;
