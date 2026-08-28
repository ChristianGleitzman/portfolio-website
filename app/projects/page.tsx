import React from 'react';
import { ProjectsGrid } from '@/components/ProjectsCarousel';
import { ManualProjects } from '@/components/ManualProjects';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    topics: string[];
    default_branch: string;
    fork: boolean;
}

export default async function ProjectsPage() {
    const username = 'ChristianGleitzman';
    const excludedRepos = ['ChristianGleitzman.github.io', 'portfolio-website'];
    
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
    
    if (!res.ok) {
        return <div className="content"><p>Failed to load projects.</p></div>;
    }

    const repos: GitHubRepo[] = await res.json();

    const portfolioProjects = repos.filter(repo =>
        !repo.fork &&
        !excludedRepos.includes(repo.name) &&
        repo.topics.includes('portfolio')
    );

    return (
        <div className="content projects">
            <ScrollFadeIn>
                <section className="projects-intro">
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-text">
                        A mix of coursework, personal projects, and the platform I&apos;m currently building at Teleagriculture. Source is on GitHub for anything that isn&apos;t still private.
                    </p>
                </section>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
                <div style={{ marginBottom: '3rem' }}>
                    <h3 className="section-title" style={{ marginBottom: '1.5rem' }}>Featured Work</h3>
                    <ManualProjects />
                </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.4}>
                <div>
                    <h3 className="section-title" style={{ marginBottom: '1.5rem' }}>Additional Projects</h3>
                    <ProjectsGrid repos={portfolioProjects} username={username} />
                </div>
            </ScrollFadeIn>
        </div>
    );
}