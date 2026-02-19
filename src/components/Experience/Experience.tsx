import { useState, type ReactNode } from 'react';
import { FiBriefcase, FiChevronDown, FiChevronUp, FiAward } from 'react-icons/fi';
import Section from '../Section/Section';
import { RESUME_DATA } from '../../data/resume-data';
import './Experience.scss';

export default function Experience(): ReactNode {
  const { experience } = RESUME_DATA;
  const [expandedId, setExpandedId] = useState<string | null>(experience[0]?.id ?? null);

  const toggleExpand = (id: string): void => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey and key contributions"
    >
      <div className="experience">
        <div className="experience__timeline">
          {experience.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className={`experience__item ${isExpanded ? 'experience__item--expanded' : ''}`}>
                <div className="experience__marker">
                  <div className="experience__marker-dot">
                    <FiBriefcase size={16} />
                  </div>
                  {index < experience.length - 1 && <div className="experience__marker-line" />}
                </div>

                <div className="experience__card">
                  <button
                    className="experience__card-header"
                    onClick={() => toggleExpand(exp.id)}
                    type="button"
                    aria-expanded={isExpanded}
                  >
                    <div className="experience__card-info">
                      <h3 className="experience__role">{exp.role}</h3>
                      <p className="experience__company">{exp.company}</p>
                      <div className="experience__meta">
                        <span className="experience__period">{exp.period}</span>
                        <span className="experience__location">{exp.location}</span>
                      </div>
                    </div>
                    <span className="experience__toggle-icon">
                      {isExpanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="experience__card-body">
                      {exp.techStack && (
                        <div className="experience__tech-stack">
                          {exp.techStack.map((tech) => (
                            <span key={tech} className="experience__tech-tag">{tech}</span>
                          ))}
                        </div>
                      )}

                      <ul className="experience__highlights">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="experience__highlight">{highlight}</li>
                        ))}
                      </ul>

                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="experience__achievements">
                          <h4 className="experience__achievements-title">
                            <FiAward size={16} />
                            Key Achievements
                          </h4>
                          <ul className="experience__achievements-list">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="experience__achievement">{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
