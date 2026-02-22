import { useState } from 'react';
import styles from './HeaderStyles.module.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.shimmerBg}></div>
            <div className={styles.logo}>Devang Pandit.</div>
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                <span className={isMenuOpen ? styles.barActive : styles.bar}></span>
                <span className={isMenuOpen ? styles.barActive : styles.bar}></span>
                <span className={isMenuOpen ? styles.barActive : styles.bar}></span>
            </button>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                <ul className={styles.navList}>
                    <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                    <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                    <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                    <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
                    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
