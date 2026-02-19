import { useState, useEffect } from 'react';
import type { SectionId } from '../types/resume';

const OFFSET = 100;

export function useScrollSpy(sectionIds: SectionId[]): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + OFFSET;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }

      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}
