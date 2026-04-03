'use client';

import { useEffect, useRef, useState } from 'react';
import { useSplashDone } from '../PageWrapper';

interface PopupTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
  className?: string;
  /** Base delay in ms before the first word starts */
  baseDelay?: number;
  /** Delay in ms between each word */
  wordDelay?: number;
  /** If true, triggers on scroll visibility instead of splash done */
  onScroll?: boolean;
}

/**
 * Renders text word-by-word with a smooth popup animation (translate up + fade in).
 * - Default: triggers after splash screen finishes (great for above-the-fold content)
 * - onScroll: triggers when the element scrolls into view (great for below-the-fold sections)
 */
export default function PopupText({
  text,
  as: Tag = 'p',
  className = '',
  baseDelay = 0,
  wordDelay = 50,
  onScroll = false,
}: PopupTextProps) {
  const splashDone = useSplashDone();
  const ref = useRef<HTMLElement>(null);
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    if (!onScroll) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onScroll]);

  // Determine if animation should trigger
  const isActive = onScroll ? scrollVisible : splashDone;

  const words = text.split(' ');

  return (
    <Tag
      ref={ref as unknown as React.Ref<HTMLHeadingElement> & React.Ref<HTMLParagraphElement> & React.Ref<HTMLSpanElement>}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.3em' }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: isActive ? `${baseDelay + i * wordDelay}ms` : '0ms',
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
