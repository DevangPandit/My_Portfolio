import styles from './EducationStyles.module.css';

function Education() {
    return (
        <section id="education" className={styles.container}>
            <h1 className="sectionTitle">Education</h1>
            <div className={styles.educationList}>
                <div className={styles.educationItem}>
                    <h2>Algonquin College</h2>
                    <p className={styles.degree}>Computer Programming and Analysis</p>
                    <p className={styles.date}>2024 - Present</p>
                    <p className={styles.stats}>GPA: 3.6</p>
                </div>
                <div className={styles.educationItem}>
                    <h2>Ambe Vidyalaya</h2>
                    <p className={styles.degree}>High School</p>
                    <p className={styles.date}>2021 - 2023</p>
                    <p className={styles.stats}>Percentile: 95%</p>
                </div>
            </div>
        </section>
    );
}

export default Education;
