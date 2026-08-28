import React from 'react';
import { TrophyIcon } from '@phosphor-icons/react/ssr';
import { SkillsGrid } from '@/components/SkillsGrid';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';
import { SectionRail } from '@/components/SectionRail';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'seeking', label: 'Seeking' },
];

const experience = [
  {
    id: 'teleagriculture',
    title: 'Programmer RA / Technical Lead',
    org: 'Teleagriculture',
    period: 'Jul 2026 - Present',
    current: true,
    body: (
      <>
        I&apos;m leading the technical direction of a <strong>cloud-based web application</strong>{' '}
        that ingests and manages data from teleagriculture sensors. It&apos;s still early days, and I&apos;m doing
        both the architecture decisions and the hands-on implementation.
      </>
    ),
  },
  {
    id: 'winchester',
    title: 'Research Analyst Intern',
    org: 'Winchester Housing Trust',
    period: 'Summer 2025',
    body: (
      <>
        I carried out a <strong>tenant satisfaction follow-up survey</strong>, managing the end-to-end data
        collection process to audit service standards and help shape an action plan for improving services.
        I also used <strong>Python and data analysis tools</strong> to clean, validate, and aggregate
        community feedback into clear insights.
      </>
    ),
  },
  {
    id: 'tesco',
    title: 'Retail Team Member',
    org: 'Tesco',
    period: 'Part-time',
    body: (
      <>
        Working in a high-pressure retail environment has honed my{' '}
        <strong>adaptability, teamwork, and communication skills</strong>. I learned to manage time
        effectively, work under pressure, and deliver consistent results while supporting a wide range of
        customer needs.
      </>
    ),
  },
];

export default function AboutPage(): React.ReactElement {
  return (
    <div className="content about-layout">
      <SectionRail sections={sections} />

      <div className="about-main">
        <ScrollFadeIn>
          <section id="about" className="overview-section">
            <h3 className="section-title">About Me</h3>
            <div className="achievement-badge">
              <TrophyIcon size={16} weight="fill" />
              Netcraft Prize winner, 2 years running
            </div>
            <p className="section-text lede">
              I&apos;m a <strong>final-year Computer Science undergraduate</strong> at the University of
              Southampton, with an <strong>80% Year 2 average</strong> and an{' '}
              <strong>88% Year 1 average</strong>. Both placed me in the top 10 of my cohort, which earned
              me the <strong>Netcraft Prize</strong> two years running. I&apos;m most interested in{' '}
              <strong>backend development, systems design, and cloud-based engineering</strong>, and I like
              building software that actually solves the problem in front of it.
            </p>
          </section>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.15}>
          <section id="skills">
            <SkillsGrid />
          </section>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.15}>
          <section id="experience" className="activities-section">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((role) => (
                <article
                  key={role.id}
                  className={`experience-item ${role.current ? 'current' : ''}`}
                >
                  <div className="experience-header">
                    <h4 className="experience-title">
                      {role.title}
                      <span className="experience-org">{role.org}</span>
                    </h4>
                    <span className="experience-period">{role.period}</span>
                  </div>
                  <p className="experience-details">{role.body}</p>
                </article>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.15}>
          <section id="seeking" className="aspirations-section">
            <h3 className="section-title">What I&apos;m Seeking</h3>
            <div className="section-text">
              <p>
                I&apos;m now focused on{' '}
                <strong>graduate and early-career software engineering opportunities</strong>{' '}
                as I complete my degree and continue building practical experience. I&apos;m particularly interested in
                roles that involve:
              </p>
              <ul>
                <li>Backend and systems engineering roles</li>
                <li>Cloud and infrastructure-focused development</li>
                <li>Work that values code quality, software design, and collaboration</li>
                <li>Teams that encourage learning, mentorship, and continuous improvement</li>
              </ul>
              <p>
                If you&apos;re interested in connecting, collaborating, or discussing opportunities, feel
                free to reach out via <a className="inlineLink" href="/contact">my contact page</a> or on{' '}
                <a
                  className="inlineLink"
                  href="https://www.linkedin.com/in/christian-gleitzman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </section>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
