'use client';

import React, { useState } from 'react';
import { GithubLogoIcon, ArrowSquareOutIcon } from '@phosphor-icons/react';
import { useSpotlight } from './useSpotlight';

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

interface ProjectCardProps {
    repo: GitHubRepo;
    username: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ repo, username }) => {
    const [imageError, setImageError] = useState(false);
    const [triedFallback, setTriedFallback] = useState(false);
    const spotlight = useSpotlight();

    // Try .PNG first (uppercase), then png (lowercase)
    const currentImageUrl = triedFallback
        ? `https://raw.githubusercontent.com/${username}/${repo.name}/${repo.default_branch}/preview.png`
        : `https://raw.githubusercontent.com/${username}/${repo.name}/${repo.default_branch}/preview.PNG`;

    const handleImageError = () => {
        if (!triedFallback) {
            // Try the lowercase .png next time
            setTriedFallback(true);
        } else {
            // Both failed, show placeholder
            setImageError(true);
        }
    };

    return (
        <article className="project-card spotlight" style={{ display: 'flex', flexDirection: 'column' }} {...spotlight}>
            <h3 className="project-title">{repo.name}</h3>
            <div className="project-images">
                {!imageError ? (
                    <img
                        key={currentImageUrl}
                        src={currentImageUrl}
                        alt={`${repo.name} preview`}
                        onError={handleImageError}
                    />
                ) : (
                    <div className="project-image-placeholder">
                        Add preview image to repo
                    </div>
                )}
            </div>
            <p className="project-description" style={{ flexGrow: 1 }}>
                {repo.description ?? "No description provided."}
            </p>
            <div className="project-links">
                <a href={repo.html_url} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <GithubLogoIcon size={16} weight="bold" />
                    View Code
                </a>
                {repo.homepage && (
                    <a href={repo.homepage} className="btn" target="_blank" rel="noopener noreferrer">
                        <ArrowSquareOutIcon size={16} weight="bold" />
                        Live Demo
                    </a>
                )}
            </div>
        </article>
    );
};
