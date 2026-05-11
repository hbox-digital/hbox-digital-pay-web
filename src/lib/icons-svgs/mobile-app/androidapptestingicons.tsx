
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface AndroidAppTestingicons {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'envelope' | 'arrows'; // optional type to switch icons
}

const AndroidAppTestingicons = ({
  isActive = false,
  width = 40,
  height = 40,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#ffffff',
  type = 'default', // default icon
}: AndroidAppTestingicons) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const strokeColor = isActive
    ? activeColor
    : resolvedTheme === 'light'
    ? lightColor
    : darkColor;

  if (type === 'envelope') {
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
          d="M16.6667 36.6667H23.3333C31.6667 36.6667 35 33.3334 35 25V15C35 6.66671 31.6667 3.33337 23.3333 3.33337H16.6667C8.33333 3.33337 5 6.66671 5 15V25C5 33.3334 8.33333 36.6667 16.6667 36.6667Z"
          stroke={strokeColor}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.75 13.8167C23.7667 9.38337 16.2333 9.38337 11.25 13.8167L14.8833 19.65C17.8 17.05 22.2 17.05 25.1167 19.65L28.75 13.8167Z"
          stroke={strokeColor}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'arrows') {
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
          d="M32.5667 10.9L27.45 5.78337C25.8833 4.2167 23.7667 3.3501 21.55 3.3501H13.3333C8.33333 3.3501 5 6.68343 5 11.6834V28.3501C5 33.3501 8.33333 36.6834 13.3333 36.6834H26.6667C31.6667 36.6834 35 33.3501 35 28.3501V16.8001C35 14.5668 34.1167 12.45 32.5667 10.9Z"
          stroke={strokeColor}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8333 23.3333L12.5 26.6666L15.8333 29.9999"
          stroke={strokeColor}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.166 23.3333L27.4993 26.6666L24.166 29.9999"
          stroke={strokeColor}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // default icon (previous one)
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
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.666 35.7833V28.25"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33398 21.5834H16.6673"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2324 35.7833H16.6658"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.6661 21.3334V30.85C36.6661 34.8 35.6828 35.7834 31.7328 35.7834H25.8161C21.8661 35.7834 20.8828 34.8 20.8828 30.85V21.3334C20.8828 17.3834 21.8661 16.4 25.8161 16.4H31.7328C35.6828 16.4 36.6661 17.3834 36.6661 21.3334Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.7402 30.4167H28.7552"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AndroidAppTestingicons;
