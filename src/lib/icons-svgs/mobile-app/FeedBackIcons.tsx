// FeedBackIcons.tsx 
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface FeedBackIcons {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const FeedBackIcons = ({
  isActive = false,
  width = 60,
  height = 60,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#ffffff',
}: FeedBackIcons) => {
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
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300"
    >
      <path d="M55 21.25C55 30.225 47.725 37.5 38.75 37.5C38.325 37.5 37.875 37.475 37.45 37.45C36.825 29.525 30.475 23.175 22.55 22.55C22.525 22.125 22.5 21.675 22.5 21.25C22.5 12.275 29.775 5 38.75 5C47.725 5 55 12.275 55 21.25Z" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M37.5 38.75C37.5 47.725 30.225 55 21.25 55C12.275 55 5 47.725 5 38.75C5 29.775 12.275 22.5 21.25 22.5C21.675 22.5 22.125 22.525 22.55 22.55C30.475 23.175 36.825 29.525 37.45 37.45C37.475 37.875 37.5 38.325 37.5 38.75Z" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.975 5H7.5C6.125 5 5 6.125 5 7.5V13.975C5 16.2 7.69998 17.325 9.27498 15.75L15.75 9.27498C17.3 7.69998 16.2 5 13.975 5Z" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M46.0263 55.0006H52.5012C53.8762 55.0006 55.0012 53.8756 55.0012 52.5006V46.0256C55.0012 43.8006 52.3013 42.6757 50.7263 44.2507L44.2513 50.7257C42.7013 52.3007 43.8013 55.0006 46.0263 55.0006Z" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default FeedBackIcons;
