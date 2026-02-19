import type { ReactNode } from 'react';
import { FiExternalLink, FiFolder } from 'react-icons/fi';
import Section from '../Section/Section';
import { RESUME_DATA } from '../../data/resume-data';
import './Projects.scss';

export default function Projects(): ReactNode {
  const { projects } = RESUME_DATA;

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Personal and learning projects I've built"
    >
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="projects__card">
            <div className="projects__card-header">
              <div className="projects__card-icon">
                <FiFolder size={24} />
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="projects__card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} live demo`}
                >
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
            <h3 className="projects__card-title">{project.name}</h3>
            <p className="projects__card-period">{project.period}</p>
            <p className="projects__card-description">{project.description}</p>
            <div className="projects__card-tech">
              {project.techStack.map((tech) => (
                <span key={tech} className="projects__card-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
