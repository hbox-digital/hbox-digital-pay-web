
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface AndroidAppConsultation {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const AndroidAppConsultation = ({
  isActive = false,
  width = 40,
  height = 40,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#ffffff',
}: AndroidAppConsultation) => {
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
        d="M30.0008 11.9333C29.9008 11.9166 29.7841 11.9166 29.6841 11.9333C27.3841 11.8499 25.5508 9.96659 25.5508 7.63325C25.5508 5.24992 27.4674 3.33325 29.8508 3.33325C32.2341 3.33325 34.1508 5.26659 34.1508 7.63325C34.1341 9.96659 32.3008 11.8499 30.0008 11.9333Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.2844 24.0666C30.5677 24.4499 33.0844 24.0499 34.8511 22.8666C37.2011 21.2999 37.2011 18.7333 34.8511 17.1666C33.0677 15.9833 30.5177 15.5833 28.2344 15.9833"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.95078 11.9333C10.0508 11.9166 10.1674 11.9166 10.2674 11.9333C12.5674 11.8499 14.4008 9.96659 14.4008 7.63325C14.4008 5.24992 12.4841 3.33325 10.1008 3.33325C7.71745 3.33325 5.80078 5.26659 5.80078 7.63325C5.81745 9.96659 7.65078 11.8499 9.95078 11.9333Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6671 24.0666C9.38372 24.4499 6.86706 24.0499 5.10039 22.8666C2.75039 21.2999 2.75039 18.7333 5.10039 17.1666C6.88372 15.9833 9.43372 15.5833 11.7171 15.9833"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9988 24.3835C19.8988 24.3668 19.7822 24.3668 19.6822 24.3835C17.3822 24.3001 15.5488 22.4168 15.5488 20.0835C15.5488 17.7001 17.4655 15.7834 19.8488 15.7834C22.2322 15.7834 24.1488 17.7168 24.1488 20.0835C24.1322 22.4168 22.2988 24.3168 19.9988 24.3835Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1492 29.6333C12.7992 31.2 12.7992 33.7667 15.1492 35.3333C17.8159 37.1167 22.1826 37.1167 24.8492 35.3333C27.1992 33.7667 27.1992 31.2 24.8492 29.6333C22.1992 27.8667 17.8159 27.8667 15.1492 29.6333Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AndroidAppConsultation;
