import styles from './AchievementsStyles.module.css';

function Achievements() {
    return (
        <section id="achievements" className={styles.container}>
            <h1 className="sectionTitle">Achievements</h1>
            <div className={styles.achievementsList}>
                <div className={styles.achievementItem}>
                    <h2>AlgoHack Hackathon</h2>
                    <p className={styles.title}>1st Place Winner</p>
                    <p className={styles.date}>2026</p>
                    <p className={styles.description}>Won 1st place at the AlgoHack hackathon, demonstrating exceptional problem-solving and algorithmic skills.</p>
                </div>
                <div className={styles.achievementItem}>
                    <h2>Dean's Honours</h2>
                    <p className={styles.title}>Algonquin College</p>
                    <p className={styles.date}>2024 - Present</p>
                    <p className={styles.description}>Consistently maintained high academic standards, earning a place on the Dean's Honours List.</p>
                </div>
            </div>
        </section>
    );
}

export default Achievements;
