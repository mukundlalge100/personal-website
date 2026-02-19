import type { ReactNode } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { RESUME_DATA } from '../../data/resume-data';
import './Footer.scss';

export default function Footer(): ReactNode {
  const { personal } = RESUME_DATA;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__copyright">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="footer__tagline">
            Built with React, TypeScript &amp; SCSS
          </p>
        </div>

        <div className="footer__socials">
          <a
            href={personal.github}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={personal.linkedin}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="footer__social-link"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
