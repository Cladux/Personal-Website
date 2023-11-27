import { useRef, FormEvent, useState } from "react";
import styles from "./Contact.module.scss";
import ContactTitle from "./components/contactTitle/ContactTitle";
import Icons from "../../icons";

const Contact = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // auto copy email wen click
  const emailRef = useRef<HTMLAnchorElement>(null);
  const copyText = () => {
    const text = emailRef.current?.innerText;
    if (text) {
      navigator.clipboard
        .writeText(text)
        .then(() => alert(`Email copied: ${text}`))
        .catch((err) => alert(`Could not copy text: ${err}`));
    }
  };

  //submit form handle
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Check if any field is empty
    if (!name || !email || !subject || !message) {
      // Show Please fill out pop-up
      alert("Please fill out all fields.");
      return;
    }

    // handle form submission here
    console.log({ name, email, subject, message });

    // Reset form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    // Show submitted pop-up
    alert("Form submitted successfully!");
  };
  const Icon = Icons["mailOpen"];
  return (
    <>
      <section id="Contact" className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <h4>CONTACT</h4>
            <div className={styles.contactTitleBox}>
              <a href="tel:+989030814004">
                <ContactTitle setIcon="phone" setTitle="+98 903 081 4004" />
              </a>
              <a
                href="mailto:sharifysoroush@gmail.com?"
                ref={emailRef}
                onClick={copyText}
              >
                <ContactTitle
                  setIcon="mail"
                  setTitle="sharifysoroush@gmail.com"
                />
              </a>
              <a
                href="https://maps.app.goo.gl/p8CuHKgSvjTGSqJY7"
                target="_blank"
              >
                <ContactTitle
                  setIcon="locationMarker"
                  setTitle="Hamedan, Iran"
                />
              </a>
            </div>
          </div>
          <div className={styles.rightSection}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputName}>
                <label htmlFor="your-name">Your name</label>
                <input
                  type="text"
                  id="your-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.inputEmail}>
                <label htmlFor="your-email">Your Email *</label>
                <input
                  type="email"
                  id="your-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.inputSubject}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className={styles.inputMessage}>
                <label htmlFor="message">Massage *</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className={styles.inputSubmit}>
                <button type="submit" className={styles.submit}>
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
