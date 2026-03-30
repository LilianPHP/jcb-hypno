'use client';
import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  separator?: string;
  className?: string;
  suffix?: string;
}

export default function CountUp({
  to, from = 0, duration = 2, delay = 0, separator = '', className = '', suffix = ''
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, { damping, stiffness });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const formatValue = useCallback((latest: number) => {
    const opts = { useGrouping: !!separator, maximumFractionDigits: 0, minimumFractionDigits: 0 };
    const n = Intl.NumberFormat('fr-FR', opts).format(Math.round(latest));
    return (separator ? n.replace(/\s/g, separator) : n) + suffix;
  }, [separator, suffix]);

  useEffect(() => {
    if (ref.current) ref.current.textContent = formatValue(from);
  }, [from, formatValue]);

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => motionValue.set(to), delay * 1000);
    return () => clearTimeout(t);
  }, [isInView, motionValue, to, delay]);

  useEffect(() => {
    return springValue.on('change', latest => {
      if (ref.current) ref.current.textContent = formatValue(latest);
    });
  }, [springValue, formatValue]);

  return <span ref={ref} className={className} />;
}
