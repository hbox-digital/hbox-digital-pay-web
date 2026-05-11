import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}
export function Section({
  children,
  className = '',
  id
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px'
  });
  return <motion.section ref={ref} id={id} initial={{
    opacity: 0,
    y: 50
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 50
  }} transition={{
    duration: 0.8,
    ease: 'easeOut'
  }} className={`py-10 md:py-20 px-6 md:px-20 max-w-7xl mx-auto relative ${className}`}>
      {children}
    </motion.section>;
}