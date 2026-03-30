'use client';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'chars';
  direction?: 'top' | 'bottom';
  stepDuration?: number;
}

export default function BlurText({
  text, delay = 120, className = '', animateBy = 'words',
  direction = 'bottom', stepDuration = 0.4,
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const from = direction === 'top'
    ? { filter: 'blur(12px)', opacity: 0, y: -30 }
    : { filter: 'blur(12px)', opacity: 0, y: 30 };

  const to = [
    { filter: 'blur(4px)', opacity: 0.6, y: direction === 'top' ? 4 : -4 },
    { filter: 'blur(0px)', opacity: 1, y: 0 },
  ];

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.25em' }}>
      {elements.map((seg, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-[transform,filter,opacity]"
          initial={from}
          animate={inView ? { filter: ['blur(12px)', 'blur(4px)', 'blur(0px)'], opacity: [0, 0.6, 1], y: direction === 'top' ? [-30, 4, 0] : [30, -4, 0] } : from}
          transition={{ duration: stepDuration * 2, delay: (i * delay) / 1000, ease: 'easeOut' }}
        >
          {seg}
        </motion.span>
      ))}
    </p>
  );
}
