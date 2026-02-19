import type { ReactNode } from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import Section from '../Section/Section';
import { RESUME_DATA } from '../../data/resume-data';
import './About.scss';

export default function About(): ReactNode {
  const { personal } = RESUME_DATA;

  return (
    <Section id="about" title="About Me" subtitle="A brief introduction about myself and what I do">
      <div className="about">
        <div className="about__text">
          <p className="about__description">{personal.summary}</p>
          <p className="about__extra">
            With a strong foundation in both frontend and backend technologies, I specialize in building
            end-to-end solutions that are performant, maintainable, and user-centric. I&apos;m passionate about
            leveraging modern AI tools and methodologies to accelerate development and deliver exceptional results.
          </p>
        </div>

        <div className="about__info">
          <div className="about__info-card">
            <div className="about__info-item">
              <FiMapPin className="about__info-icon" size={20} />
              <div>
                <span className="about__info-label">Location</span>
                <span className="about__info-value">{personal.location}</span>
              </div>
            </div>
            <div className="about__info-item">
              <FiMail className="about__info-icon" size={20} />
              <div>
                <span className="about__info-label">Email</span>
                <a href={`mailto:${personal.email}`} className="about__info-value about__info-value--link">
                  {personal.email}
                </a>
              </div>
            </div>
            <div className="about__info-item">
              <FiPhone className="about__info-icon" size={20} />
              <div>
                <span className="about__info-label">Phone</span>
                <a href={`tel:${personal.phone}`} className="about__info-value about__info-value--link">
                  {personal.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
