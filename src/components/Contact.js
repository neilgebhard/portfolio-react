import { useState } from "react";
import styles from "./Contact.module.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const companyChangeHandler = (e) => {
    setCompany(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, company, message }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

  return (
    <section className={styles.section} onSubmit={handleSubmit}>
      <h1 className={styles.heading}>Contact me!</h1>
      <p>
        Looking to get hired! Based in Saipan, but open to remote work and/or
        relocation.
      </p>
      <form className={styles.form}>
        <div>
          <label for="full-name">Full Name</label>
          <input
            id="full-name"
            type="text"
            placeholder="Your Name"
            name="full-name"
            value={name}
            onChange={nameChangeHandler}
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
            value={email}
            onChange={emailChangeHandler}
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
            value={company}
            onChange={companyChangeHandler}
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
            value={message}
            onChange={messageChangeHandler}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Send me a message!
        </button>
      </form>
    </section>
  );
};

export default Contact;
