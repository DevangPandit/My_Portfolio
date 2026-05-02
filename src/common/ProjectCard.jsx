import React from 'react';
import styles from '../sections/Projects/ProjectsStyles.module.css';
import githubIcon from '../assets/github-light.svg'; // Defaulting to one, usually handled by theme but using one for now

function ProjectCard({ src, link, h3, p, technologies, description, github }) {
  return (
    <div className={styles.card}>
      {link ? (
        <a href={link} className={styles.imgLink} target="_blank" rel="noopener noreferrer">
          <div className={styles.imgContainer}>
            <img src={src} alt={`${h3} logo`} />
          </div>
        </a>
      ) : (
        <div className={styles.imgContainer}>
          <img src={src} alt={`${h3} logo`} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h3>{h3}</h3>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
              <img src={githubIcon} alt="GitHub Repository" />
            </a>
          )}
        </div>
        <p className={styles.type}>{p}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.techStack}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techTag}>
              <img src={tech.icon} alt={tech.name} className={styles.techIcon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
