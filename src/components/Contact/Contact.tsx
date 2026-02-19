import type { ReactNode } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import Section from '../Section/Section';
import { RESUME_DATA } from '../../data/resume-data';
import './Contact.scss';

export default function Contact(): ReactNode {
  const { personal } = RESUME_DATA;

  const contactLinks = [
    {
      icon: <FiMail size={22} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <FiPhone size={22} />,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: <FiMapPin size={22} />,
      label: 'Location',
      value: personal.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personal.location)}`,
    },
    {
      icon: <FiLinkedin size={22} />,
      label: 'LinkedIn',
      value: 'Mukund Lalge',
      href: personal.linkedin,
    },
    {
      icon: <FiGithub size={22} />,
      label: 'GitHub',
      value: 'mukundlalge',
      href: personal.github,
    },
  ];

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Feel free to reach out for collaborations or just a friendly hello"
      variant="dark"
    >
      <div className="contact">
        <div className="contact__cta">
          <div className="contact__cta-icon">
            <FiSend size={32} />
          </div>
          <h3 className="contact__cta-title">Let&apos;s work together</h3>
          <p className="contact__cta-text">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a href={`mailto:${personal.email}`} className="contact__cta-btn">
            <FiMail size={18} />
            Send me an email
          </a>
        </div>

        <div className="contact__links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact__link"
              target={link.label !== 'Email' && link.label !== 'Phone' ? '_blank' : undefined}
              rel={link.label !== 'Email' && link.label !== 'Phone' ? 'noopener noreferrer' : undefined}
            >
              <span className="contact__link-icon">{link.icon}</span>
              <div className="contact__link-info">
                <span className="contact__link-label">{link.label}</span>
                <span className="contact__link-value">{link.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
