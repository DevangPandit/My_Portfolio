import styles from './ExperienceStyles.module.css';
import saviLogo from '../../assets/savi-logo.png';

function Experience() {
    return (
        <section id="experience" className={styles.container}>
            <h1 className="sectionTitle">Experience</h1>
            <div className={styles.experienceList}>
                <div className={styles.experienceItem}>
                    <span className={styles.date}>May 2025 – September 2025</span>
                    <div className={styles.headerArea}>
                        <div className={styles.companyInfo}>
                            <img
                                src={saviLogo}
                                alt="Savi Finance Logo"
                                className={styles.companyLogo}
                            />
                            <h2>Savi Finance</h2>
                        </div>
                        <p className={styles.role}>Plaid API Integration Project</p>
                    </div>
                    <ul className={styles.description}>
                        <li>Collaborated with a real client to integrate Plaid API, simulating bank account linking, transactions retrieval, and sandbox event handling.</li>
                        <li>Developed a dummy UI and used Postman to demonstrate data flow and validate backend logic.</li>
                        <li>Automated sandbox provisioning using CI/CD pipelines and implemented logging with secure handling of Plaid credentials.</li>
                        <li>Documented testing procedures, standard data formats, and REST API workflows to enhance team collaboration.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;
