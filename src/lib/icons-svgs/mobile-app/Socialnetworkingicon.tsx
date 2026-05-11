'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface Socialnetworkingicon {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const Socialnetworkingicon = ({
  isActive = false,
  width = 80,
  height = 80,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#FFE100',
}: Socialnetworkingicon) => {
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
      className="transition-colors duration-300"
    >
      <path
        d="M73.3327 39.9998C73.3327 21.5998 58.3993 6.6665 39.9993 6.6665C21.5993 6.6665 6.66602 21.5998 6.66602 39.9998C6.66602 58.3998 21.5993 73.3332 39.9993 73.3332"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6667 10H30C23.5 29.4667 23.5 50.5333 30 70H26.6667"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 10C53.2333 19.7333 54.8666 29.8667 54.8666 40"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 53.3333V50C19.7333 53.2333 29.8667 54.8667 40 54.8667"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 30C29.4667 23.5 50.5333 23.5 70 30"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65.0005 48.9999C63.7672 48.6332 62.3672 48.3999 60.8338 48.3999C53.9338 48.3999 48.3672 53.9999 48.3672 60.8665C48.3672 67.7665 53.9672 73.3332 60.8338 73.3332C67.7005 73.3332 73.3005 67.7332 73.3005 60.8665C73.3005 58.2999 72.5338 55.8998 71.2004 53.9331"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.7995 49.333L62.6328 44.5664"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.8003 49.333L61.9336 52.8663"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Socialnetworkingicon;
