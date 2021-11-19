import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__title">Contact Us</h2>
      <form className="contact__form">
        <label className="contact__label" for="name">
          name
        </label>
        <input
          className="contact__field"
          id="name"
          name="name"
          placeholder="John Smith"
        />
        <label className="contact__label" for="email">
          email
        </label>
        <input
          className="contact__field"
          id="email"
          name="email"
          placeholder="john.smith@evolve.com"
        />
        <label className="contact__label" for="subject">
          subject
        </label>
        <input
          className="contact__field"
          id="subject"
          name="subject"
          placeholder="what's on your mind"
        />
        <button className="contact__btn">SUBMIT</button>
      </form>
    </section>
  );
}

export default Contact;
