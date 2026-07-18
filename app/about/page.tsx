import React from 'react';
import { SkillsGrid } from '@/components/SkillsGrid';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';

export default function AboutPage(): React.ReactElement {
  return (
    <div className="content">
      <ScrollFadeIn>
        <section className="overview-section">
          <h3 className="section-title">About Me</h3>
          <p className="section-text">
            I&apos;m a <strong>final-year Computer Science undergraduate</strong> at the University of Southampton, maintaining strong academic performance with an <strong>80% Year 2 average</strong> and an <strong>88% Year 1 average</strong> that placed me in the top 10 of my cohort. My interests sit at the intersection of <strong>backend development, systems design, and cloud-based engineering</strong>, and I&apos;m especially motivated by building software that solves practical problems well.
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.2}>
        <SkillsGrid />
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.4}>
        <section className="activities-section">
          <h3 className="section-title">Experience</h3>
          <div className="experience-item">
            <h4 className="experience-title">Research Analyst Intern - Winchester Housing Trust</h4>
            <p className="experience-details">
              I carried out a <strong>tenant satisfaction follow-up survey</strong>, managing the end-to-end data collection process to audit service standards and help shape an action plan for improving services. I also used <strong>Python and data analysis tools</strong> to clean, validate, and aggregate community feedback into clear insights.
            </p>
          </div>
          <div className="experience-item">
            <h4 className="experience-title">Retail Team Member - Tesco</h4>
            <p className="experience-details">
              Working in a high-pressure retail environment has honed my <strong>adaptability, teamwork, and communication skills</strong>. I learned to manage time effectively, work under pressure, and deliver consistent results while supporting a wide range of customer needs.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.6}>
        <section className="aspirations-section">
          <h3 className="section-title">What I&apos;m Seeking</h3>
          <p className="section-text">
            I&apos;m now focused on <strong>graduate and early-career software engineering opportunities</strong> as I complete my degree and continue building practical experience. I&apos;m particularly interested in roles that involve:
          </p>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>Backend and systems engineering roles</li>
            <li>Cloud and infrastructure-focused development</li>
            <li>Work that values code quality, software design, and collaboration</li>
            <li>Teams that encourage learning, mentorship, and continuous improvement</li>
          </ul>
          <p className="section-text" style={{ marginTop: '1.5rem' }}>
            If you&apos;re interested in connecting, collaborating, or discussing opportunities, feel free to reach out via <a className="inlineLink" href="/contact">my contact page</a> or on <a className="inlineLink" href="https://www.linkedin.com/in/christian-gleitzman" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </section>
      </ScrollFadeIn>
    </div>
  );
}