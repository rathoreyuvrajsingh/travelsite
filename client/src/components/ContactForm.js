import React, { useState } from "react";
import "./ContactFormStyles.css";
import axios from "axios";

const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = user;

    if (name && email && subject && message) {
      axios
        .post("http://localhost:8080/contact", user)
        .then((res) => {
          console.log(res.data);
          alert('Request Submitted')

          setUser({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

        })
        .catch((error) => {
          alert("Request failed. Please try again.");
        });
    } else {
      alert("Invalid Contact data.");
    }
  };

  return (
    <div className="form-container">
      <h1>Send Message To Us</h1>
      <form className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={user.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="2"
          value={user.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" onClick={handleSubmit}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
