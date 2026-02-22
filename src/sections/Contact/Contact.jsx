import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Get In Touch</h1>
      <div className={styles.formContainer}>
        <form action="https://formspree.io/f/xvgopvzk" method="POST">
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Devang Pandit"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="e.g. devang@example.com"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="How can I help you?"
              required></textarea>
          </div>
          <input className={styles.btn} type="submit" value="Send Message" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
