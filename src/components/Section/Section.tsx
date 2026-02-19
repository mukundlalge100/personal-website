import type { ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import type { SectionId } from '../../types/resume';
import './Section.scss';

interface SectionProps {
  id: SectionId;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  variant?: 'default' | 'alternate' | 'dark';
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  variant = 'default',
  className = '',
}: SectionProps): ReactNode {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section
      id={id}
      ref={ref}
      className={`section section--${variant} ${isInView ? 'section--visible' : ''} ${className}`}
    >
      <div className="section__container">
        {title && (
          <div className="section__header">
            <h2 className="section__title">{title}</h2>
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
            <div className="section__divider" />
          </div>
        )}
        <div className="section__content">{children}</div>
      </div>
    </section>
  );
}
