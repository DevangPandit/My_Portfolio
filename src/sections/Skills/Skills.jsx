import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';

function Skills() {
  const skillsData = {
    languages: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    ],
    webAndDB: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    ],
    networkingAndDevOps: [
      { name: 'DNS', icon: 'https://img.icons8.com/color/144/null/dns.png' },
      { name: 'HTTP/S', icon: 'https://img.icons8.com/color/144/null/globe--v1.png' },
      { name: 'TCP/IP', icon: 'https://img.icons8.com/color/144/null/network.png' },
      { name: 'SSH', icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/144/null/external-Ssh-it-communication-flat-icons-inmotus-design.png' },
      { name: 'Firewalls', icon: 'https://img.icons8.com/color/144/null/firewall.png' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-plain-wordmark.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
    tools: [
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'IntelliJ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
      { name: 'PyCharm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    ]
  };

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills & Expertise</h1>

      <div className={styles.skillGroups}>
        <div className={styles.skillSection}>
          <h2>Languages</h2>
          <div className={styles.skillList}>
            {skillsData.languages.map((s, i) => <SkillList key={i} src={s.icon} skill={s.name} />)}
          </div>
        </div>

        <div className={styles.skillSection}>
          <h2>Web & Databases</h2>
          <div className={styles.skillList}>
            {skillsData.webAndDB.map((s, i) => <SkillList key={i} src={s.icon} skill={s.name} />)}
          </div>
        </div>

        <div className={styles.skillSection}>
          <h2>Networking & DevOps</h2>
          <div className={styles.skillList}>
            {skillsData.networkingAndDevOps.map((s, i) => <SkillList key={i} src={s.icon} skill={s.name} />)}
          </div>
        </div>

        <div className={styles.skillSection}>
          <h2>Tools & Platforms</h2>
          <div className={styles.skillList}>
            {skillsData.tools.map((s, i) => <SkillList key={i} src={s.icon} skill={s.name} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
