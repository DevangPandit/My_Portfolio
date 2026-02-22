import React from 'react';
import styles from './AboutStyles.module.css';

function About() {
    return (
        <section id="about" className={styles.container}>
            <h1 className="sectionTitle">About Me</h1>
            <div className={styles.content}>
                <p className={styles.bio}>
                    I am a passionate Software Developer dedicated to building high-performance web applications and solving complex technical challenges. My expertise spans across modern frontend frameworks, robust backend systems, and cloud-native architectures. I thrive in collaborative environments where I can leverage my skills in API integrations, automated CI/CD pipelines, and premium UI design to deliver exceptional user experiences.
                </p>
                <div className={styles.contactInfo}>
                    <a href="mailto:panditdevang7@gmail.com" className={styles.contactItem} title="Email Me">
                        <img src="https://img.icons8.com/color/48/null/gmail-new.png" alt="Email Icon" />
                        <span>panditdevang7@gmail.com</span>
                    </a>
                    <a href="tel:3435483151" className={styles.contactItem} title="Call Me">
                        <img src="https://img.icons8.com/color/48/null/phone.png" alt="Phone Icon" />
                        <span>+1 (343) 548-3151</span>
                    </a>
                    <div className={styles.contactItem} title="Location">
                        <img src="https://img.icons8.com/color/48/null/marker.png" alt="Location Icon" />
                        <span>Ottawa, ON</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
