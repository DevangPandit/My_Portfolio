import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import globeTraviaLogo from '../../assets/globe-travia-logo.png';
import luminaraLogo from '../../assets/luminara-logo.png';
import spendsmartLogo from '../../assets/spendsmart-logo.svg';

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
    nodejs: { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    express: { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    daisyui: { name: 'Daisy UI', icon: 'https://img.icons8.com/fluency/48/null/daisy.png' },
    groq: { name: 'Groq API', icon: 'https://img.icons8.com/color/48/null/brain.png' },
    kotlin: { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    androidstudio: { name: 'Android Studio', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg' },
    restapi: { name: 'REST APIs', icon: 'https://img.icons8.com/color/48/null/api.png' },
    sqlite: { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
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
          src="https://img.icons8.com/color/144/null/android-os.png"
          link=""
          github=""
          h3="SensorSync"
          p="Android IoT Client-Server App"
          description="A dual-mode Android IoT app with client-server architecture, QR pairing, real-time sensor data tracking, and SQLite persistence."
          technologies={[tech.kotlin, tech.androidstudio, tech.restapi, tech.sqlite]}
        />
        <ProjectCard
          src={spendsmartLogo}
          link=""
          github=""
          h3="SpendSmart"
          p="Financial Tracking Platform"
          description="A comprehensive expense management and financial tracking application with AI-powered insights."
          technologies={[tech.react, tech.nodejs, tech.express, tech.mongodb, tech.daisyui, tech.groq]}
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
