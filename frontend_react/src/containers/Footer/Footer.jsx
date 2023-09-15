import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapers";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", messae: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();

    if (name && email && message) {
      setLoading(true);
      setErrorMessage(null);
      const contact = {
        _type: "contact",
        name: name,
        email: email,
        message: message,
      };

      client.create(contact).then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
    } else {
      setErrorMessage("All fields are reqired");
    }
  };
  return (
    <>
      <h2 className="head-text">Take a cofee & chat with me</h2>
      <div className="app__footer-cards" id="Contact">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:sulemansddq@gmail.com" className="p-text">
            sulemansddq@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+92 3059865169" className="p-text">
            +92 305 9865169
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              name="name"
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>

          <div className="app__flex">
            <input
              name="email"
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              className="p-text"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
              required
            ></textarea>
          </div>
          <p className="p-text" style={{ color: "red" }}>
            {errorMessage}
          </p>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
