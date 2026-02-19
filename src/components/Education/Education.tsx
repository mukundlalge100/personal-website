import type { ReactNode } from 'react';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import Section from '../Section/Section';
import { RESUME_DATA } from '../../data/resume-data';
import './Education.scss';

export default function Education(): ReactNode {
  const { education } = RESUME_DATA;

  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic background and achievements"
      variant="alternate"
    >
      <div className="education">
        {education.map((edu) => (
          <div key={edu.institution} className="education__card">
            <div className="education__icon">
              <FiBookOpen size={24} />
            </div>
            <div className="education__details">
              <h3 className="education__degree">{edu.degree}</h3>
              <p className="education__institution">{edu.institution}</p>
              <div className="education__meta">
                <span className="education__period">{edu.period}</span>
                <span className="education__location">{edu.location}</span>
              </div>
              {edu.score && (
                <div className="education__score">
                  <span className="education__score-label">Score:</span>
                  <span className="education__score-value">{edu.score}</span>
                </div>
              )}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="education__highlights">
                  {edu.highlights.map((highlight, i) => (
                    <div key={i} className="education__highlight">
                      <FiAward size={14} className="education__highlight-icon" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
