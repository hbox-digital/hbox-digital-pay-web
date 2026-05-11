// AndroidAppConsultationIcons
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface AndroidAppConsultationIconsProps {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const AndroidAppConsultationIcons = ({
  isActive = false,
  width = 40,
  height = 40,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#ffffff',
}: AndroidAppConsultationIconsProps) => {
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
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300  group-hover:[&_*]:stroke-[#FFE100]"
    >
      <path
        d="M14.9987 36.6667H24.9987C29.9987 36.6667 31.6654 35 31.6654 30V10C31.6654 5.00004 29.9987 3.33337 24.9987 3.33337H14.9987C9.9987 3.33337 8.33203 5.00004 8.33203 10V30C8.33203 35 9.9987 36.6667 14.9987 36.6667Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M20 30C22.7614 30 25 27.7614 25 25C25 22.2386 22.7614 20 20 20C17.2386 20 15 22.2386 15 25C15 27.7614 17.2386 30 20 30Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M20 15C21.3807 15 22.5 13.8807 22.5 12.5C22.5 11.1193 21.3807 10 20 10C18.6193 10 17.5 11.1193 17.5 12.5C17.5 13.8807 18.6193 15 20 15Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AndroidAppConsultationIcons;
