import React from 'react';
import { EnvelopeSimpleIcon, LinkedinLogoIcon, GithubLogoIcon } from '@phosphor-icons/react/ssr';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';

export default function ContactPage(): React.ReactElement {
  return (
    <div className="content">
      <ScrollFadeIn>
        <section className="opportunity-banner">
          <div className="banner-content">
            <h3>Open to Graduate and Early-Career Opportunities</h3>
            <p>
              I&apos;m currently in my final year of study and keen to connect with teams working on backend systems, cloud engineering, data-driven products, or thoughtful software development.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.2}>
        <section className="contact-me">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-me-info">
            The easiest way to reach me is by <strong>email</strong>, and I&apos;ll do my best to respond promptly. You can also find me on LinkedIn and GitHub below.
          </p>

          <div className="contact-grid">
            <a href="mailto:chris.gleitzman@gmail.com" className="contact-card contact-card-primary">
              <div className="contact-card-text">
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">chris.gleitzman@gmail.com</span>
              </div>
              <span className="contact-card-icon">
                <EnvelopeSimpleIcon size={22} weight="bold" />
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/christian-gleitzman"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-card-icon">
                <LinkedinLogoIcon size={20} weight="bold" />
              </span>
              <span className="contact-card-label">LinkedIn</span>
              <span className="contact-card-value">christian-gleitzman</span>
            </a>

            <a
              href="https://github.com/ChristianGleitzman"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-card-icon">
                <GithubLogoIcon size={20} weight="bold" />
              </span>
              <span className="contact-card-label">GitHub</span>
              <span className="contact-card-value">ChristianGleitzman</span>
            </a>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
}
