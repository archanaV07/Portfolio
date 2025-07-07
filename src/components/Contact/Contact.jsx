import React from "react";
import styles from "./Contact.module.css";

 const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"../assets/contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:archanavishwanath06@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img src={"../assets/contact/linkedinIcon.png"} alt="linkedIn icon" />
          <a href="https://www.linkedin.com/in/archana-vishwanath/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={"../assets/contact/githubIcon.png"} alt="github icon" />
          <a href="https://github.com/archanaV07">Github</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;