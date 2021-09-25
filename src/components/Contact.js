import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <h1 className={styles.heading}>Contact me!</h1>
      <p>
        Looking to get hired! Based in Saipan, but open to remote work and/or
        relocation.
      </p>
      <form
        className={styles.form}
        name="contact"
        method="POST"
        action="/contact/?success=true"
        data-netlify="true"
      >
        <input type="hidden" name="contact-form" value="contact" />
        <div>
          <label for="full-name">Full Name</label>
          <input
            id="full-name"
            type="text"
            placeholder="Your Name"
            name="full-name"
            required
          />
        </div>

        <div>
          <label for="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            name="email"
            required
          />
        </div>
        <div>
          <label for="company">Company</label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="Your company"
            required
          />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea
            id="message"
            type="text"
            name="message"
            placeholder="I would like to talk you about.."
            rows="5"
            required
          />
        </div>
        <button className={styles.button}>Send me a message!</button>
      </form>
    </section>
  );
};

export default Contact;
