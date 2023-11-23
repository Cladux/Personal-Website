import styles from "./Contact.module.scss";
import ContactTitle from "./components/contactTitle/ContactTitle";

const Contact = (): JSX.Element => {
  return (
    <>
      <section className={styles.contact} id="Contact">
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <h4>CONTACT</h4>
            <div className={styles.contactTitleBox}>
              <ContactTitle setIcon="phone" setTitle="+98 903 081 4004" />
              <ContactTitle
                setIcon="mail"
                setTitle="sharifysoroush@gmail.com"
              />
              <ContactTitle setIcon="locationMarker" setTitle="Hamedan, Iran" />
            </div>
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
