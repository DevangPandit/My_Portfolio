import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import globeTraviaLogo from '../../assets/globe-travia-logo.png';

function Projects() {
  const tech = {
    html: { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    css: { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    js: { name: 'JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    react: { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    vite: { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    php: { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    apache: { name: 'Apache', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
    sql: { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    java: { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    python: { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    flask: { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    qrcode: { name: 'QR Lib', icon: 'https://img.icons8.com/color/48/null/qr-code.png' },
    mongodb: { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Featured Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={globeTraviaLogo}
          link="https://github.com/DevangPandit/GlobeTravia"
          github="https://github.com/DevangPandit/GlobeTravia"
          h3="Globe Travia"
          p="Travel Platform"
          description="A global travel planning platform with real-time destination insights."
          technologies={[tech.html, tech.css, tech.js, tech.react, tech.vite]}
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
          src="https://img.icons8.com/color/144/null/calendar--v1.png"
          link="https://github.com/DevangPandit/EventPlanner"
          github="https://github.com/DevangPandit/EventPlanner"
          h3="Event Planner"
          p="Management Tool"
          description="Organize professional and personal events with robust scheduling."
          technologies={[tech.html, tech.css, tech.js, tech.php, tech.apache, tech.sql]}
        />
        <ProjectCard
          src="https://img.icons8.com/color/144/null/checked-checkbox.png"
          link="https://github.com/DevangPandit/HabitTracker"
          github="https://github.com/DevangPandit/HabitTracker"
          h3="Habit Tracker"
          p="Productivity App"
          description="Build and maintain healthy habits with progress tracking."
          technologies={[tech.java, tech.html, tech.css, tech.js, tech.react, tech.sql]}
        />
        <ProjectCard
          src="https://img.icons8.com/color/144/null/qr-code.png"
          link="https://github.com/DevangPandit/QR-Code-Generator"
          github="https://github.com/DevangPandit/QR-Code-Generator"
          h3="QR Code Generator"
          p="Utility App"
          description="Fast and efficient utility for generating customizable QR codes."
          technologies={[tech.python, tech.flask, tech.qrcode, tech.html, tech.css]}
        />
      </div>
    </section>
  );
}

export default Projects;
