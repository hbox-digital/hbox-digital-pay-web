// Educationicon
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface Educationicon {
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  lightColor?: string;
  darkColor?: string;
}

const Educationicon = ({
  isActive = false,
  width = 80,
  height = 80,
  activeColor = '#FFE100',
  lightColor = '#000000',
  darkColor = '#FFE100',
}: Educationicon) => {
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
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300"
    >
      <path
        d="M33.4991 8.43345L13.4324 21.5335C6.99909 25.7335 6.99909 35.1335 13.4324 39.3335L33.4991 52.4335C37.0991 54.8001 43.0324 54.8001 46.6324 52.4335L66.5991 39.3335C72.9991 35.1335 72.9991 25.7668 66.5991 21.5668L46.6324 8.46679C43.0324 6.06679 37.0991 6.06679 33.4991 8.43345Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.7658 43.6001L18.7324 59.2334C18.7324 63.4668 21.9991 68.0001 25.9991 69.3334L36.6324 72.8668C38.4658 73.4668 41.4991 73.4668 43.3658 72.8668L53.9991 69.3334C57.9991 68.0001 61.2658 63.4668 61.2658 59.2334V43.7668"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M71.334 50V30"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Educationicon;
