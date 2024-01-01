import { useRef, FormEvent } from "react";
import styles from "./Contact.module.scss";
import ContactTitle from "./components/contactTitle/ContactTitle";
import Icons from "../../icons";
import emailjs from "@emailjs/browser";

const Contact = (): JSX.Element => {
  const Icon = Icons["mailOpen"];

  // auto copy email wen clicked
  const emailRef = useRef<HTMLAnchorElement>(null);
  const copyText = () => {
    const text = emailRef.current?.innerText;
    if (text) {
      navigator.clipboard
        .writeText(text)
        .then(() => alert(`Email copied: ${text}`));
    }
  };

  //send Email handle
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.current) {
      // Get form data
      const formData = new FormData(form.current);
      const userName = formData.get("user_name");
      const userEmail = formData.get("user_email");
      const message = formData.get("message");
      // Check if fields are not empty
      if (userName && userEmail && message) {
        emailjs
          .sendForm(
            "service_cxxzf95",
            "template_m21jpdj",
            form.current,
            "20wX-LPdJwHrijlCJ"
          )
          .then(
            (result) => {
              console.log(result.text);
              alert("massage send!");
              // Reset form fields after successful email send
              if (form.current !== null) {
                form.current.reset();
              }
            },
            (error) => {
              console.log(error.text);
            }
          );
      } else {
        alert("Please fill all the fields before sending.");
      }
    }
  };

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
            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.inputName}>
                <label htmlFor="your-name">Your name</label>
                <input
                  type="text"
                  id="your-name"
                  name="user_name"
                  minLength={3}
                  maxLength={20}
                />
              </div>
              <div className={styles.inputEmail}>
                <label htmlFor="your-email">Your Email *</label>
                <input
                  type="email"
                  id="your-email"
                  name="user_email"
                  minLength={6}
                  maxLength={30}
                />
              </div>
              <div className={styles.inputSubject}>
                <label htmlFor="subject">Subject</label>
                <input type="text" minLength={6} maxLength={50} />
              </div>
              <div className={styles.inputMessage}>
                <label htmlFor="message">Massage *</label>
                <textarea
                  id="message"
                  name="message"
                  minLength={5}
                  maxLength={4000}
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
