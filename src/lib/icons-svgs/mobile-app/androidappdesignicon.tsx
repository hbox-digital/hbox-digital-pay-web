'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface AndroidAppDesignIcons {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
  hoverColor?: string;
}

const AndroidAppDesignIcons = ({
  isActive = false,
  width = 40,
  height = 40,
  activeColor = '#FFE100',
  hoverColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#ffffff',
}: AndroidAppDesignIcons) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const baseColor = isActive
    ? activeColor
    : resolvedTheme === 'light'
    ? lightColor
    : darkColor;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300 group-hover:[&_*]:stroke-[#FFE100]"
    >
      <path
        d="M16.6673 28.25H10.3507C4.73398 28.25 3.33398 26.85 3.33398 21.2333V11.2333C3.33398 5.61668 4.73398 4.21667 10.3507 4.21667H27.9007C33.5173 4.21667 34.9173 5.61668 34.9173 11.2333"
        stroke={baseColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16.666 35.7833V28.25"
        stroke={baseColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3.33398 21.5834H16.6673"
        stroke={baseColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M11.2324 35.7833H16.6658"
        stroke={baseColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M36.6661 21.3334V30.85C36.6661 34.8 35.6828 35.7834 31.7328 35.7834H25.8161C21.8661 35.7834 20.8828 34.8 20.8828 30.85V21.3334C20.8828 17.3834 21.8661 16.4 25.8161 16.4H31.7328C35.6828 16.4 36.6661 17.3834 36.6661 21.3334Z"
        stroke={baseColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M28.7402 30.4167H28.7552"
        stroke={baseColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AndroidAppDesignIcons;
