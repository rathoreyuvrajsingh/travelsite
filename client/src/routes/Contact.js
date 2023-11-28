import React from "react";
import ContactImg from "../assets/contact.jpg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer />
    </>
  );
}
export default Contact;
