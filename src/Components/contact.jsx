import React from "react";

const Contact = () => {
  return (
    <div>
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Une Question en Tête ?</h1>
      <h1 className="primary-heading">Laissez-Nous Vous Aider</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
    </div>
  );
};

export default Contact;