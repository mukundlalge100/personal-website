import type { ReactNode } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { RESUME_DATA } from '../../data/resume-data';
import profilePhoto from '../../assets/My_Photo.jpg';
import './Hero.scss';

export default function Hero(): ReactNode {
  const { personal } = RESUME_DATA;

  const scrollToAbout = (): void => {
    const element = document.getElementById('about');
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-grid" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__greeting">Hello, I&apos;m</span>
          <h1 className="hero__name">{personal.name}</h1>
          <p className="hero__title">{personal.title}</p>
          <p className="hero__summary">{personal.summary}</p>

          <div className="hero__actions">
            <a href={`mailto:${personal.email}`} className="hero__btn hero__btn--primary">
              <FiMail size={18} />
              Get in Touch
            </a>
            <a
              href={personal.linkedin}
              className="hero__btn hero__btn--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={18} />
              LinkedIn
            </a>
            <a
              href={personal.github}
              className="hero__btn hero__btn--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={18} />
              GitHub
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">7+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">3</span>
              <span className="hero__stat-label">Companies</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">Full Stack</span>
              <span className="hero__stat-label">Specialization</span>
            </div>
          </div>
        </div>

        <div className="hero__photo-wrapper">
          <div className="hero__photo-ring">
            <div className="hero__photo-glow" />
            <img
              src={profilePhoto}
              alt={`${personal.name} — ${personal.title}`}
              className="hero__photo"
              loading="eager"
            />
          </div>
          <div className="hero__photo-dots" />
        </div>
      </div>

      <button className="hero__scroll-indicator" onClick={scrollToAbout} type="button" aria-label="Scroll to about">
        <FiArrowDown size={20} />
      </button>
    </section>
  );
}
