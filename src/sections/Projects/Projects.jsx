import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import globeTraviaLogo from '../../assets/globe-travia-logo.png';
import luminaraLogo from '../../assets/luminara-logo.png';

function Projects() {
  const tech = {
    html: { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    css: { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    js: { name: 'JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    react: { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    reactjs: { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    vite: { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    php: { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    apache: { name: 'Apache', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
    sql: { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    java: { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    python: { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    flask: { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    qrcode: { name: 'QR Lib', icon: 'https://img.icons8.com/color/48/null/qr-code.png' },
    mongodb: { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    fastapi: { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    vectordb: { name: 'Vector DB', icon: 'https://img.icons8.com/color/48/null/data-configuration.png' },
    llama: { name: 'Llama 3.3', icon: 'https://img.icons8.com/color/48/null/artificial-intelligence.png' },
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Featured Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={luminaraLogo}
          link="https://luminara.up.railway.app"
          github="https://github.com/DevangPandit/luminara-research-assistant"
          h3="Luminara"
          p="AI Research Assistant"
          description="An AI-powered research assistant that helps you get an overview of any uploaded documents in seconds."
          technologies={[tech.python, tech.fastapi, tech.vectordb, tech.reactjs, tech.llama]}
        />
        <ProjectCard
          src="https://img.icons8.com/color/144/null/briefcase.png"
          link="https://github.com/DevangPandit"
          github="https://github.com/DevangPandit"
          h3="Job Tracker"
          p="Productivity Tool"
          description="Efficiently track job applications, interviews, and follow-ups in one place."
          technologies={[tech.html, tech.css, tech.js, tech.react, tech.vite, tech.mongodb]}
        />
        <ProjectCard
          src={globeTraviaLogo}
          link="https://globe-travia.vercel.app"
          github="https://github.com/DevangPandit/GlobeTravia"
          h3="Globe Travia"
          p="Travel Platform"
          description="A global travel planning platform with real-time destination insights."
          technologies={[tech.html, tech.css, tech.js, tech.react, tech.vite]}
        />
      </div>
    </section>
  );
}

export default Projects;
