import "./Contact.css";
import { GrMail } from "react-icons/gr";
// import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  // const [showMessage, setShowMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hze2mi1",
      "template_xxeu89m",
      form.current,
      "6zE8AO9DxNkwi9tEc"
    );
    e.target.reset();

  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GrMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>code.tushar@gmail.com</h5>
            <a
              href="mailto:tushardeshmukh0511@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaLinkedinIn className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Tushar Deshmukh</h5>
            <a
              href="https://www.linkedin.com/in/tushii05/"
              target="_blank"
              rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {/* {showMessage && <p>Thanks for contacting us!</p>} */}
      </div>
    </section>
  );
};

export default Contact;
