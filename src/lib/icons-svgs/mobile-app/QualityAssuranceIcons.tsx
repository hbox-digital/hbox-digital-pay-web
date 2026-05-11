
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface QualityAssuranceIcons {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const QualityAssuranceIcons = ({
  isActive = false,
  width = 60,
  height = 60,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#ffffff',
}: QualityAssuranceIcons) => {
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
        d="M18.6992 45.8752L26.4492 51.8752C27.4492 52.8752 29.6992 53.3752 31.1992 53.3752H40.6992C43.6992 53.3752 46.9492 51.1252 47.6992 48.1252L53.6992 29.8752C54.9492 26.3752 52.6992 23.3752 48.9492 23.3752H38.9492C37.4492 23.3752 36.1992 22.1252 36.4492 20.3752L37.6992 12.3752C38.1992 10.1252 36.6992 7.62516 34.4492 6.87516C32.4492 6.12516 29.9492 7.12516 28.9492 8.62516L18.6992 23.8752"
        stroke={strokeColor}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M5.94922 45.875V21.375C5.94922 17.875 7.44922 16.625 10.9492 16.625H13.4492C16.9492 16.625 18.4492 17.875 18.4492 21.375V45.875C18.4492 49.375 16.9492 50.625 13.4492 50.625H10.9492C7.44922 50.625 5.94922 49.375 5.94922 45.875Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default QualityAssuranceIcons;
