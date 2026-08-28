import React from 'react';

interface Skill {
  name: string;
  note: string;
  category: string;
}

const skillsData: Skill[] = [
  { name: 'Java', note: 'Concurrency, MVC, JUnit', category: 'Languages' },
  { name: 'Python', note: 'Data cleaning, tooling, PyQt', category: 'Languages' },
  { name: 'SQL', note: 'Schema design, queries', category: 'Languages' },

  { name: 'React', note: 'Current stack at Teleagriculture', category: 'Tools' },
  { name: 'Git / GitHub', note: 'Branching, review, CI', category: 'Tools' },
  { name: 'Linux / Unix', note: 'Shell, servers, deployment', category: 'Tools' },
  { name: 'Docker', note: 'Containerised services', category: 'Tools' },
];

const categories = ['Languages', 'Tools'];

export const SkillsGrid: React.FC = () => {
  return (
    <section className="skills-section">
      <h3 className="section-title">Technical Skills</h3>
      <div className="skills-container">
        {categories.map((category) => (
          <div key={category} className="skill-category-group">
            <h4 className="category-label">{category}</h4>
            <dl className="skill-index">
              {skillsData
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <dt className="skill-name">{skill.name}</dt>
                    <dd className="skill-note">{skill.note}</dd>
                  </div>
                ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
};
