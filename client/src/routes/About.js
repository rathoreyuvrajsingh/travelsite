import React from "react";
import AboutImg from "../assets/about.jpg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Your Journey Your Story"
        btnClass="hide"
      />
      <AboutUs/>
      <Footer />
    </>
  );
}
export default About;
