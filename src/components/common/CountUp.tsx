"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
  value: string; // "150+", "98%", "15+"
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ value, duration = 1.5 }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  const numericValue = Number(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, numericValue, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default CountUp;