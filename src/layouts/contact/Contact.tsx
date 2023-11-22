import styles from "./Contact.module.scss";

const Contact = (): JSX.Element => {
  return (
    <>
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <h4>CONTACT</h4>
          </div>
          <div className={styles.rightSection}>
            <form action="">
              <label htmlFor="your-name">Your name</label>
              <input type="text" id="your-name" />
              <label htmlFor="your-email">Your Email</label>
              <input type="email" id="your-email" />
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
              <label htmlFor="massage">Massage</label>
              <textarea id="massage"></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
