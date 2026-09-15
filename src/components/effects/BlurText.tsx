'use client';
import { motion } from 'motion/react';
import { createElement, useEffect, useRef, useState } from 'react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'chars';
  direction?: 'top' | 'bottom';
  stepDuration?: number;
  /** Balise rendue. `span` pour l'imbriquer dans un titre : un <p> dans un <h1> est invalide. */
  as?: 'p' | 'span' | 'h1' | 'h2';
}

export default function BlurText({
  text, delay = 120, className = '', animateBy = 'words',
  direction = 'bottom', stepDuration = 0.4, as = 'p',
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

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

  // Mots séparés par de vrais espaces dans le DOM, pas par un `gap` CSS : sinon le
  // texte extrait (Google, lecteurs d'écran, aperçus) devient « Libérezvotrepotentiel ».
  // Des spans inline-block séparés par un espace s'espacent et passent à la ligne
  // exactement comme des mots.
  const children = elements.flatMap((seg, i) => {
    const span = (
      <motion.span
        key={i}
        className="inline-block will-change-[transform,filter,opacity]"
        initial={from}
        animate={inView ? { filter: ['blur(12px)', 'blur(4px)', 'blur(0px)'], opacity: [0, 0.6, 1], y: direction === 'top' ? [-30, 4, 0] : [30, -4, 0] } : from}
        transition={{ duration: stepDuration * 2, delay: (i * delay) / 1000, ease: 'easeOut' }}
      >
        {animateBy === 'chars' && seg === ' ' ? '\u00A0' : seg}
      </motion.span>
    );
    return animateBy === 'words' && i < elements.length - 1 ? [span, ' '] : [span];
  });

  // createElement plutôt qu'une balise JSX variable : le typage d'une union de
  // balises croise les props de toutes, et rejette les enfants.
  return createElement(as, { ref, className }, children);
}
