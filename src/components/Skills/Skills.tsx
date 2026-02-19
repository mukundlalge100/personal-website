import type { ReactNode } from 'react';
import { FiServer, FiMonitor, FiCloud, FiDatabase, FiActivity, FiCpu } from 'react-icons/fi';
import Section from '../Section/Section';
import { RESUME_DATA } from '../../data/resume-data';
import './Skills.scss';

const CATEGORY_ICONS: Record<string, ReactNode> = {
  Backend: <FiServer size={22} />,
  Frontend: <FiMonitor size={22} />,
  'Cloud & DevOps': <FiCloud size={22} />,
  'Messaging & Data': <FiDatabase size={22} />,
  'Testing & Monitoring': <FiActivity size={22} />,
  'AI & Innovation': <FiCpu size={22} />,
};

export default function Skills(): ReactNode {
  const { skills } = RESUME_DATA;

  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies and tools I work with on a daily basis"
      variant="alternate"
    >
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill.category} className="skills__card">
            <div className="skills__card-header">
              <span className="skills__card-icon">{CATEGORY_ICONS[skill.category]}</span>
              <h3 className="skills__card-title">{skill.category}</h3>
            </div>
            <div className="skills__tags">
              {skill.items.map((item) => (
                <span key={item} className="skills__tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
