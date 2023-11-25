import styles from "./Contact.module.scss";
import ContactTitle from "./components/contactTitle/ContactTitle";
import Icons from "../../icons";

const Contact = (): JSX.Element => {
  const Icon = Icons["mailOpen"];
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
              <div className={styles.inputName}>
                <label htmlFor="your-name">Your name</label>
                <input type="text" id="your-name" />
              </div>
              <div className={styles.inputEmail}>
                <label htmlFor="your-email">Your Email</label>
                <input type="email" id="your-email" />
              </div>
              <div className={styles.inputSubject}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" />
              </div>
              <div className={styles.inputMassage}>
                <label htmlFor="massage">Massage</label>
                <textarea id="massage"></textarea>
              </div>
              <div className={styles.inputSubmit}>
                <button className={styles.submit}>
                  <i>
                    <Icon />
                  </i>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
